import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import kaman1 from '../Images/kaman1.jpg';
import kaman2 from '../Images/kaman2.jpeg';
import kaman3 from '../Images/kaman3.jpeg';
import kalsubai1 from '../Images/kalsubai1.jpeg';
import kalsubai2 from '../Images/kalsubai2.jpeg';
import kalsubai3 from '../Images/kalsubai3.jpg';
import harishchand1 from '../Images/Harishchand1.jpeg';
import harishchand2 from '../Images/Harishchand2.jpeg';
import harishchand3 from '../Images/Harishchand3.jpeg';
import harihar1 from '../Images/harihar1.jpeg';
import harihar2 from '../Images/harihar2.jpeg';
import harihar3 from '../Images/harihar3.jpeg';
import rajmachi1 from '../Images/rajmachi1.jpeg';
import rajmachi2 from '../Images/rajmachi2.jpeg';
import rajmachi3 from '../Images/rajmachi3.jpeg';
import bhima1 from '../Images/bhima1.jpeg';
import bhima2 from '../Images/bhima2.jpeg';
import bhima3 from '../Images/bhima3.jpeg';







const Card = ({ fortsdata, reference = '' }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps', '_blank', 'noopener noreferrer');
  };

  const openWeather = () => {
    window.open('https://www.google.com/search?q=weather', '_blank', 'noopener noreferrer');
  };

  const callTouristGuide = () => {
    window.open(fortsdata.Contact, '_self');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const toggleDescription = () => {
    setShowFullDesc(!showFullDesc);
  };

  const getDescription = () => {
    if (!fortsdata.Desc) return ''; // Add this check
    if (showFullDesc) {
      return fortsdata.Desc;
    } else {
      const lines = fortsdata.Desc.split('\n');
      if (lines.length > 4) {
        return lines.slice(0, 4).join('\n') + '...';
      }
      return fortsdata.Desc;
    }
  };

  return (
    <div className="card">
      <Slider {...settings} className="carousel">
        <div>
        <img src={kalsubai1} alt="photo 1" /> 
        </div>
        <div><img src={kaman2} alt="photo 2" /></div>
        <div><img src={kaman3} alt="photo 3" /></div>
      </Slider>

      <h1 className="card-title">{fortsdata.Title}</h1>
      <h4 className="card-description">{getDescription()}</h4>
      {fortsdata.Desc && fortsdata.Desc.split('\n').length > 4 && (
        <motion.button
          className="more-button"
          onClick={toggleDescription}
          aria-label={showFullDesc ? 'Show less' : 'Show more'}
        >
          {showFullDesc ? 'Show less' : 'Show more'}
        </motion.button>
      )}
      <p className="card-location">{fortsdata.Address}</p>
      <hr />
      <div className="card-buttons">
        <motion.button 
          whileHover={{ scale: 1.2, color: isFavorite ? 'red' : 'pink' }}
          className={`card-button ${isFavorite ? 'favorite' : ''}`} 
          onClick={toggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.2 }} 
          className="card-button" 
          onClick={openGoogleMaps}
          aria-label="Open Google Maps"
        >
          <FaMapMarkedAlt />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.2 }} 
          className="card-button" 
          onClick={openWeather}
          aria-label="Check Weather"
        >
          <TiWeatherCloudy />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.2 }} 
          className="card-button" 
          onClick={callTouristGuide}
          aria-label="Call Tourist Guide"
        >
          <FaPhoneAlt />
        </motion.button>
      </div>
    </div>
  );
};

export default Card;
