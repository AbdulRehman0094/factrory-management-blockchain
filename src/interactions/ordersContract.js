const { web3, ordersContract } = require("../connection");

// Example function to place an order
async function placeOrder(productId, quantity, sellerAddress, value) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await ordersContract.methods
            .placeOrder(productId, quantity, sellerAddress)
            .send({ from: accounts[0], value: value, gas: 3000000 }); // Adjust gas as needed
        console.log('Order placed:', result);
    } catch (error) {
        console.error('Error placing order:', error);
    }
}

// Call the placeOrder function
placeOrder(productId, quantity, sellerAddress, value);
