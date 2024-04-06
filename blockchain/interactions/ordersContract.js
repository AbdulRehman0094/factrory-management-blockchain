const { web3, ordersContract } = require("../connection");

// Example function to place an order
async function placeOrder(productId, quantity, sellerAddress, buyerAddress, value) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await ordersContract.methods
            .placeOrder(productId, quantity, sellerAddress)
            .send({ from: buyerAddress, value: value, gas: '3000000' });
        console.log('Order placed:', result);
    } catch (error) {
        console.error('Error placing order:', error);
    }
}

// Call the placeOrder function
const userAddress = '0xb992fc5c1bddd7314d214d8619c3e3cf8ef62165';
const buyerAddress = '0xa6c9bbe3767e02100993ba13c509fb8cfbfcc3c6';
placeOrder(1, 20, userAddress, buyerAddress, web3.utils.toWei('1', 'ether'));
