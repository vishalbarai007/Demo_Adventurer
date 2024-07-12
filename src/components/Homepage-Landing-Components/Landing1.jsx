import React from 'react';
import landing1video from '../../Videos/landing1.mp4';
import Landing2 from './Landing2';
import '../../CSSFiles/Landing1&2.css'

function Landing1() {
  return (
    <>
    <div className='backvideo w-full bg-zinc-500'>
      <video autoPlay muted loop id='video' className=''>
        <source src={landing1video} type="video/mp4" /> 
      </video>
      <Landing2/>
    </div>
    </>
  )
}

export default Landing1;