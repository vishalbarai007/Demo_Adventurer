import React, { useRef} from 'react';
import Card from '../Card';
import '../../CSSFiles/Landing4&cards.css'
// import card1 from '../../public/Images/kaman1.jpg';


function Landing4() {

  const Fortref = useRef(null);

  const fortsdata = [
    {
      cardimage1 : "../../public/Images/kaman1.jpg",
      Title: "KAMANDURG FORT ",
      Desc: "Kamandurg Fort, Maharashtra, lies on Vasai-Bhiwandi Road in India. Not much is known about the fort. It can be reached by foot in approximately 3 hours from the nearby village of Devkundi.",
      Address: "Bhinar, Paye Gaon,Palghar, Maharashtra 401303, India",
      Contact: "+91-7709692329",

    },

    {
      Title: "KALSUBAI FORT",
      Desc: "Kalsubai, situated in Maharashtra, is the highest peak in the state. Known as the 'Everest of Maharashtra', it stands at an elevation of 1646 meters. The trek to Kalsubai offers breathtaking views.",
      Address: "Kalsubai Peak, Indore, Maharashtra 422604, India",
      Contact: "+91-7709692329",

    },

    {
      Title: "HARISHCHANDRAGADI FORT",
      Desc: "Kalsubai, situated in Maharashtra, is the highest peak in the state. Known as the 'Everest of Maharashtra', it stands at an elevation of 1646 meters. The trek to Kalsubai offers breathtaking views.",
      Address: "Kalsubai Peak, Indore, Maharashtra 422604, India",
      Contact: "+91-7709692329",

    },

    // {
    //   Title: "HARIHAR FORT",
    //   Desc: "Harihar Fort, also known as Harshgad, is located in the Nashik district of Maharashtra. It is famous for its steep rock-cut steps and vertical drops, making it a thrilling.",
    //   Address: "Nirgudpada, Maharashtra 422604, India",
    //   Contact: "+91-7709692329",

    // },

    // {
    //   Title: "RAJMACHI FORT",
    //   Desc: "Rajmachi Fort, situated near Lonavala in Maharashtra, is a popular trekking destination. It consists of two fortified structures: Shrivardhan and Manaranjan.",
    //   Address: "Rajmachi, Lonavala, Maharashtra 410405, India",
    //   Contact: "+91-7709692329",

    // },

    // {
    //   Title: "BHIMASHANKAR FORT",
    //   Desc: "Bhimashankar, located in the Pune district of Maharashtra, is renowned for its ancient Shiva temple and lush green surroundings. It is one of the twelve Jyotirlingas in India.",
    //   Address: "Bhimashankar, Maharashtra 410509, India",
    //   Contact: "+91-7709692329",

    // },
  ]

  return (
    <>
        <div ref={Fortref} className='landing4 w-full'>
            <div className='landing4-1'>
            {
              fortsdata.map((item, index) => (
                <Card fortsdata={item} reference={Fortref}/>
              ))
            }
            </div>

        </div>
    
    </>
  )
}

export default Landing4;