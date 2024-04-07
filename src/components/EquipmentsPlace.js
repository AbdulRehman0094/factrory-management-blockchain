import React from 'react'

function EquipmentsPlace({ id, name, state, pid }) {
    return (
        <>
    <div className='products bold'>
                <div>Equipment Name: {name}</div>
                <div>Equipment ID: {id}</div>
                <div>State: {state}</div>
                <div>Product ID:{pid}</div>
            </div></>)
}

export default EquipmentsPlace