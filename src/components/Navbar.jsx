import React, { useRef, useEffect } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import '../CSSFiles/Navbar.css'


function Navbar() {
    const navRef = useRef(null);
    const barRef = useRef(null);

    function scrollFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        if (barRef.current) {
            barRef.current.style.width = scrolled + "%";
        }

        if (navRef.current) {
            if (winScroll > (window.innerHeight/6)) {
                navRef.current.style.top = "0";  
            } else {
                navRef.current.style.top = "-200px";
            }
        }
    }

    useEffect(() => {
        window.onscroll = scrollFunction;
        return () => {
            window.onscroll = null; // Clean up the event handler when the component unmounts
        };
    }, []);

    return (
        <>
        <div className='heading '>
            {/* <button type="submit"><FaSearch /></button> */}
            
            <nav ref={navRef} className="navbar" id="navbar">
                <motion.a className="NavLogo text-white w-1/6 p-1 flex justify-center align-middle" href="#"></motion.a>
                <ul className="navbar-ul gap-10">
                    <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
                        <Link to={"/BaseContent"} className='dropbtn text-40 text-white no-underline'>HOME</Link>
                    </motion.li>

                    <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
                        <Link to={"#"} className='dropbtn text-40 text-white no-underline'>DESTINATION</Link>
                    </motion.li>

                    <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
                        <Link to={"#"} className='dropbtn text-40 text-white no-underline'>SAFETY INFO</Link>
                    </motion.li>

                    <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
                        <Link to={"#"} className='dropbtn text-40 text-white no-underline'>BLOGS</Link>
                    </motion.li>

                    <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
                        <Link to={"/Account"} className='dropbtn text-40 text-white no-underline'>ACCOUNT</Link>
                    </motion.li>
                    
                    <li className="nav-form">
                        <form className="form flex">
                            <input type="text" placeholder="Quick Search" name="search"></input>
                            <button type="submit"><FaSearch /></button>
                        </form>
                    </li>
                </ul>

                {/* Scroll indicator */}
                <div className="header">
                    <div className="progress-container">
                        <div className="progress-bar" id="myBar" ref={barRef}></div>
                    </div>
                </div>
            </nav>
        </div>
        </>
    );
}

export default Navbar;
