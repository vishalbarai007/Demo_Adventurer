import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo1 from '../Images/adventurer-logo-zip-file/png/logo-color.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import Account from './Account';
import '../CSSFiles/Form.css';


function Form() {

  const Navigate = useNavigate();
  const [UserName1,setUserName1] = useState("");
  const [UserPassword1,setUserPassword1] = useState("");
  const [UserPassword2,setUserPassword2] = useState("");


  const handleSubmit = () => {
    console.log("working")
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(
        {
          username: UserName1,
          password: UserPassword1
        }
      )
    }

    const response = fetch("http://localhost:5000/register", requestOptions)
  }




  let [Mode, setFormMode] = useState("SignUp")

  const changeMode = () => {
    setFormMode(Mode === "SignIn" ? "SignUp":"SignIn")
  }


  const Login1 = () => {

    let UserId = document.querySelector(".FormUser").value;
    let Userpass = document.querySelector(".FormPass").value;


    if (UserId == UserName1 && Userpass == UserPassword1) {
      if (UserId == "" ||  Userpass == "") {

        alert("Please enter UserId and password.")
        
      } else {

        alert("Login Successful");
        Navigate("/BaseContent");
        // Navigate("/Account");
        // <Account Username= "vishal" />
        
      }

    } else {
      if(UserId != UserName1)
        {
          alert("Invalid UserName");
        }
      else
        {
          alert("Invalid Password");
        }
      
    }
  }


  const Login2 = () => {

    let UserId = document.querySelector(".FormUser").value;


    if (UserPassword1 !== UserPassword2) {

      alert ("Password doesn't matched please enter Identical password in both sections.")
      
    } 
    else {

      alert(`Sign up successfully.\n UserID: ${UserId} User password: ${UserPassword1}`);
      setFormMode(Mode = "SignIn");
    }

  }


  const Copy1 = () => {
      alert("Copying is not allowed."); 
      return false; 

  } 

  if(Mode === "SignIn"){
    return (
      <>
          <div className='main-form h-screen w-full px-40 py-20'>
              <div className=' Formdiv h-full w-full bg-white flex '>
                <div className='Formleft w-1/2 h-full p-20 bg-cover'>
                  <img src={Logo1} className='h-20 w-20 -my-16 -mx-5' alt='Logo'/>
                  
                </div>
  
                <div className='Formright px-16 py-16 w-1/2 h-full flex'>
                <form>
                  <h1 className='text-black font-bold'>Sign In</h1>
                  <input type='text' placeholder='UserName' className='FormUser '   value={UserName1} onChange={(e) => setUserName1(e.target.value)}></input>
                  <input type='password' placeholder='Password' className='FormPass '   value={UserPassword1} onChange={(e) => setUserPassword1(e.target.value)}></input>
  
                  <button className='button2 text-white text-xl' onClick={Login1} >Continue</button>
                  <Link to= {"./ForgotPass"} className=' text-blue-600 cursor-pointer' > Forgot Password ? </Link>

                  
                  <h6 className='m-4 text-center'>Connect with social media</h6>
  
                  <button className='button3 bg-sky-500 text-white flex gap-40 hover:bg-sky-600'>
                    <div className=' w-1 h-full border-r-white'>
                    <FaSquareTwitter className='my-1' style={{color:"white", fontSize:"30"}}/>   
                    </div>
                    Sign in with twitter
                  </button>

                  <button className='button4 bg-blue-800 text-white flex gap-40 hover:bg-blue-900' >
                    <div className=' w-1 h-full border-r-white'>
                      <FaFacebook className='my-1' style={{color:"white", fontSize:"30"}}/>
                    </div>
                  Sign in with facebook
                  </button>

                  <p className='text-center m-3'> Didn't have Account ? <a className=' text-blue-600 cursor-pointer ' onClick={changeMode} >Sign up</a></p>
                  </form>
                  
                </div>
  
              </div>
          </div> 
      
      </>
    )
  }

  else {

      return (
      <>

      <div className=' h-screen w-full'>
      <div className='main-form h-screen w-full px-40 py-20 '>
  
  <div className=' Formdiv h-full w-full bg-white flex '>
    <div className='Formleft w-1/2 h-full p-20 bg-cover '>
      <img src={Logo1} className='h-20 w-20 -my-16 -mx-5' alt='Logo1'/>
    </div>

    <div className='Formright px-16 py-4 w-1/2 h-full '>
    <form>
      <h1 className='text-black font-bold'>Sign Up</h1>
      <input type='text' placeholder='Create UserName' className='FormUser ' value={UserName1} onChange={(e) => setUserName1(e.target.value)}></input>
      <input type='password' placeholder='Create Password' className='FormPass1 ' value={UserPassword1} onChange={(e) => setUserPassword1(e.target.value)}></input>
      <input type='password' placeholder='Confirm Password' className='FormPass2 ' value={UserPassword2} onChange={(e) => setUserPassword2(e.target.value)}></input>

      <button className='button2 text-white text-xl' onClick={() => {Login2();handleSubmit()}} >Continue</button>
      <h6 className='m-4 text-center'>Connect with social media</h6>

      <button className='button3 bg-sky-500 text-white flex gap-40  hover:bg-sky-600'>
        <div className=' w-1 h-full border-r-white'>
        <FaSquareTwitter className='my-1' style={{color:"white", fontSize:"30"}}/>   
        </div>
        Sign up with twitter
      </button>

      <button className='button4 bg-blue-800 text-white flex gap-40  hover:bg-blue-900' >
        <div className=' w-1 h-full border-r-white'>
          <FaFacebook className='my-1' style={{color:"white", fontSize:"30"}}/>
        </div>
      Sign up with facebook
      </button>
      <p className='text-center m-3'> Already Have Account ? <a className=' text-blue-600 cursor-pointer ' onClick={changeMode}>Sign In</a></p>
      </form>
    </div>

  </div>
  
</div> 
      </div>
          
      
      </>

      )
    
  }

  }

export default Form;