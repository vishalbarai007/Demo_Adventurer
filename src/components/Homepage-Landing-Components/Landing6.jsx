import React from 'react';
import Landing6Slider from './Landing6Slider';
import '../../CSSFiles/Landing6.css';

function Landing6() {
  return (
    <>
       <div className='landing6 h-screen w-full'>
       <h5 className='text-center'>what we do</h5>
       <h1 className='text-center '> FIND THE ADVENTURE THAT'S RIGHT FOR YOU</h1>
       <Landing6Slider/>
       </div>
    
    </>
  )
}

export default Landing6;