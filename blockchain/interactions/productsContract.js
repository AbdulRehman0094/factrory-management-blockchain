const { web3, productsContract: contract } = require("../connection");


// Example function to add a new product
async function addProduct(productName, price) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.addProduct(productName, price).send({ from: accounts[0], gas: '500000' });
        console.log('Product added:', result.events.ProductAdded.returnValues);
    } catch (error) {
        console.error('Error adding product:', error);
    }
}

// Example function to get product by ID
async function getProductById(productId) {
    try {
        const result = await contract.methods.getProductById(productId).call();
        console.log('Product:', result);
    } catch (error) {
        console.error('Error getting product by ID:', error);
    }
}

// Example function to update product price
async function updatePrice(productId, price) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.updatePrice(productId, price).send({ from: accounts[0], gas: '500000' });
        console.log('Product price updated:', result);
    } catch (error) {
        console.error('Error updating product price:', error);
    }
}

// Example function to get all products
async function getAllProducts() {
    try {
        const result = await contract.methods.getAllProducts().call();
        console.log('All products:', result);
    } catch (error) {
        console.error('Error getting all products:', error);
    }
}

// Example function to update unsold production
async function updateUnsoldProduction(productId, delta) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.updateUnsoldProduction(productId, delta).send({ from: accounts[0], gas: '500000' });
        console.log('Unsold production updated:', result);
    } catch (error) {
        console.error('Error updating unsold production:', error);
    }
}

// Example function to update total production
async function updateTotalProduction(productId, delta) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.updateTotalProduction(productId, delta).send({ from: accounts[0], gas: '500000' });
        console.log('Total production updated:', result);
    } catch (error) {
        console.error('Error updating total production:', error);
    }
}

// Example function to update sold production
async function updateSoldProduction(productId, delta) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.updateSoldProduction(productId, delta).send({ from: accounts[0], gas: '500000' });
        console.log('Sold production updated:', result);
    } catch (error) {
        console.error('Error updating sold production:', error);
    }
}

// Example usage of the functions
// addProduct('Product 1', 100);
// getProductById(2);
// updatePrice(2, 150);
getAllProducts();
// updateUnsoldProduction(1, 5);
// updateTotalProduction(1, 10);
// updateSoldProduction(1, 3);
