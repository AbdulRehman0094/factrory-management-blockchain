import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import {addUser} from '../blockchain/interactions/usersContract'

function LoginDashboard() {

  const [input, setVal] = useState('');

  const handleInput = (event) => {
    setVal(event.target.value);
  };

  const loginFunc=()=>{

    addUser(input);
  }
  return (
    <>
      <div className='header'>
        <div className='text'>Factory Managment System</div>
      </div>

      <div className='cards1'>
        <div className='cardchild'>
          <div className='text1'>Dashboard Login</div>
          <div>
            <p>Enter User ID:</p>
          <input className=''
            type="text"
            value={input}
            onChange={handleInput}
          />
          </div>
          <Link to='/dashboard'> <button onClick={loginFunc}>Login</button></Link>
         

        </div></div>

    </>
  )
}

export default LoginDashboard