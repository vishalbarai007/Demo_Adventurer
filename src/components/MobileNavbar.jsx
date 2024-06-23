import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import '../CSSFiles/MobileNavbar.css'


function MobileNavbar() {
  return (
    <div className='h-screen w-full'>

        <div className='Navmob'>
            
            <nav>
                <ul>
                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Home </Link>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Destination </Link>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Safety Tool </Link>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Blogs </Link>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Account </Link>
                    </motion.li>

                    <motion.li className="nav-form">
                        <form className="form flex">
                            <input type="text" placeholder="Quick Search" name="search"></input>
                            <button type="submit"><FaSearch /></button>
                        </form>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Setting </Link>
                    </motion.li>
                </ul>
            </nav>

        </div>

    </div>
  )
}

export default MobileNavbar;