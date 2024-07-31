import React from 'react'
import Navbar from './Navbar';
import Landing1 from './Homepage-Landing-Components/Landing1'
import Landing3 from './Homepage-Landing-Components/Landing3';
import Landing4 from './Homepage-Landing-Components/Landing4';
import Landing5 from './Homepage-Landing-Components/Landing5';
import Landing6 from './Homepage-Landing-Components/Landing6';
import Landing7 from './Homepage-Landing-Components/Landing7';
import Footer1 from "./Footer1";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BaseContent() {

  const Navigate = useNavigate();



  const validatetoken = async () =>{
    const token = localStorage.getItem('token')
    const requestOptions = {
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    const response = await fetch("https://adventurer-backend-production.up.railway.app/verify", requestOptions);
    const data = await response.json();
    console.log(data);
    if (data.valid == true) {
      Navigate("/BaseContent");
      
    } else {
      Navigate("/");
    }
  }

  useEffect(() => {
    validatetoken();
  })


  return (
    <>
        <Navbar/>
        <Landing1/>
        <Landing3/>
        {/* <Landing4/> */}
        <Landing5/>
        <Landing6/>
        {/* <Landing7/> */}
        <Footer1/>
    </>

  )
}

export default BaseContent;