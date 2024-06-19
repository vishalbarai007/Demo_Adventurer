// import './App.css';
import BaseContent from './components/BaseContent';
import Navbar from './components/Navbar';
import Landing1 from './components/Landing1';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './components/Account';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element = {<Form/>}/>
      <Route path='/Navbar' element= {<Navbar/>}/>
      <Route path='/Landing1' element= {<Landing1/>}/>
      <Route path="/BaseContent" element={<BaseContent/>} />
      <Route path='/Account' element={<Account/>}/>

      {/* <Route path='/aboutus' element= {<About/>}/>
      <Route path='/contactus' element= {<Contact/>}/>
      <Route path='/imagepack' element= {<ImageList/>}/>
      <Route path='/Form' element = {<Form/>} />
      <Route path='/ForgotPass' element = {<ForgotPass/>}/>  */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
