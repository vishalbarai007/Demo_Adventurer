import React from "react";
import { useNavigate } from "react-router-dom";

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
