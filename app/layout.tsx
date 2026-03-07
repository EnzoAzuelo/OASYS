"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import Link from "next/link";
import LoginModal from "@/components/LoginModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoginOpen, setLoginOpen] = useState(false);

  // 1. Add states for scroll tracking
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 2. Add the scroll listener logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide if scrolling down and past a small threshold (50px)
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // Show if scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <html lang="en">
      <body className="bg-dark-bg text-white">
        {/* 3. Apply the conditional classes to the nav */}
        <nav
          className={`fixed top-0 w-full z-50 flex justify-between items-center p-8 transition-all ${
            isVisible ? "nav-visible" : "nav-hidden"
          }`}
        >
          <div className="w-12 h-12 bg-gray-400 rounded-full" /> {/* Logo */}
          <div className="flex items-center gap-12 font-semibold">
            <Link href="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link
              href="/upload-media"
              className="hover:text-blue-500 transition-colors"
            >
              Scan
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-500 transition-colors"
            >
              About Us
            </Link>

            <button
              onClick={() => setLoginOpen(true)}
              className="bg-[#D9D9D9] text-black px-6 py-2 rounded-full flex items-center gap-2 font-bold hover:bg-white transition-all"
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
