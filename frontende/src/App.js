import React from 'react';
import PostAnnounce from './Components/PostAnnounce'; 
import './App.css';
import Home from './Components/Home';
import GeneratePrice from './Components/GeneratePrice';
import Profile from './Components/ProfileP';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProfile from './Components/EditProfile';
import Details from './Components/Details';
import MesAnnounces from './Components/MesAnnounces';
import ModifyAnnounces from './Components/ModifyAnnounces';
import LikedPosts from './Components/LikedPosts';
function App() {
  return (
    <Router>
      <Routes>
         <Route index element={<Home />} />
        <Route path='/post' element={<PostAnnounce />} />
        <Route path='/Generate' element={<GeneratePrice />} />
        <Route path='/Details' element={<Details />} />
        <Route path='/Profile/' element={<Profile />}>
          <Route index element={<EditProfile/>} />
          <Route path='/Profile/EditProfile' element={<EditProfile/>} />
          <Route path='/Profile/MesAnnounces' element={<MesAnnounces />} />
          <Route path='/Profile/LikedPosts' element={<LikedPosts />} />
        </Route>
        <Route path='/ModifyAnnounces' element={<ModifyAnnounces />} />
        <Route path='*' element={<h1>page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;



