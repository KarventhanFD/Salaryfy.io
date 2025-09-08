import React from 'react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">Understand Your Salary, Take Control of Your Finances</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Salaryfy.io helps you decode your salary structure, understand taxation, and make informed financial decisions.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setCurrentPage('salary')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Analyze Your Salary
          </button>
          <button 
            onClick={() => setCurrentPage('tax')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Tax Calculator
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <div className="text-blue-600 text-3xl mb-4">
            <i className="fas fa-chart-pie"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Salary Breakdown</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Understand each component of your salary - Basic, HRA, Allowances, Deductions, and more.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <div className="text-blue-600 text-3xl mb-4">
            <i className="fas fa-calculator"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Tax Information</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Learn about income tax slabs, deductions, and calculate your tax liability easily.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <div className="text-blue-600 text-3xl mb-4">
            <i className="fas fa-book"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Financial Education</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Articles and resources to help you save, budget, and invest wisely.
          </p>
        </div>
      </section>

      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Financial Journey Today</h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Take the first step towards financial awareness and empowerment with Salaryfy.io
        </p>
        <button 
          onClick={() => setCurrentPage('education')}
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Learn More
        </button>
      </section>
    </div>
  );
};

export default HomePage;