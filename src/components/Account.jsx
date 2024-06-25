import React from 'react'
// import Navbar from './Navbar';
import '../CSSFiles/Accounts.css';
import MobileNavbar from './MobileNavbar';
import { MdAddAPhoto } from "react-icons/md";

function Account() {
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
          <h1>Welcome to Adventurer Vishal.</h1>
        </div>
        <div className='Content'>
          

          <div>
            
          </div>

        </div>

      </div>

    </div>
    
    
    </>
  )
}

export default Account;