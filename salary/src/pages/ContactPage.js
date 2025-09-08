// pages/ContactPage.js
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactPage = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className={`p-8 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'}`}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'}`}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'}`}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div>
          <div className={`p-8 rounded-lg shadow-md mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>123 Finance Street, Money District<br />Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                  <FaPhone className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                  <FaEnvelope className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>info@salaryfy.io</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className={`p-8 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Is Salaryfy.io free to use?</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Yes, all our basic features are completely free to use.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">How accurate are the tax calculations?</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Our calculations are based on current tax laws but should be verified with a tax professional.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">Do you store my financial data?</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>No, we don't store any of your personal or financial data. All calculations happen in your browser.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;