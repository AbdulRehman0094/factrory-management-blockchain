import React from 'react';
import Marketplace from './Marketplace';

const Rawdata = [
  { name: 'Product 1', productionunits: 100, price: 10 },
  { name: 'Product 2', productionunits: 150, price: 15 },
  { name: 'Product 3', productionunits: 200, price: 20 }
];

function RenderMarketplaceItems() {
  return (

    <div className='cards'>
      {Rawdata.map((product, index) => (
        <Marketplace
          key={index}
          name={product.name}
          productionunits={product.productionunits}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default RenderMarketplaceItems;
