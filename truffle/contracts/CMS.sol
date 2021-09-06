pragma solidity 0.8.0;

contract CMS {
    address public owner = msg.sender;
    uint public last_completed_migration;

    struct Source {
        address ownerId;
        string name;
        bool isBooked;
    }

    struct Post {
        string sourceName;
        string title;
        string content;
    }

    mapping(string => Source) public sources;
    mapping(string => Post[]) public postsInSource;
    mapping(string => Post[]) public tags;

    modifier restricted() {
        require(
            msg.sender == owner,
            "This function is restricted to the contract's owner"
        );
        _;
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

    function openNewSource(string memory name) public {
        require(!sources[name].isBooked, "This source is already taken");
        sources[name].isBooked = true;
        sources[name].name = name;
        sources[name].ownerId = msg.sender;
    }

    function getSource(string memory name) view public returns (Source memory) {
        require(sources[name].isBooked, "The source not found");

        return sources[name];
    }

    function addPost(string memory sourceName, string memory title, string memory content) public returns (Post memory) {
        require(sources[sourceName].isBooked, "The source not found");
        require(sources[sourceName].ownerId == msg.sender, "You should be an owner of the source");

        Post memory post = Post(sourceName, title, content);
        postsInSource[sourceName].push(post);

        return post;
    }

    function getPosts(string memory sourceName) view public returns (Post[] memory) {
        return postsInSource[sourceName];
    }
}
