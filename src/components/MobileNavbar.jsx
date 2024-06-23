import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import '../CSSFiles/MobileNavbar.css'
import { FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { FaMicroblog } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { MdFlightTakeoff } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";



function MobileNavbar() {
  return (
    <div className='h-screen w-full'>

        <div className='Navmob'>
            
            <nav className='nav'>
                <ul>
                    <motion.li className="nav-form">
                        <form className="form flex">
                            <input type="text" placeholder="Quick Search" name="search"></input>
                            <button type="submit"><FaSearch /></button>
                        </form>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <FaHome/>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Home </Link>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <MdFlightTakeoff/>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Destination </Link>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <FaTools/>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Safety Tool </Link>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <FaMicroblog/>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Blogs </Link>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <MdAccountCircle/>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Account </Link>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <IoIosSettings/>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Setting </Link>
                    </motion.li>

                    <motion.li className='Nav-item' whileHover={{scale: 1.2}}>
                        <IoLogOut/>
                        <Link to={"/BaseContent"} className='dropbtn text-40 no-underline'> Logout </Link>
                    </motion.li>
                </ul>
            </nav>

        </div>

    </div>
  )
}

export default MobileNavbar;