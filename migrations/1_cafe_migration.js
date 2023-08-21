const Cafe = artifacts.require("Cafe");

module.exports = function (deployer) {
  deployer.deploy(Cafe);
};
