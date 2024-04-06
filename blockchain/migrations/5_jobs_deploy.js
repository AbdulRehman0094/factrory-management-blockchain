const Jobs = artifacts.require("Jobs");
const { networks: equipmentsNetwork } = require('../build/contracts/Equipments.json');
const { networks: productsNetwork } = require('../build/contracts/Products.json');


const equipmentsAddress = Object.values(equipmentsNetwork)[0].address;
const productsAddress = Object.values(productsNetwork)[0].address;

module.exports = function (deployer) {
    deployer.deploy(Jobs, productsAddress, equipmentsAddress);
};
