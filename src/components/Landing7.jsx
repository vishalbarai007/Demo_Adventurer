import React from 'react'
import trees2 from '../Images/tree2.png';
import '../CSSFiles/Landing7.css';
import Landing7cards from './Landing7cards';

function Landing7() {
  return (
    <>
        <div className='landing7 absolute h-screen w-full'>
            <h5 className='text-center'>TOP DESTINATIONS</h5>
            <h1 className='text-center'>Explore the Beauty of The World</h1>
            <img src={trees2} alt="" />
       </div>
       <Landing7cards/>

    </>
  )
}

export default Landing7;
