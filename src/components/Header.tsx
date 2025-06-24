'use client';

import React, { JSX } from 'react';
import Link from 'next/link';
import { useDropdown } from '../hooks/useDropdown';

interface DropdownProps {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
}

export default function Header(): JSX.Element {
  const {
    isOpen: isCategoriesOpen,
    toggle: toggleCategories,
    close: closeCategories,
  }: DropdownProps = useDropdown();
  const {
    isOpen: isMobileMenuOpen,
    toggle: toggleMobileMenu,
    close: closeMobileMenu,
  }: DropdownProps = useDropdown();
  return (
    <header
      className="flex flex-row justify-between items-center py-4 px-[7%] md:px-[5%] lg:px-20 xl:px-50 2xl:px-92 bg-gray-100 relative"
      role="banner"
    >
      <div className="flex items-center space-x-4 sm:space-x-8">
        <h1 className="font-eb-garamond-semibold text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl text-gray-900">
          <Link
            href="/"
            className="hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            aria-label="Reader Space - Go to homepage"
            title="Reader Space - Your Personal Reading Journey"
          >
            Reader Space
          </Link>
        </h1>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={toggleCategories}
              className="text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 flex items-center cursor-pointer"
              aria-expanded={isCategoriesOpen}
              aria-haspopup="true"
            >
              Categories
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  <Link
                    href="/articles"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={closeCategories}
                  >
                    <div className="font-medium">All</div>
                  </Link>
                  <Link
                    href="/articles?tag=classics"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={closeCategories}
                  >
                    <div className="font-medium">Classics</div>
                  </Link>
                  <Link
                    href="/articles?tag=fantasy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={closeCategories}
                  >
                    <div className="font-medium">Fantasy</div>
                  </Link>
                  <Link
                    href="/articles?tag=mystery"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={closeCategories}
                  >
                    <div className="font-medium">Mystery</div>
                  </Link>
                  <Link
                    href="/articles?tag=nonfiction"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={closeCategories}
                  >
                    <div className="font-medium">Non-Fiction</div>
                  </Link>
                  <Link
                    href="/articles?tag=romance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={closeCategories}
                  >
                    <div className="font-medium">Romance</div>
                  </Link>
                  <Link
                    href="/articles?tag=scifi"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={closeCategories}
                  >
                    <div className="font-medium">Sci-Fi</div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
        ></span>
      </button>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40"
          onClick={closeMobileMenu}
        ></div>
      )}

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 p-4">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-md px-3 py-2 text-base font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              <div className="space-y-2">
                <button
                  onClick={toggleCategories}
                  className="w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-md px-3 py-2 text-base font-medium flex items-center justify-between"
                  aria-expanded={isCategoriesOpen}
                >
                  Categories
                  <svg
                    className={`h-4 w-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isCategoriesOpen && (
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/articles"
                      className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-md px-3 py-2 text-sm"
                      onClick={closeMobileMenu}
                    >
                      All
                    </Link>
                    <Link
                      href="/articles?tag=classics"
                      className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-md px-3 py-2 text-sm"
                      onClick={closeMobileMenu}
                    >
                      Classics
                    </Link>
                    <Link
                      href="/articles?tag=fantasy"
                      className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-md px-3 py-2 text-sm"
                      onClick={closeMobileMenu}
                    >
                      Fantasy
                    </Link>
                    <Link
                      href="/articles?tag=mystery"
                      className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-md px-3 py-2 text-sm"
                      onClick={closeMobileMenu}
                    >
                      Mystery
                    </Link>
                    <Link
                      href="/articles?tag=nonfiction"
                      className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-md px-3 py-2 text-sm"
                      onClick={closeMobileMenu}
                    >
                      Non-Fiction
                    </Link>
                    <Link
                      href="/articles?tag=romance"
                      className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-md px-3 py-2 text-sm"
                      onClick={closeMobileMenu}
                    >
                      Romance
                    </Link>
                    <Link
                      href="/articles?tag=scifi"
                      className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-md px-3 py-2 text-sm"
                      onClick={closeMobileMenu}
                    >
                      Sci-Fi
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-md px-3 py-2 text-base font-medium"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
