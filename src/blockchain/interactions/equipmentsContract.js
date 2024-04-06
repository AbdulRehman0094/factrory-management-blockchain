const { web3, equipmentsContract: contract } = require("../connection");



// Example function to add a new equipment
async function addEquipment(equipmentName, cycleTime, factoryId) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.addEquipment(equipmentName, cycleTime, factoryId).send({ from: accounts[0], gas: '500000' });
        console.log('Equipment added:', result.events.EquipmentAdded.returnValues);
    } catch (error) {
        console.error('Error adding equipment:', error);
    }
}

// Example function to get equipment by ID
async function getEquipmentById(equipmentId) {
    try {
        const result = await contract.methods.getEquipmentById(equipmentId).call();
        console.log('Equipment:', result);
    } catch (error) {
        console.error('Error getting equipment by ID:', error);
    }
}

// Example function to get all equipments
async function getAllEquipments() {
    try {
        const result = await contract.methods.getAllEquipments().call();
        console.log('All equipments:', result);
    } catch (error) {
        console.error('Error getting all equipments:', error);
    }
}

async function equipmentExists(equipmentId) {
    try {
        const result = await contract.methods.equipmentExists(equipmentId).call();
        console.log('Equipment exists:', result);
    } catch (error) {
        console.error('Error checking if equipment exists:', error);
    }
}

// Example usage of the functions
// addEquipment('Equipment 2', 10, 1);
// equipmentExists(1);
// getEquipmentById(2);
// getAllEquipments();
