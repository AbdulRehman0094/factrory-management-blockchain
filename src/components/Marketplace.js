import React, { useState } from 'react';

function Marketplace({ name, productionunits, price, id }) {
  const [units, setUnits] = useState('');
  const [amount, setAmount] = useState('');

  const handleUnitsChange = (event) => {
    const { value } = event.target;
    setUnits(value);
    setAmount(value * price);
  };

  const handleBuyUnits = () => {
    // Implement logic to handle buying units
    alert( `${units} Units of ${name} purchased succesful`);
    console.log('Buy', units, 'units of', name);
  };

  return (
    <div className='products bold'>
      <div>Product Name: {name}</div>
      <div>Product ID: {id}</div>
      <div>Production Units: {productionunits}</div>
      <div>Price per Unit: {price}</div>
      <div>Enter Units to purchase:</div>
      <input
        type="text"
        value={units}
        onChange={handleUnitsChange}
      />
      <div>Total Cost: {amount}</div>
      <button onClick={handleBuyUnits} disabled={productionunits == 0}>Buy Units</button>
    </div>
  );
}

export default Marketplace;
