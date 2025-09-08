// components/Navigation.js
import React from 'react';

const Navigation = ({ currentPage, setCurrentPage, darkMode, setDarkMode }) => {
  return (
    <nav className={`shadow-md py-4 px-6 flex justify-between items-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center">
        <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
          <i className="fas fa-coins text-xl"></i>
        </div>
        <h1 className="text-2xl font-bold text-blue-600">Salaryfy.io</h1>
      </div>
      
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
        >
          {darkMode ? (
            <i className="fas fa-sun text-yellow-400"></i>
          ) : (
            <i className="fas fa-moon text-gray-700"></i>
          )}
        </button>
        
        <button className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;