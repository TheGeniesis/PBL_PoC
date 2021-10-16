const CMS = artifacts.require("CMS");

module.exports = function (deployer) {
  deployer.deploy(CMS);
};
