import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Button() {
  return (
    <>
    <Link to={"/Form"}>
    <motion.button className='Signup-button h-16 w-40 z-50' whileHover={{ scale: 1.2 }}>PLAN NOW</motion.button>
    </Link>
    
    </>
  )
}

export default Button;