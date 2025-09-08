// pages/SalaryBreakdownPage.js
import React, { useState } from 'react';

const SalaryBreakdownPage = () => {
  const [salary, setSalary] = useState(0);
  const [breakdown, setBreakdown] = useState(null);

  const calculateBreakdown = () => {
    // Simplified calculation logic
    const basic = salary * 0.4;
    const hra = salary * 0.2;
    const pf = salary * 0.12;
    const specialAllowance = salary * 0.28;
    const grossSalary = basic + hra + specialAllowance;
    const netSalary = grossSalary - pf;
    
    setBreakdown({
      basic,
      hra,
      pf,
      specialAllowance,
      grossSalary,
      netSalary
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Salary Breakdown</h1>
      
      {/* Salary Input */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Enter Your Salary Details</h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-2/3">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Annual Salary (INR)</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(parseFloat(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your annual salary"
            />
          </div>
          <button
            onClick={calculateBreakdown}
            className="w-full md:w-1/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mt-6 md:mt-0"
          >
            Calculate Breakdown
          </button>
        </div>
      </div>

      {/* Results */}
      {breakdown && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6">Salary Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <span className="font-medium">Basic Salary</span>
                <span className="font-bold">₹{breakdown.basic.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <span className="font-medium">HRA</span>
                <span className="font-bold">₹{breakdown.hra.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <span className="font-medium">Special Allowance</span>
                <span className="font-bold">₹{breakdown.specialAllowance.toFixed(2)}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <span className="font-medium">Provident Fund (PF)</span>
                <span className="font-bold">₹{breakdown.pf.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <span className="font-medium">Gross Salary</span>
                <span className="font-bold">₹{breakdown.grossSalary.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                <span className="font-medium">Net Salary</span>
                <span className="font-bold text-green-600">₹{breakdown.netSalary.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Explanation */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Understanding Salary Components</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Basic Salary</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The core component of your salary, usually 40-50% of your CTC. It's fully taxable and forms the basis for other calculations.
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">HRA (House Rent Allowance)</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Provided to cover rental expenses. Part of it is tax exempt if you live in a rented accommodation.
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Provident Fund (PF)</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A retirement savings scheme where both employee and employer contribute 12% of basic salary each month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryBreakdownPage;