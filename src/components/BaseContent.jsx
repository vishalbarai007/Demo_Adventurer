import React from 'react'
import Navbar from './Navbar';
import Landing1 from './Landing1';
import Landing3 from './Landing3';
import Landing4 from './Landing4';
import Landing5 from './Landing5';
import Landing6 from './Landing6';
import Landing7 from './Landing7';
import Footer1 from "./Footer1";

function BaseContent() {
  return (
    <>
        <Navbar/>
        <Landing1/>
        <Landing3/>
        <Landing4/>
        <Landing5/>
        <Landing6/>
        <Landing7/>
        <Footer1/>
    </>

  )
}

export default BaseContent;