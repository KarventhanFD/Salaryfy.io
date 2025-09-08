// pages/FinancialEducationPage.js
import React from 'react';

const FinancialEducationPage = () => {
  const articles = [
    {
      id: 1,
      title: "Beginner's Guide to Investing",
      excerpt: "Learn the basics of investing and how to get started with your investment journey.",
      category: "Investing",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "How to Create a Budget That Works",
      excerpt: "Practical tips for creating and sticking to a budget that aligns with your financial goals.",
      category: "Budgeting",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Understanding Different Investment Options",
      excerpt: "Explore various investment vehicles like stocks, mutual funds, and fixed deposits.",
      category: "Investing",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Tax Saving Strategies for Salaried Employees",
      excerpt: "Legitimate ways to reduce your tax liability and maximize your take-home salary.",
      category: "Taxation",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Emergency Fund: Why You Need One",
      excerpt: "The importance of having an emergency fund and how to build one systematically.",
      category: "Saving",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Retirement Planning in Your 20s and 30s",
      excerpt: "Why starting early is crucial for retirement and how to plan for it effectively.",
      category: "Retirement",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Financial Education</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <div key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 bg-blue-600 flex items-center justify-center">
              <i className="fas fa-book-open text-white text-5xl"></i>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
              <button className="text-blue-600 font-medium flex items-center">
                Read More
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Resources Section */}
      <div className="mt-16 bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <i className="fas fa-video text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
            <p>Watch our collection of educational videos on personal finance topics.</p>
          </div>
          <div className="text-center p-6">
            <i className="fas fa-calculator text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Financial Calculators</h3>
            <p>Use our interactive calculators for loan EMI, retirement planning, and more.</p>
          </div>
          <div className="text-center p-6">
            <i className="fas fa-download text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Downloadable Guides</h3>
            <p>Access our comprehensive guides on various financial topics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialEducationPage;