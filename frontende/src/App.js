import React from 'react';
import PostAnnounce from './Components/PostAnnounce'; 
import './App.css';
import Home from './Components/Home';
import GeneratePrice from './Components/GeneratePrice';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from './Components/Nav';
import Details from './Components/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post' element={<PostAnnounce/>} />
        <Route path='/Generate' element={<GeneratePrice/>} />
        <Route path='/Details' element={<Details/>} />
        <Route path='*' element={<h1>page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
