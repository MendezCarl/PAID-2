import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Evaluate from './pages/Evaluate'
import Profile from './pages/Profile'
import Save from './pages/Save'
import Upload from './pages/Upload'
import Navbar from "./components/Navbar"

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/profile' element = {<Profile />} />
        <Route path = '/evaluate' element = {<Evaluate />} />
        <Route path = '/upload' element = {<Upload />} />
        <Route path = '/save' element = {<Save />} /> 
      </Routes>
    </Router>
  );
};

export default App;