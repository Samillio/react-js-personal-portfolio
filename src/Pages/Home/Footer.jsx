import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp, FaTiktok } from 'react-icons/fa'; // Import new icons
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-blue-500 text-2xl font-bold"><img 
  src="./logo.png" 
  style={{ width: '100px', height: '100px' }} 
/></div>
          </div>
          <p className="mb-4">
            Making the world a better place through Advanced Technologies.
          </p>
         <div className=" text-white text-sm py-2 px-4 flex justify-center space-x-8">
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
        </div>

        {/* Links Sections */}
        <div>
          <h5 className="text-white font-bold mb-3">Solutions</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Automation</a></li>
            <li><a href="#" className="hover:text-white">Commerce</a></li>
            <li><a href="#" className="hover:text-white">Insights</a></li>
          </ul>
        </div>

        

        <div>
          <h5 className="text-white font-bold mb-3">Company</h5>
          <ul className="space-y-2">
            <li><a href="#about-me" className="hover:text-white">About</a></li>
          
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-3">Legal</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Terms of service</a></li>
            <li><a href="#policy" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">License</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p>&copy; 2024 Sirmillion. All rights reserved.</p>
        <p>Developed by : 0798590202</p>
      </div>
    </footer>
  );
};

export default Footer;
