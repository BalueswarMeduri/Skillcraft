import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GetStart from './pages/GetStart';
import Dsa from './pages/Dsa'; 
import Dev from './pages/Dev'; 
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Cabin from './pages/Cabin';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GetStarted" element={<GetStart />} />
          <Route path="/Dsa" element={<Dsa />} />
          <Route path="/Dev" element={<Dev />} />
          <Route path="/About" element={<About />} />
          <Route path="/Roadmaps" element={<Roadmap />} />
          <Route path="/Cabin" element={<Cabin />} />
          <Route path="/Placement" element={<Cabin />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
