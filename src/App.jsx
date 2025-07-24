// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Navbar.jsx';
import Home from './page/Home.jsx';
import Footer from './components/Footer.jsx';
// import About from './pages/About';
// import Classes from './pages/Classes';
// import Gallery from './pages/Gallery';
// import Events from './pages/Events';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

