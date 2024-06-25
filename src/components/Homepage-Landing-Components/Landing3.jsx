import React from 'react';
import '../../CSSFiles/Landing3.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Cardimg from '../../Images/Cloud1.png';
import Cardimg2 from '../../Images/bagpack1.png';


function Landing3() {
  return (
    <>
    <div className='landing3 flex h-screen w-full p-10'>
        {/* <div className='block'></div>
        <div className='block'></div>
        <div className='block'></div>
        <div className='block'></div>
        <div className='block'></div> */}

        <img src={Cardimg2} alt="bagpack" className='bagpack1'/>
        <div className='curved-edge'>
        </div>

        <div className='Landing3-info'>
          <h1 className='text-white'>Why visit Adventurer before having real Adventures ?</h1>
          <p>Adventurer provides everything you need to make your trip successfull and memorable.
            From Local places to Global, From Nearby places to places miles away, From Geography to History of location, From Mountains 
            to Waterfalls, Forests, Trekking, Hiking and many other exiciting places. </p>

        </div>

        <div className='curved-edge2'>

        </div>
        <img src={Cardimg} alt="cloud" className='cloud-image1'/>



    </div>
   
    </>
  )
}
// #3a5533
export default Landing3