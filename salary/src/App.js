// App.js
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SalaryBreakdownPage from './pages/SalaryBreakdownPage';
import TaxInformationPage from './pages/TaxInformationPage';
import FinancialEducationPage from './pages/FinancialEducationPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'salary':
        return <SalaryBreakdownPage />;
      case 'tax':
        return <TaxInformationPage />;
      case 'education':
        return <FinancialEducationPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;