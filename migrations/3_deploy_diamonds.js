var Diamonds = artifacts.require("./Diamonds.sol"); 

module.exports = function (deployer) {
    deployer.deploy(Diamonds, { gas: 4000000 });
};
