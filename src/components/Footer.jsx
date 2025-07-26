import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold text-red-600 mb-4">Get In Touch</h3>
          <div className="text-sm text-gray-300 space-y-3">
            <p className="flex items-start gap-2">
              <LocationOnIcon fontSize="small" className="mt-1 text-red-600" />
              Pocket A, Kanchanjunga Apartment,<br />Sector 53, Noida, Uttar Pradesh 201301
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon fontSize="small" className="text-red-600" />
              <a href="tel:9811602645" className="hover:text-red-400">+91 9811602645</a>
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon fontSize="small" className="text-red-600" />
              <a href="tel:+918527104123" className="hover:text-red-400">+91 85271 04123</a>
            </p>
            <p className="flex items-center gap-2">
              <EmailIcon fontSize="small" className="text-red-600" />
              <a href="mailto:pooja.designer@gmail.com" className="hover:text-red-400">pooja.designer@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-red-600 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-red-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-400">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-red-400">Gallery</Link></li>
            <li><Link to="/achievements" className="hover:text-red-400">Achievements</Link></li>
            <li><Link to="/contact" className="hover:text-red-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Courses */}
        <div>
          <h3 className="text-lg font-semibold text-red-600 mb-4">Our Courses</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Kathak Dance</li>
            <li>Bollywood Dance</li>
            <li>Fitness Dance</li>
            <li>Music Classes</li>
            <li>Instruments</li>
          </ul>
        </div>
        <div>
  <h3 className="text-lg font-semibold text-red-600 mb-4">About Us</h3>
  <p className="text-sm text-gray-300 leading-relaxed text-justify">
   Our studio is a vibrant hub of dance, music, and creativity, where students of all ages can express themselves freely.
    <br /><br />
    From cultural events to modern movement, we aim to blend art with expression and help every learner grow with joy and confidence.
  </p>
</div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Kathak Nrityashala. All rights reserved. | Design by <span className="text-red-600 font-medium">Advertising India</span>
        </p>
      </div>
    </footer>
  );
}

