import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <div className="text-xl font-bold text-blue-600">MyApp</div>
      <div className="flex gap-6">
        <h2 className="hover:text-gray-300 cursor-pointer">Home</h2>
        <h2 className="hover:text-gray-300 cursor-pointer">About</h2>
        <h2 className="hover:text-gray-300 cursor-pointer">Services</h2>
        <h2 className="hover:text-gray-300 cursor-pointer">Login</h2>
      </div>
    </nav>
  );
}

export default Navbar;
