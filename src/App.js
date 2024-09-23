import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import BaseContent from './components/BaseContent';
import Landing1 from './components/Homepage-Landing-Components/Landing1';
import Account from './components/Account';
import Blogs from './components/Blogs';
// import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/Landing1' element={<Landing1 />} />
        <Route path='/form' element={<Form />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/BaseContent' element={<BaseContent/>} />
        {/* <Route
          path='/'
          element={
            <ProtectedRoute element={<BaseContent />} />
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
