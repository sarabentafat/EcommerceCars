import React from 'react';
import PostAnnounce from './Components/PostAnnounce'; 
import './App.css';
import Home from './Components/Home';
import GeneratePrice from './Components/GeneratePrice';
import { Routes, Route,Navigate} from "react-router-dom"
import Nav from './Components/Nav';
import Details from './Components/Details';
import Login from './Components/Login';
import SignUP from './Components/SignUP';
import { ContactUs } from './Components/ContactUs';
import { PageNotFound } from './Components/PageNotFound';
import { ForgotPassword } from './Components/ForgotPassword';
import Profile from './Components/Profile';
import {useSelector} from "react-redux"
import FirstsectionHome from './Components/FirstsectionHome';

function App() {
   const {user}=useSelector(state=>state.auth)
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          exact
          element={
            !user ? (
             <>
                <FirstsectionHome />
                <Home />
              </>
            ) : (
              <Home/>
              
            )
          }
        />
        <Route path="/post" element={<PostAnnounce />} />
        <Route path="/generate" element={<GeneratePrice />} />
        <Route path="/annonces/:id" element={<Details />} />
        <Route
          path="/signup"
          element={!user ? <SignUP /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
