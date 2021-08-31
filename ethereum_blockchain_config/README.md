# Ethereum chain

## Pre-requirements

- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)
- [Task](https://taskfile.dev)
- curl

## First start

All steps are described on [openethereum tutorial page](https://openethereum.github.io/Demo-PoA-tutorial).

We did some modifications:

1. Step 1 is already done. Chainspec is available in config directory
2. To create accounts and start chain execute `task start:first`. For now please use one password and put it in `config/password`
3. You might need to add generated accounts to chainspec file (validators section)
4. Step skipped
5. Run `task enode` and copy results from requests (`enode://RESULT` part) to config/peers file. Restart containers with `task:start`
6. You can check if everything works correctly running commands from the page. Remember to call RPC for more info from blockchain

Debug url to check if transfer works
`curl --data '{"jsonrpc":"2.0","method":"personal_sendTransaction","params":[{"from":"0x9ef557ef7f32f430c2c020455bab4f723df5f0c7","to":"0x38a7f7c4f7b7aca9ba825300e453ec1edf753f35","value":"0xde0b6b3a7640000"}, "test"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8545`
