import React, { useState, useEffect } from 'react';
import Marketplace from './Marketplace';
import { getAllProducts } from '../interactions/productsContract';

function RenderMarketplaceItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getAllProducts();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className='cards'>
      {products?.map((product, index) => (
        <Marketplace
          id={product.productId.toString()}
          name={product.productName}
          productionunits={product.totalProduction.toString()}
          price={product.price.toString()}
        />
      ))}
    </div>
  );
}

export default RenderMarketplaceItems;
