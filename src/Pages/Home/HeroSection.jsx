import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link if using React Router

const images = [
  "/img/image1.PNG",
  "/img/image2.jpg",
  "/img/image3.webp",
  "/img/image4.webp",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",  // Keeps image proportional and fills container
        backgroundPosition: "center",  // Center the image
        width: "100%",  // Fixed width
        height: "500px",  // Fixed height (adjust as needed)
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      <div className="relative flex items-center justify-center h-full text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            SIRMILLION TECHNOLOGIES SOLUTIONS
          </h1>
          <p className="text-lg md:text-xl text-white">
            At Sirmillion, we provide a hands-on experience on all emerging technologies
          </p>
          {/* Add the button to navigate to the services */}
          <a href="#services">
         <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-900 transition-all">
          View Our Services
         </button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
