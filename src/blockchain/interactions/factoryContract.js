const { factoryContract, web3 } = require('../connection');

// Example function to add a new factory
async function addFactory(userId, factoryName) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await factoryContract.methods.addFactory(userId, factoryName).send({ from: accounts[0], gas: '500000' });
        console.log('Factory added:', result.events.FactoryAdded.returnValues);
    } catch (error) {
        console.error('Error adding factory:', error.message);
    }
}

// Example function to get all factories for a given user
async function getAllFactories(userId) {
    try {
        const result = await factoryContract.methods.getAllFactories(userId).call();
        console.log('All factories:', result);
    } catch (error) {
        console.error('Error getting all factories:', error.message);
    }
}

// Example function to get factory by ID
async function getFactoryById(factoryId) {
    try {
        const result = await factoryContract.methods.getFactoryById(factoryId).call();
        console.log('Factory:', result);
    } catch (error) {
        console.error('Error getting factory by ID:', error.message);
    }
}

// Example function to check if factory exists
async function isFactoryExists(factoryId) {
    try {
        const result = await factoryContract.methods.isFactoryExists(factoryId).call();
        console.log('Factory exists:', result);
    } catch (error) {
        console.error('Error checking if factory exists:', error.message);
    }
}

// Example function calls
addFactory(1, 'noman factory'); // Add a factory for user with ID 1 and factoryname
getAllFactories(1); // Get all factories for user with ID 1
getFactoryById(1); // Get factory with ID 1
isFactoryExists(1); // Check if factory with ID 1 exists
