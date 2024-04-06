const Equipments = artifacts.require("Equipments");
const { networks: factoryNetwork } = require('../build/contracts/Factory.json');
const factoryAddress = Object.values(factoryNetwork)[0].address;
module.exports = function (deployer) {
    deployer.deploy(Equipments, factoryAddress);
};