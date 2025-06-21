import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex items-center">
            <h1 className="font-eb-garamond-italic text-2xl font-semibold text-gray-900">
              <Link 
                href="/" 
                className="hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label="Reader Space - Go to homepage"
                title="Reader Space - Your Personal Reading Journey"
              >
                Reader Space
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 