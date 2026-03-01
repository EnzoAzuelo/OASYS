"use client";
import { useState } from "react";
import "./globals.css";
import Link from "next/link";
import LoginModal from "@/components/LoginModal"; // Move your Login code here

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-[#1a1a1a] text-white">
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-8">
          <div className="w-12 h-12 bg-gray-400 rounded-full" /> {/* Logo */}
          <div className="flex items-center gap-12 font-semibold">
            <Link href="/">Home</Link>
            <Link href="/upload-media">Scan</Link>
            <Link href="/about">About Us</Link>
            <button 
              onClick={() => setLoginOpen(true)}
              className="bg-[#D9D9D9] text-black px-6 py-2 rounded-full flex items-center gap-2 font-bold"
            >
              Username <span className="w-4 h-4 bg-blue-500 rounded-full" />
            </button>
          </div>
        </nav>

        {children}

        {isLoginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
      </body>
    </html>
  );
}