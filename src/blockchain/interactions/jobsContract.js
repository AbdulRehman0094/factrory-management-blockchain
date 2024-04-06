const { web3, jobsContract: contract, jobsAddress } = require("../connection");


async function getProductsContractAddress() {
    try {
        const productsContractAddress = await contract.methods.productsContract().call();
        console.log('Products contract address:', productsContractAddress);
    } catch (error) {
        console.error('Error getting Products contract address:', error);
    }
}

async function getEquipmentsContractAddress() {
    try {
        const equipmentContractAddress = await contract.methods.equipmentContract().call();
        console.log('Equipments contract address:', equipmentContractAddress);
    } catch (error) {
        console.error('Error getting Equipments contract address:', error);
    }
}

async function checkContractBalance() {
    try {
        const balance = await web3.eth.getBalance(jobsAddress);
        console.log('Contract balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
    } catch (error) {
        console.error('Error checking contract balance:', error);
    }
}

// Function to send ethers to contract
async function sendEthersToContract(ethersToSend) {
    const amount = ethersToSend; // Amount of ethers to send
    const accounts = await web3.eth.getAccounts();
    const sender = accounts[1]; // Sender's address

    try {
        const txReceipt = await web3.eth.sendTransaction({
            from: sender,
            to: jobsAddress,
            value: amount
        });
        console.log('Ethers sent successfully:', txReceipt);
    } catch (error) {
        console.error('Error sending ethers to contract:', error);
    }
}

// Example function to add a new job
async function addJob(equipmentId, productId) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.addJob(equipmentId, productId).send({ from: accounts[1], gas: '2000000' });
        console.log('Job added:', result.events.JobAdded.returnValues);
    } catch (error) {
        console.error('Error adding job:', error);
    }
}


// Example function to change the state of a job (running or not)
async function changeJobState(jobId, running) {
    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.changeJobState(jobId, running).send({ from: accounts[0] });
        console.log('Job state changed successfully');
    } catch (error) {
        console.error('Error changing job state:', error);
    }
}

// Example function to increase the production count of a job
async function increaseProductionCount(jobId, productionCount) {
    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.increaseProductionCount(jobId, productionCount).send({ from: accounts[0], gas: '1000000' });
        console.log('Production count increased successfully');
    } catch (error) {
        console.error('Error increasing production count:', error);
    }
}

// Example function to get all jobs
async function getAllJobs() {
    try {
        const result = await contract.methods.getAllJobs().call();
        console.log('All jobs:', result);
    } catch (error) {
        console.error('Error getting all jobs:', error);
    }
}

// Example function to get active jobs
async function getActiveJobs() {
    try {
        const result = await contract.methods.getActiveJobs().call();
        console.log('Active jobs:', result);
    } catch (error) {
        console.error('Error getting active jobs:', error);
    }
}


// getProductsContractAddress();
// getEquipmentsContractAddress();
// checkContractBalance();
// sendEthersToContract(web3.utils.toWei('1', 'ether'));

addJob(1, 1);
// changeJobState(1, true);
// increaseProductionCount(1, 120);
// getAllJobs();
// getActiveJobs();
