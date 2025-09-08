// pages/TaxInformationPage.js
import React, { useState } from 'react';

const TaxInformationPage = () => {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    // Simplified tax calculation based on Indian tax slabs (2023)
    let calculatedTax = 0;
    let remainingIncome = income;

    if (remainingIncome > 1500000) {
      calculatedTax += (remainingIncome - 1500000) * 0.3;
      remainingIncome = 1500000;
    }
    if (remainingIncome > 1250000) {
      calculatedTax += (remainingIncome - 1250000) * 0.25;
      remainingIncome = 1250000;
    }
    if (remainingIncome > 1000000) {
      calculatedTax += (remainingIncome - 1000000) * 0.2;
      remainingIncome = 1000000;
    }
    if (remainingIncome > 750000) {
      calculatedTax += (remainingIncome - 750000) * 0.15;
      remainingIncome = 750000;
    }
    if (remainingIncome > 500000) {
      calculatedTax += (remainingIncome - 500000) * 0.1;
      remainingIncome = 500000;
    }

    setTax(calculatedTax);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Tax Information</h1>
      
      {/* Tax Calculator */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Income Tax Calculator</h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-2/3">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Annual Income (INR)</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(parseFloat(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your annual income"
            />
          </div>
          <button
            onClick={calculateTax}
            className="w-full md:w-1/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mt-6 md:mt-0"
          >
            Calculate Tax
          </button>
        </div>

        {tax !== null && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Tax Liability</h3>
            <p className="text-lg">Your estimated tax liability is: <span className="font-bold text-blue-600">₹{tax.toFixed(2)}</span></p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Note: This is a simplified calculation. Actual tax may vary based on deductions and exemptions.
            </p>
          </div>
        )}
      </div>

      {/* Tax Slabs */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6">Income Tax Slabs (2023-24)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Income Range</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Tax Rate</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Up to ₹2,50,000</td>
                <td className="px-6 py-4 whitespace-nowrap">Nil</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">₹2,50,001 to ₹5,00,000</td>
                <td className="px-6 py-4 whitespace-nowrap">5%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">₹5,00,001 to ₹7,50,000</td>
                <td className="px-6 py-4 whitespace-nowrap">10%</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">₹7,50,001 to ₹10,00,000</td>
                <td className="px-6 py-4 whitespace-nowrap">15%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">₹10,00,001 to ₹12,50,000</td>
                <td className="px-6 py-4 whitespace-nowrap">20%</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">₹12,50,001 to ₹15,00,000</td>
                <td className="px-6 py-4 whitespace-nowrap">25%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Above ₹15,00,000</td>
                <td className="px-6 py-4 whitespace-nowrap">30%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Deductions */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Common Deductions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <h3 className="text-lg font-semibold text-green-600 mb-2">Section 80C</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Investments up to ₹1,50,000 in specified instruments like ELSS, PPF, NSC, etc.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
              <li>ELSS Mutual Funds</li>
              <li>Public Provident Fund (PPF)</li>
              <li>Employee Provident Fund (EPF)</li>
              <li>5-year Tax Saving FD</li>
            </ul>
          </div>
          
          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Section 80D</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Deduction for health insurance premiums paid for self, family, and parents.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
              <li>Self & Family: ₹25,000</li>
              <li>Parents (below 60): ₹25,000</li>
              <li>Parents (senior citizens): ₹50,000</li>
            </ul>
          </div>
          
          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">HRA Exemption</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Exemption on House Rent Allowance for employees living in rented accommodation.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Calculated as the minimum of: Actual HRA, Rent paid minus 10% of salary, or 50% of salary (metro) / 40% (non-metro)
            </p>
          </div>
          
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-600 mb-2">Standard Deduction</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A flat deduction of ₹50,000 for salaried individuals regardless of actual expenses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxInformationPage;