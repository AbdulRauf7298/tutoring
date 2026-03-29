'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1e3a5f] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-90 transition-opacity">
            <span className="text-2xl">⚛️</span>
            <span className="text-[#f59e0b]">EduPhys</span>
            <span>Math</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-[#2563eb] text-white'
                    : 'text-gray-200 hover:bg-[#2563eb]/60 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Portal buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/student-portal"
              className="px-4 py-2 rounded-md text-sm font-semibold bg-[#f59e0b] text-[#1e3a5f] hover:bg-[#d97706] transition-colors"
            >
              Student Portal
            </Link>
            <Link
              href="/teacher-portal"
              className="px-4 py-2 rounded-md text-sm font-semibold border border-white text-white hover:bg-white hover:text-[#1e3a5f] transition-colors"
            >
              Teacher Portal
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-[#2563eb]/60 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1e3a5f] border-t border-[#2563eb]/30 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-[#2563eb] text-white'
                    : 'text-gray-200 hover:bg-[#2563eb]/60 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-[#2563eb]/30">
              <Link
                href="/student-portal"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 rounded-md text-sm font-semibold bg-[#f59e0b] text-[#1e3a5f] hover:bg-[#d97706] text-center transition-colors"
              >
                Student Portal
              </Link>
              <Link
                href="/teacher-portal"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 rounded-md text-sm font-semibold border border-white text-white hover:bg-white hover:text-[#1e3a5f] text-center transition-colors"
              >
                Teacher Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
