import React, { useState, useEffect } from 'react';
import '../CSSFiles/Accounts.css';
import MobileNavbar from './MobileNavbar';
import { MdAddAPhoto } from "react-icons/md";

const Account = (props) => {
  const [username, setUsername] = useState("");

  const fetchUserData = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: props.userId
      })
    };
    console.log(props.userId);
    const response = await fetch("http://localhost:5000/get-user-data", requestOptions);
    console.log(response);
    
    const data = await response.json();
    console.log(data);
    
    if (data.userData) {
      setUsername(data.username);
    } else {
      console.error(data.message);
    }
  }

  useEffect(() => {
    if (props.userId) {
      fetchUserData();
    }
  }, [props.userId]);

  return (
    <div className='Accounts'>
      <div className='Left'>
        <div className='Accountlogo'></div>
        <form action="/action_page.php" className='imgform'>
          <label htmlFor="myFile" className="custom-file-upload">
            <MdAddAPhoto />
            <div className="tooltiptext"><h5>Change profile image.</h5></div>
          </label>
          <input type="file" id="myFile" name="filename" />
        </form>
        <div className='MiniNav'>
          <MobileNavbar />
        </div>
      </div>
      <div className='Right'>
        <div className='Intro'>
          <h1>Welcome to Adventurer {props.userId}.</h1>
          {/* <p className='w-5 bg-black'>{props.userId}</p> */}
        </div>
        <div className='Content'></div>
      </div>
    </div>
  );
}

export default Account;
