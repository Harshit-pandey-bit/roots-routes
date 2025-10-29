'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold text-gray-900">Uttarakhand Trails</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Destinations
            </Link>
            <Link href="/experiences" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Experiences
            </Link>
            <Link href="/homestays" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Homestays
            </Link>
            <Link href="/itinerary-builder" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Build Your Itinerary
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <button className="text-gray-700 hover:text-gray-900 text-sm font-medium px-4 py-2 transition-colors">
                🔓 Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-[#6B8E6F] hover:bg-[#5a7a5e] text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors flex items-center gap-2">
                <span>👤</span>
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Home
              </Link>
              <Link href="/destinations" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Destinations
              </Link>
              <Link href="/experiences" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Experiences
              </Link>
              <Link href="/homestays" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Homestays
              </Link>
              <Link href="/itinerary-builder" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Build Your Itinerary
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link href="/login">
                  <button className="w-full text-left text-gray-700 hover:text-gray-900 text-sm font-medium px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    🔓 Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="w-full bg-[#6B8E6F] hover:bg-[#5a7a5e] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <span>👤</span>
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
