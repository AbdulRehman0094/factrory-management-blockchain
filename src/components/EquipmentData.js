import React from 'react'
import { useState, useEffect } from 'react';
import { getAllEquipments } from '../interactions/equipmentsContract';
import EquipmentsPlace from './EquipmentsPlace';

function RenderEquipments() {
    const [equipment, setEquipment] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await getAllEquipments();
                setEquipment(result);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className='cards'>
      {equipment?.map((equipment) => (
        <EquipmentsPlace
          id={equipment.equipmentId.toString()}
          name={equipment.equipmentName}
          state={equipment.state}
          pid={equipment.productId.toString()}
        />
      ))}
    </div>
  )
}

export default RenderEquipments