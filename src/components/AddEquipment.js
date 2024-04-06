import React from 'react'
import { useState } from 'react';
import { addEquipment } from '../interactions/equipmentsContract';
import { getAllEquipments } from '../interactions/equipmentsContract';

function AddEquipment() {

    const [equipmentName, setName] = useState('');
    const [equipmentCycle, setPrice] = useState('');


    const handleName = (event) => {
        setName(event.target.value);
    };
    const handlePrice = (event) => {
        setPrice(event.target.value);
    };
  
    const addEqui= async()=>{

        await addEquipment(equipmentName,equipmentCycle,1);
        getAllEquipments();
        alert('Equipment Added Successfully.')
    }
    return (
        <>
            <div className='header'>
                <div className='text'>Factory Managment System</div>
            </div>

            <div className='cards1'>
                <div className='cardchild'>
                    <div className='text1'>Add Equipment</div>
                    <div>
                        <p>Enter Equipment Name:</p>
                        <input className=''
                            type="text"
                            value={equipmentName}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <p>Enter Cycle Time:</p>
                        <input className=''
                            type="text"
                            value={equipmentCycle}
                            onChange={handlePrice}
                        />
                    </div>
                    {/* <div>
                        <p>Enter Factory ID:</p>
                        <input className=''
                            type="text"
                            value={productUnits}
                            onChange={handleUnits}
                        />
                    </div> */}
                     <button onClick={addEqui}>Add Equipment</button>

                </div></div>

        </>
    )
}

export default AddEquipment