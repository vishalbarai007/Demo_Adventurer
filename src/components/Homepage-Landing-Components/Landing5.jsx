import React from 'react';
import landing5video from '../../Videos/Landing5-2.mp4';
import explore from '../../Images/explore1.png';
import equipment from '../../Images/equipment1.png';
import guide from '../../Images/guide1.png';
import adventure from '../../Images/clock1.png';
import '../../CSSFiles/Landing5.css';



import { motion } from 'framer-motion';

function Landing5() {
  return (
    <>
        <div className='landing5'>
            <video autoPlay muted loop id='video' className='z-10'>
                <source src={landing5video} type="video/mp4" /> 
            </video>

            <div className='main1'>
                <h1 className='Title1-1'>
                    WE PROVIDE BEST HIKING AND TREKKING TO YOUR JOURNEY.
                </h1>
                <div className='right flex gap-5 my-20'>
                <motion.div className='main1-1' whileHover={{ scale: 1.2 }}>
                    <img src={explore} alt="explore/mountains" className='' />
                    <h1>Exploration</h1>
                    <p>Explore the Beauty of Nature</p>
                </motion.div>

                <motion.div className='main1-1' whileHover={{ scale: 1.2 }}>
                    <img src={equipment} alt="explore/mountains" className='' />
                    <h1>Equipment</h1>
                    <p>Right Equipment for Different Places</p>
                </motion.div>

                <motion.div className='main1-1' whileHover={{ scale: 1.2 }}>
                    <img src={guide} alt="explore/mountains" className='' />
                    <h1>Guide</h1>
                    <p>Highly Expirence & Certified Guides</p>
                </motion.div>

                <motion.div className='main1-1' whileHover={{ scale: 1.2 }}>
                    <img src={adventure} alt="explore/mountains" className='' />
                    <h1>Adventure</h1>
                    <p>Fill your Heart with Thrills</p>
                </motion.div>
                
            </div> 

                </div>
        </div>
    
    </>
  )
}

export default Landing5;