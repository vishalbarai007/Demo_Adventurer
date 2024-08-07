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
 


  // form backend handle 
  // sign up page handler
  const handleRegister = () => {
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


  // login page handler
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("working");

    const LoginOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(
        {
          username: UserName1,
          password: UserPassword1
        }
      )
    }

    const response = await fetch("http://localhost:5000/login", LoginOptions);
    const data = await response.json();
    console.log(data);

    
    if(data.success){
      alert("Login Successful");
      localStorage.setItem('token', data.token);
      Navigate("/BaseContent");
    }
    else if (UserName1 == "" ||  UserPassword1 == "") {

      alert("Please enter UserId and password.")
      
    }else if(!data.success){
      if(data.message === "User does not exists"){
        alert("User does not exist");
      }
      else{
        alert("Invalid Password");
      }
    }
  }


  let [Mode, setFormMode] = useState("SignUp")

  const changeMode = () => {
    setFormMode(Mode === "SignIn" ? "SignUp":"SignIn")
  }



  const Login2 = () => {

    let UserId = document.querySelector(".FormUser").value;


    if (UserPassword1 !== UserPassword2) {

      alert ("Password doesn't matched please enter Identical password in both sections.")
      
    } 
    else {

      alert("Sign up successfully.");
      setFormMode(Mode = "SignIn");
    }

  }


  // const Copy1 = () => {
  //     alert("Copying is not allowed."); 
  //     return false; 

  // } 

  if(Mode === "SignIn"){
    return (
      <>
          <div className='main-form h-screen w-full px-40 py-20'>
              <div className=' Formdiv h-full w-full bg-white flex '>
                <div className='Formleft w-1/2 h-full p-20 bg-cover'>
                  <img src={Logo1} className='h-20 w-20 -my-16 -mx-5' alt='Logo'/>
                  
                </div>
  
                <div className='FormRight px-16 py-16 w-1/2 h-full flex'>
                <form>
                  <h1 className='text-black font-bold'>Sign In</h1>
                  <input type='text' placeholder='UserName' className='FormUser '   value={UserName1} onChange={(e) => setUserName1(e.target.value)}></input>
                  <input type='password' placeholder='Password' className='FormPass '   value={UserPassword1} onChange={(e) => setUserPassword1(e.target.value)}></input>
  
                  <button className='button2 text-white text-xl' onClick={handleLogin} >Continue</button>
                  <Link to= {"./ForgotPass"} className=' text-blue-600 cursor-pointer' > Forgot Password ? </Link>

                  
                  <h6 className='m-4 text-center'>Connect with social media</h6>
  
                  <button className='button3 bg-sky-500 text-white flex gap-40 hover:bg-sky-600'>
                    <div className=' w-1 h-full border-r-white'>
                    <FaSquareTwitter className='my-1' style={{color:"white", fontSize:"30"}}/>   
                    </div>
                    <h3 className='twitter'>Sign in with twitter</h3>
                  </button>

                  <button className='button4 bg-blue-800 text-white flex gap-40 hover:bg-blue-900' >
                    <div className=' w-1 h-full border-r-white'>
                      <FaFacebook className='my-1' style={{color:"white", fontSize:"30"}}/>
                    </div>
                    <h3> Sign in with facebook</h3>
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

    <div className='FormRight px-16 py-4 h-full '>
    <form>
      <h1 className='text-black font-bold'>Sign Up</h1>
      <input type='text' placeholder='Create UserName' className='FormUser ' value={UserName1} onChange={(e) => setUserName1(e.target.value)}></input>
      <input type='password' placeholder='Create Password' className='FormPass1 ' value={UserPassword1} onChange={(e) => setUserPassword1(e.target.value)}></input>
      <input type='password' placeholder='Confirm Password' className='FormPass2 ' value={UserPassword2} onChange={(e) => setUserPassword2(e.target.value)}></input>

      <button className='button2 text-white text-xl' onClick={() => {Login2();handleRegister()}} >Continue</button>
      <h6 className='m-4 text-center'>Connect with social media</h6>

      <button className='button3 bg-sky-500 text-white flex gap-40  hover:bg-sky-600'>
        <div className=' w-1 h-full border-r-white'>
        <FaSquareTwitter className='my-1' style={{color:"white", fontSize:"30"}}/>   
        </div>
        <h3 className='twitter'>Sign up with twitter</h3>
      </button>

      <button className='button4 bg-blue-800 text-white flex gap-40  hover:bg-blue-900' >
        <div className=' w-1 h-full border-r-white'>
          <FaFacebook className='my-1' style={{color:"white", fontSize:"30"}}/>
        </div>
        <h3>Sign up with facebook</h3>
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