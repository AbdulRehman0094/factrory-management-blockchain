const { userContract, web3 } = require("../connection");



export async function addUser(userAddress) {
    try {
        // const accounts = await web3.eth.getAccounts();
        const result = await userContract.methods.addUser().send({ from: userAddress, gas: '500000' });
        console.log('User added:', result.events.UserAdded.returnValues);
    } catch (error) {
        console.error('Error adding user:', error);
    }
}

// Example function to get all users
export async function getAllUsers() {
    try {
        const result = await userContract.methods.getAllUsers().call();
        console.log('All users:', result);
    } catch (error) {
        console.error('Error getting all users:', error);
    }
}

// Example function to get user by ID
async function getUserById(userId) {
    try {
        const result = await userContract.methods.getUserById(userId).call();
        console.log('User:', result);
    } catch (error) {
        console.error('Error getting user by ID:', error);
    }
}

// Example function to check if user exists
async function isUserExist(userAddress) {
    try {
        const result = await userContract.methods.isUserExist(userAddress).call();
        console.log('User exists:', result);
    } catch (error) {
        console.error('Error checking if user exists:', error);
    }
}


// addUser();
getAllUsers();
// getUserById(1);
// isUserExist('USER_ADDRESS');
