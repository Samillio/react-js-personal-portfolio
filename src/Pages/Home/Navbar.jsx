import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp, FaTiktok } from 'react-icons/fa'; // Import new icons
import 'font-awesome/css/font-awesome.min.css'; // Optionally, you can keep this if you want to keep FontAwesome icons
import { FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar with Social Links */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 flex justify-center space-x-8">
        <a href="https://wa.me/+254798590202" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          <FaWhatsapp size={24} />
        </a>
        <a href="https://facebook.com/Sirmillion" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com/sirmillion4545" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <FaTiktok size={24} />
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-3 px-4 flex justify-between items-center relative">
        <div className="flex items-center text-gray-900 space-x-4">
          <div className="flex items-center">
          <img 
  src="./img/logo.png" 

  style={{ width: '50px', height: '50px' }} 
/>
            <span className="text-lg font-bold">Sirmillion</span>
            <span className="text-lg font-bold text-blue-400">.</span>
           
          </div>
          <div className="block md:hidden">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white flex items-center">
           <FaPhone className="mr-2" size={20} /> +254798590202
        </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile menu */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-900 absolute md:static top-16 left-0 right-0 bg-blue-900 md:bg-transparent p-4 md:p-0 z-10`}
        >
          <li><a href="#about-me" className="hover:text-blue-400">About Us</a></li>
          <li><a href="#services" className="hover:text-blue-400">Services</a></li>
          <li><a href="#industry-reports" className="hover:text-blue-400">Current Project</a></li>
          <li><a href="#completedprojects" className="hover:text-blue-400">Completed Projects</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400">Testimonies</a></li>
          <li><a href="#contact-page" className="hover:text-blue-400">Contact Us</a></li>
        </ul>

        {/* Desktop button */}
        <div className="hidden md:block">
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white flex items-center">
           <FaPhone className="mr-2" size={20} /> +254798590202
        </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
