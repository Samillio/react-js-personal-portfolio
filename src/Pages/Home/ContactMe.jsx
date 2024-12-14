import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    marketing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_o6rp7sf',  // Replace with your EmailJS Service ID
        'template_b6sk41s', // Replace with your EmailJS Template ID
        formData,
        '2U03X95fb_kl-sIRX'      // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '', marketing: false });
        },
        (error) => {
          alert('Failed to send message, please try again later.');
          console.error('Error:', error);
        }
      );
  };

  return (
    <div id="contact-page" className="bg-blue-50 min-h-screen flex flex-col md:flex-row items-center py-10">
      {/* Right Side: Form */}
      <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-8 md:mr-6 mb-8 md:mb-0">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Tell us about your Tech Problem</h2>
        <p className="text-center text-gray-600 mb-8">
          Hand On Experience experts.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>
         
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="md:col-span-2 flex items-center">
            <input 
              type="checkbox" 
              name="marketing" 
              checked={formData.marketing}
              onChange={handleChange} 
              id="marketing" 
              className="mr-2" 
            />
            <label htmlFor="marketing" className="text-gray-700 text-sm">
              I agree to receive occasional marketing messages from Sirmillion.
            </label>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Let's talk business
            </button>
          </div>
        </form>
      </div>

      {/* Left Side: Office Information */}
      <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6 md:p-8">
        <div>
          <h4 className="text-gray-800 font-medium">Call Us</h4>
          <FaPhone className="mr-2" size={20} /> +254798590202
        </div>
        
        <h3 className="text-gray-800 font-semibold mb-4 text-lg">Our Locations</h3>
        <div className="mb-6">
          <h4 className="text-gray-800 font-medium">Nakuru (head office)</h4>
          <p className="text-gray-600">Level 5, 36 Biashara Center<br />Near Family Bank</p>
          <a href="#" className="text-blue-500 underline">Get directions</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
