import '../CSSFiles/Footer.css';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// import 'bootstrap/dist/css/bootstrap.css';

const Footer1 = () => {
  return (
    <>
    <div className='Footerblock'>
      <div className='left flex'>

        <ul>
        <h1>Contact us</h1>
          <li><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></li>
          <li><a href="tel:+1234567890">+1234567890</a></li>

        </ul>

        <ul>
          <h1>Quick Catagories</h1>
          <li><a href="#">Trekking</a></li>
          <li><a href="#">Rock Climbing</a></li>
          <li><a href="#">Scuba Diving</a></li>
          <li><a href="#">Skiee</a></li>
          <li><a href="#">Cycling</a></li>
          <li><a href="#">Camping</a></li>
        </ul>

        <ul>
          <h1>Visit</h1>
          <li><a href="#">Our Blogs</a></li>
          <li><a href="#">Popular Places</a></li>
          <li><a href="#">Nearby places</a></li>
          <li><a href="#">New Places</a></li>
          <li><a href="#"></a></li>
        </ul>

        <ul>
          <h1>Customer Care</h1>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Privacy Policies</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">About</a></li>

        </ul>
      </div>
      
      <div className='right'>
        <h1>Follow us:</h1>
        <i><FaInstagram /></i>
        <i><FaTwitter /></i>
        <i><FaFacebook /></i>
        <i><FaYoutube /></i>
      </div>

    </div>
    <div className='lastdiv h-20 w-full'>
       <h1>Adventurer</h1>
       {/* &copy; = C in circle */}
       <h3>Copyright &copy; 2024 Adventurer.com All Right Reserves</h3>
    </div>

    </>
    
  )
}

export default Footer1;