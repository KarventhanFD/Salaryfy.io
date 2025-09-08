// components/Navigation.js
import React, { useState } from 'react';
import { FaCoins, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navigation = ({ currentPage, setCurrentPage, darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`shadow-md py-4 px-6 flex justify-between items-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center">
        <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
          <FaCoins className="text-xl" />
        </div>
        <h1 className="text-2xl font-bold text-blue-600">Salaryfy.io</h1>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <button 
          onClick={() => setCurrentPage('home')} 
          className={`px-3 py-2 rounded-lg transition-colors ${currentPage === 'home' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${darkMode ? (currentPage === 'home' ? 'bg-blue-900' : 'hover:bg-gray-700') : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('salary')} 
          className={`px-3 py-2 rounded-lg transition-colors ${currentPage === 'salary' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${darkMode ? (currentPage === 'salary' ? 'bg-blue-900' : 'hover:bg-gray-700') : ''}`}
        >
          Salary Breakdown
        </button>
        <button 
          onClick={() => setCurrentPage('tax')} 
          className={`px-3 py-2 rounded-lg transition-colors ${currentPage === 'tax' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${darkMode ? (currentPage === 'tax' ? 'bg-blue-900' : 'hover:bg-gray-700') : ''}`}
        >
          Tax Information
        </button>
        <button 
          onClick={() => setCurrentPage('education')} 
          className={`px-3 py-2 rounded-lg transition-colors ${currentPage === 'education' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${darkMode ? (currentPage === 'education' ? 'bg-blue-900' : 'hover:bg-gray-700') : ''}`}
        >
          Financial Education
        </button>
        <button 
          onClick={() => setCurrentPage('contact')} 
          className={`px-3 py-2 rounded-lg transition-colors ${currentPage === 'contact' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${darkMode ? (currentPage === 'contact' ? 'bg-blue-900' : 'hover:bg-gray-700') : ''}`}
        >
          Contact
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-700" />
          )}
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
        ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
      >
        <div className="p-5 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-blue-600">Menu</h2>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
        </div>
        
        <div className="p-5 flex flex-col space-y-4">
          <button 
            onClick={() => handleNavigation('home')} 
            className={`px-3 py-2 rounded-lg transition-colors text-left ${currentPage === 'home' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigation('salary')} 
            className={`px-3 py-2 rounded-lg transition-colors text-left ${currentPage === 'salary' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            Salary Breakdown
          </button>
          <button 
            onClick={() => handleNavigation('tax')} 
            className={`px-3 py-2 rounded-lg transition-colors text-left ${currentPage === 'tax' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            Tax Information
          </button>
          <button 
            onClick={() => handleNavigation('education')} 
            className={`px-3 py-2 rounded-lg transition-colors text-left ${currentPage === 'education' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            Financial Education
          </button>
          <button 
            onClick={() => handleNavigation('contact')} 
            className={`px-3 py-2 rounded-lg transition-colors text-left ${currentPage === 'contact' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            Contact
          </button>
          
          <div className="pt-4 mt-4 border-t dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FaSun className="text-yellow-400" />
                ) : (
                  <FaMoon className="text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;