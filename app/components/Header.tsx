'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedType, setSelectedType] = useState('Particulier');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [homeLink, setHomeLink] = useState('/');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Save home page to localStorage when user visits main pages
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let newHomeLink = '/';

      if (pathname === '/zakelijk') {
        localStorage.setItem('homePage', '/zakelijk');
        localStorage.setItem('currentHome', '/zakelijk');
        setSelectedType('Zakelijk');
        newHomeLink = '/zakelijk';
      } else if (pathname === '/grootzakelijk') {
        localStorage.setItem('homePage', '/grootzakelijk');
        localStorage.setItem('currentHome', '/grootzakelijk');
        setSelectedType('Grootzakelijk');
        newHomeLink = '/grootzakelijk';
      } else if (pathname === '/') {
        localStorage.setItem('homePage', '/');
        localStorage.setItem('currentHome', '/');
        setSelectedType('Particulier');
        newHomeLink = '/';
      } else {
        // For other pages, keep the saved home page and update selectedType based on it
        const savedHomePage = localStorage.getItem('homePage') || localStorage.getItem('currentHome');
        if (savedHomePage === '/zakelijk') {
          setSelectedType('Zakelijk');
          newHomeLink = '/zakelijk';
        } else if (savedHomePage === '/grootzakelijk') {
          setSelectedType('Grootzakelijk');
          newHomeLink = '/grootzakelijk';
        } else {
          setSelectedType('Particulier');
          newHomeLink = '/';
        }
      }

      setHomeLink(newHomeLink);
    }
  }, [pathname]);

  // Close dropdown when clicking outside - DISABLED TEMPORARILY
  // useEffect(() => {
  //   if (!isDropdownOpen) return;
  //   
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const target = event.target as Node;
  //     if (dropdownRef.current && !dropdownRef.current.contains(target)) {
  //       setIsDropdownOpen(false);
  //     }
  //   };

  //   const timeoutId = setTimeout(() => {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   }, 200);

  //   return () => {
  //     clearTimeout(timeoutId);
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [isDropdownOpen]);

  return (
    <header className="bg-white border-b border-green-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between relative">
          {/* Sol Taraf - Logo ve Type Selector */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link href={homeLink} className="flex items-center gap-2">
              <img
                src="/images/logo1.png"
                alt="Logo"
                className="h-8 md:h-11 w-auto max-w-[160px] md:max-w-[200px] object-contain"
              />
            </Link>
            <div className="h-8 md:h-10 w-px bg-gray-300"></div>
            {/* Type Selector Dropdown */}
            <div className="relative z-50" ref={dropdownRef}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-all text-xs md:text-sm font-semibold text-gray-700 z-50 relative"
              >
                <span>{selectedType}</span>
                <svg
                  className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-gray-50 border border-gray-100 rounded-xl shadow-xl z-[100] overflow-hidden">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedType('Particulier');
                      setIsDropdownOpen(false);
                      if (typeof window !== 'undefined') {
                        localStorage.setItem('homePage', '/');
                        localStorage.setItem('currentHome', '/');
                      }
                      setHomeLink('/');
                      router.push('/');
                    }}
                    className={`w-full text-left px-5 py-3.5 text-sm font-semibold transition-all duration-200 relative group cursor-pointer ${selectedType === 'Particulier'
                      ? 'bg-gray-100 text-gray-600 shadow-sm'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 bg-gray-50'
                      }`}
                  >
                    <span className="relative z-10 flex items-center justify-between pointer-events-none">
                      Particulier
                      {selectedType === 'Particulier' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="h-px bg-gray-200"></div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedType('Zakelijk');
                      setIsDropdownOpen(false);
                      if (typeof window !== 'undefined') {
                        localStorage.setItem('homePage', '/zakelijk');
                        localStorage.setItem('currentHome', '/zakelijk');
                      }
                      setHomeLink('/zakelijk');
                      router.push('/zakelijk');
                    }}
                    className={`w-full text-left px-5 py-3.5 text-sm font-semibold transition-all duration-200 relative group cursor-pointer ${selectedType === 'Zakelijk'
                      ? 'bg-gray-100 text-gray-600 shadow-sm'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 bg-gray-50'
                      }`}
                  >
                    <span className="relative z-10 flex items-center justify-between pointer-events-none">
                      Zakelijk
                      {selectedType === 'Zakelijk' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="h-px bg-gray-200"></div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedType('Grootzakelijk');
                      setIsDropdownOpen(false);
                      if (typeof window !== 'undefined') {
                        localStorage.setItem('homePage', '/grootzakelijk');
                        localStorage.setItem('currentHome', '/grootzakelijk');
                      }
                      setHomeLink('/grootzakelijk');
                      router.push('/grootzakelijk');
                    }}
                    className={`w-full text-left px-5 py-3.5 text-sm font-semibold transition-all duration-200 relative group cursor-pointer ${selectedType === 'Grootzakelijk'
                      ? 'bg-gray-100 text-gray-600 shadow-sm'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 bg-gray-50'
                      }`}
                  >
                    <span className="relative z-10 flex items-center justify-between pointer-events-none">
                      Grootzakelijk
                      {selectedType === 'Grootzakelijk' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Orta - Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <Link href={homeLink} className="relative px-4 py-2 text-gray-700 hover:text-green-700 rounded-lg font-medium transition-all duration-300 text-sm font-montserrat group">
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/vergelijk" className="relative px-4 py-2 text-gray-700 hover:text-green-700 rounded-lg font-medium transition-all duration-300 text-sm font-montserrat group">
              <span className="relative z-10">Vergelijk</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/leveranciers" className="relative px-4 py-2 text-gray-700 hover:text-green-700 rounded-lg font-medium transition-all duration-300 text-sm font-montserrat group">
              <span className="relative z-10">Leveranciers</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/blog" className="relative px-4 py-2 text-gray-700 hover:text-green-700 rounded-lg font-medium transition-all duration-300 text-sm font-montserrat group">
              <span className="relative z-10">Blog</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/over-ons" className="relative px-4 py-2 text-gray-700 hover:text-green-700 rounded-lg font-medium transition-all duration-300 text-sm font-montserrat group">
              <span className="relative z-10">Over Ons</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/contact" className="relative px-4 py-2 text-gray-700 hover:text-green-700 rounded-lg font-medium transition-all duration-300 text-sm font-montserrat group">
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
          </nav>

          {/* Sağ Taraf - CTA Button + Hamburger */}
          <div className="flex items-center gap-2 md:gap-0">
            {/* Desktop CTA Button */}
            <a
              href="tel:+31612345678"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg text-sm whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Gratis Advies
            </a>

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl md:hidden overflow-y-auto">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                <Link
                  href={homeLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/vergelijk"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium transition-colors"
                >
                  Vergelijk
                </Link>
                <Link
                  href="/leveranciers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium transition-colors"
                >
                  Leveranciers
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/over-ons"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium transition-colors"
                >
                  Over Ons
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium transition-colors"
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile CTA Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="tel:+31612345678"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-md w-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Gratis Advies
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
