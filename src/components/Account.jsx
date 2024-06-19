import React from 'react'
import Navbar from './Navbar';
import '../CSSFiles/Accounts.css';

function Account() {
  return (
    <>
    <div className='Accounts'>
      <Navbar/>
      <div className='Left'>
        <div className='Accountlogo'>
        </div>
      </div>

      <div className='Right'>
        <div className='Intro'>
          <h1>Welcome to Adventurer Vishal.</h1>

        </div>
        <div className='Content'>

        </div>

      </div>

    </div>
    
    
    </>
  )
}

export default Account;