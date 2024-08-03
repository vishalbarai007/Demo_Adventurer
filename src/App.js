// import './App.css';
import BaseContent from './components/BaseContent';
// import Navbar from './components/Navbar';
import Landing1 from './components/Homepage-Landing-Components/Landing1';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './components/Account';
import { useEffect, useState } from 'react';

function App() {
  const [userId, setUserId] = useState("");
  const [isvalid, setisvalid] = useState(false);

  const validatetoken = async () => {
    const token = localStorage.getItem('token');
    const requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
    const response = await fetch("http://localhost:5000/verify", requestOptions);
    const data = await response.json();

    if (data.valid) {
      setUserId(data.user_id.userID);
      setisvalid(true);
    } else {
      setisvalid(false);
    }
  }

  useEffect(() => {
    validatetoken();
  }, []); // Run once when the component mounts

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/Landing1' element={<Landing1 isvalid={isvalid} />} />
          <Route path="/BaseContent" element={<BaseContent isvalid={isvalid} />} />
          <Route path='/Account' element={<Account userId={userId} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{/* <Account id={userId}/> */}
