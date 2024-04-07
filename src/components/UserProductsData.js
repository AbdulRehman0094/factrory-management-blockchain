import React, { useState, useEffect } from 'react';
import UserProductsPlace from './UserProductsPlace';
import { getAllProducts } from '../interactions/productsContract';

function UserProductsData() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await getAllProducts();
                const userAddress = localStorage.getItem("userAddress");
                console.log("User Address:", userAddress);
                console.log("All Products:", result);

                // Filter products based on user address
                const filteredProducts = result.filter(product => product.userAddress === userAddress);
                console.log("Filtered Products:", filteredProducts);

                setProducts(filteredProducts);
                setError(null); // Clear any previous errors
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message); // Set error state
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            {error && <div>Error: {error}</div>}
            <div className='cards'>
                {products.map((product, index) => (
                    <UserProductsPlace
                        key={index}
                        id={product.productId.toString()}
                        name={product.productName}
                        productionunits={product.totalProduction.toString()}
                        price={product.price.toString()}
                        sellerAddress={product.userAddress} // Assuming the seller address is stored in userAddress field
                        sold={product.soldProduction.toString()}
                        unsold={product.unsoldProduction.toString()}
                    />
                ))}
            </div>
        </>
    );
}

export default UserProductsData;
