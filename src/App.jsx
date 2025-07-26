import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Navbar.jsx';
import Home from './page/Home.jsx';
import Footer from './components/Footer.jsx';
import ContactPage from './page/contact/ContactPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import AboutPage from './page/about/AboutPage.jsx';
import ClassPage from './page/class/ClassesPage.jsx';
import Gallery from './page/gallery/Gallery.jsx';
import AchievementPage from './page/NewAchievement.jsx';
const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactPage/>} /> 
         <Route path="/about" element={<AboutPage/>} />
          <Route path="/classes" element={<ClassPage/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/achievements" element={<AchievementPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

