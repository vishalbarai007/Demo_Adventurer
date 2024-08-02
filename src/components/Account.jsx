import React from 'react'
// import Navbar from './Navbar';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import '../CSSFiles/Accounts.css';
import MobileNavbar from './MobileNavbar';
import { MdAddAPhoto } from "react-icons/md";
import { useState, useEffect } from 'react';

  const Account = (props) => {

    const [username, setUsername] = useState("");
  
    const fetchUserData = async () => {
      const RequestOptions = {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: props.id
        })
      }
      const response = await fetch("http://localhost:5000/get-user-data", RequestOptions);
      const data = await response.json();
  
      setUsername(data.username);
    }
    useEffect(() => {
      fetchUserData();
    },[props.id])  
  


  return (
    <>
    <div className='Accounts'>
      <div className='Left'>
        <div className='Accountlogo'>
        </div>
 
<form action="/action_page.php" className='imgform'>
  <label for="myFile" class="custom-file-upload">
  <MdAddAPhoto />
  <div class="tooltiptext"><h5>Change profile image</h5></div>
  </label>
  <input type="file" id="myFile" name="filename"/>
  {/* <input type="submit" /> */}
</form>

        <div className='MiniNav'>
          <MobileNavbar/>
        </div>

      </div>

      <div className='Right'>
        <div className='Intro'>
          <h1>Welcome to Adventurer {username}.</h1>
        </div>
        
        <div className='Content'>
        </div>

      </div>
    </div>
    
    
    </>
  )

}


export default Account;