const { Web3 } = require('web3');

const web3 = new Web3('http://127.0.0.1:9545');

const { abi: userAbi, networks: userNetwork } = require('./build/contracts/User.json');
const { abi: factoryAbi, networks: factoryNetwork } = require('./build/contracts/Factory.json');
const { abi: productsAbi, networks: productsNetwork } = require('./build/contracts/Products.json');
const { abi: equipmentsAbi, networks: equipmentsNetwork } = require('./build/contracts/Equipments.json');
const { abi: jobsAbi, networks: jobsNetwork } = require('./build/contracts/Jobs.json');
const { abi: ordersAbi, networks: ordersNetwork } = require('./build/contracts/Orders.json');

const userAddress = Object.values(userNetwork)[0].address;
const factoryAddress = Object.values(factoryNetwork)[0].address;
const productsAddress = Object.values(productsNetwork)[0].address;
const equpmentsAddress = Object.values(equipmentsNetwork)[0].address;
const jobsAddress = Object.values(jobsNetwork)[0].address;
const ordersAddress = Object.values(ordersNetwork)[0].address;

const userContract = new web3.eth.Contract(userAbi, userAddress);
const factoryContract = new web3.eth.Contract(factoryAbi, factoryAddress);
const productsContract = new web3.eth.Contract(productsAbi, productsAddress);
const equipmentsContract = new web3.eth.Contract(equipmentsAbi, equpmentsAddress);
const jobsContract = new web3.eth.Contract(jobsAbi, jobsAddress);
const ordersContract = new web3.eth.Contract(ordersAbi, ordersAddress);

// module.exports = {
//     factoryContract,
//     userContract,
//     web3,
//     productsContract,
//     equipmentsContract,
//     jobsContract,
//     ordersContract,
//     jobsAddress
// }
exports.factoryContract = factoryContract;
exports.userContract = userContract;
exports.web3 = web3;
exports.productsContract = productsContract;
exports.equipmentsContract = equipmentsContract;
exports.jobsContract = jobsContract;
exports.ordersContract = ordersContract;
exports.jobsAddress = jobsAddress;