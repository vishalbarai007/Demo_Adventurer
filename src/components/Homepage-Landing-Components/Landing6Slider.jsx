import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import hiker from '../../Images/pexels-ben-maxwell-479813-1194235.jpg';
import trekker from '../../Images/pexels-pavel-bondarenko-1393453-2856509.jpg';
import camper from '../../Images/pexels-atomlaborblog-776117.jpg';
import cyclist from '../../Images/pexels-fr3nks-1208777.jpg';
import scuba from '../../Images/pexels-diego-sandoval-3158170-4767081.jpg';
import surfer from '../../Images/pexels-guy-kawasaki-783630-1654489.jpg';
import skieer from '../../Images/pexels-auspiciousajay-19822705.jpg';

function Landing6Slider() {
  return (
    <Splide
      options={{
        type       : 'loop',
        perPage    : 3,
        gap        : '1rem',
        pagination : false,
        arrows     : true,
        drag       : 'free',
        focus      : 'center',
        autoScroll : {
          speed: 1, // Increase the speed as needed
          pauseOnHover: true, // Pause scrolling on hover
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <div className="slide-content">
          <img src={hiker} alt="Corporate Away Days" />
          <div className="slide-text"><p>HIKER</p></div>
          <div className='slide-info'>Hikers enjoy walking on trails and paths, often in natural environments like forests, mountains, and parks.
             <button>Learn more</button>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slide-content">
          <img src={surfer} alt="Corporate Away Days" />
          <div className="slide-text"><p>SURFER</p></div>
          <div className='slide-info'>Surfers ride ocean waves using surfboards.
             <button>Learn more</button>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slide-content">
          <img src={trekker} alt="Corporate Away Days" />
          <div className="slide-text"><p>TREKKER</p></div>
          <div className='slide-info'>Trekkers undertake longer journeys on foot, often in challenging terrains such as mountains and remote areas.
             <button>Learn more</button>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slide-content">
          <img src={camper} alt="Corporate Away Days" />
          <div className="slide-text"><p>CAMPER</p></div>
          <div className='slide-info'> Campers enjoy staying overnight in outdoor settings, often in designated campsites or wilderness areas.
             <button>Learn more</button>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slide-content">
          <img src={cyclist} alt="Corporate Away Days" />
          <div className="slide-text"><p>CYCLISTS</p></div>
          <div className='slide-info'>Cyclists explore various terrains on bicycles, from roads to mountain trails.
            <button>Learn more</button>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slide-content">
          <img src={scuba} alt="Corporate Away Days" />
          <div className="slide-text"><p>SCUBA DIVERS</p></div>
          <div className='slide-info'>Scuba divers explore underwater environments using self-contained underwater breathing apparatus (SCUBA).
             <button>Learn more</button>
          </div>
        </div>
      </SplideSlide>
      
      <SplideSlide>
        <div className="slide-content">
          <img src={skieer} alt="Corporate Away Days" />
          <div className="slide-text"><p>SNOWBOARDER</p></div>
          <div className='slide-info'>Skiers and snowboarders glide on snow-covered slopes using skis or snowboards.
             <button>Learn more</button>
          </div>
        </div>
      </SplideSlide>      
      {/* Add more slides as needed */}
    </Splide>
  );
}

export default Landing6Slider;
