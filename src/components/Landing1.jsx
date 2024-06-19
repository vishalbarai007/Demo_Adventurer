import React from 'react';
import landing1video from './landing1.mp4';
import Landing2 from './Landing2';
import '../CSSFiles/Landing1&2.css'

function Landing1() {
  return (
    <>
    <div className='h-screen w-full'>
      <video autoPlay muted loop id='video' className=''>
        <source src={landing1video} type="video/mp4" /> 
      </video>
    </div>
    <Landing2/>
    </>
  )
}

export default Landing1;