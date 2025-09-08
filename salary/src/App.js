// App.js (with scroll prevention)
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SalaryBreakdownPage from './pages/SalaryBreakdownPage';
import TaxInformationPage from './pages/TaxInformationPage';
import FinancialEducationPage from './pages/FinancialEducationPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Apply dark mode class to body for proper background
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [mobileMenuOpen]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} darkMode={darkMode} />;
      case 'salary':
        return <SalaryBreakdownPage darkMode={darkMode} />;
      case 'tax':
        return <TaxInformationPage darkMode={darkMode} />;
      case 'education':
        return <FinancialEducationPage darkMode={darkMode} />;
      case 'contact':
        return <ContactPage darkMode={darkMode} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;