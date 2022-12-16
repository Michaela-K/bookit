import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Events from './components/Events/index';
import MyEvents from './components/MyEvents/index';
import Login from './components/Login/index';
import Register from './components/Register/index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar></Navbar>
   <Routes>
    <Route path="/" element={<App/>}/>
      <Route path="/events" element={<Events/>}/>        {/*    /create     */}
      <Route path="/myevents" element={<MyEvents/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals