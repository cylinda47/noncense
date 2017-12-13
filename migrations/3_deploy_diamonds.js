var Diamonds = artifacts.require("./Diamonds.sol"); 

module.exports = function (deployer) {
    deployer.deploy(Diamonds);
};
