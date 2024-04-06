const Orders = artifacts.require("Orders");
const { networks: productsNetwork } = require('../build/contracts/Products.json');
const productsAddress = Object.values(productsNetwork)[0].address;

module.exports = function (deployer) {
    deployer.deploy(Orders, productsAddress);
};