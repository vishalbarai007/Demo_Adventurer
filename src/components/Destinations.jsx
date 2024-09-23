import React from 'react';
import Pre_login_menubar from './Navbar';
import Carousel from './Carousel';


const Destinations = () => {
  return (
    <div className="destinations-page">
        <Pre_login_menubar/>
        <Carousel />
      {/* Add any additional content for the Destinations page here */}
    </div>
  );
};

export default Destinations;