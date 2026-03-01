"use client";
import { useState } from 'react';
import LoginModal from './LoginModal';

export default function Navigation() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-8">
        {/* Logo/Avatar */}
        <div className="w-12 h-12 bg-gray-300 rounded-full" />

        {/* Links */}
        <div className="flex items-center gap-8">
          <button className="text-white hover:text-blue-400">Home</button>
          <button className="text-white hover:text-blue-400">Scan</button>
          <button className="text-white hover:text-blue-400">About Us</button>
          
          {/* USERNAME BUTTON */}
          <button 
            onClick={() => setShowLogin(true)}
            className="flex items-center gap-3 bg-[#D9D9D9] text-black px-5 py-2 rounded-full font-bold hover:bg-white transition-all"
          >
            Username
            <span className="w-4 h-4 bg-blue-500 rounded-full" />
          </button>
        </div>
      </nav>

      {/* Render Modal if state is true */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}