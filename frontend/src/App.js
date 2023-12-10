import React from 'react';
import PostAnnounce from './Components/PostAnnounce'; 
import './App.css';
import Home from './Components/Home';
import GeneratePrice from './Components/GeneratePrice';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from './Components/Nav';
import Details from './Components/Details';
import Login from './Components/Login';
import SignUP from './Components/SignUP';
import { ContactUs } from './Components/ContactUs';
import { PageNotFound } from './Components/PageNotFound';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/post" element={<PostAnnounce />} />
        <Route path="/generate" element={<GeneratePrice />} />
        <Route path="/details" element={<Details />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
