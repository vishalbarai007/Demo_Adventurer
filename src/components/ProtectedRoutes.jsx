import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const [userId, setUserId] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateToken = async () => {
    const token = localStorage.getItem('token');
    const requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
    try {
      const response = await fetch("http://localhost:5000/verify", requestOptions);
      const data = await response.json();
      if (data.valid) {
        setUserId(data.user_id.userID);
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } catch (error) {
      console.error("Error validating token:", error);
      setIsValid(false);
    }
  };

  useEffect(() => {
    validateToken();
  }, []); // Run once when the component mounts

  if (!isValid) {
    return <Navigate to="/form" />;
  }

  return <Element {...rest} />;
};

export default ProtectedRoute;
