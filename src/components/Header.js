import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            <a href="/">FastFile.ai</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600">Home</a>
            <a href="#" className="text-gray-600">Features</a>
            <a href="#" className="text-gray-600">About Us</a>
            <a href="#" className="text-gray-600">Contact</a>
            <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded">Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
