
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-solid border-slate-200 dark:border-slate-800 shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
            <img src={logo} alt="SFTechProjects Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold leading-tight tracking-[-0.015em]">SFTechProjects</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Home</Link>
            <Link to="/services" className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Services</Link>
            <Link to="/about" className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">About</Link>
            <Link to="/contact" className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Contact</Link>
            <Link to="/admin" className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Admin</Link>
            <Link to="/quote" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-indigo-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-indigo-500">
              <span className="truncate">Request a Quote</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-slate-50">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-slate-50">Home</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-slate-50">Services</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-slate-50">About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-slate-50">Contact</Link>
            <Link to="/admin" className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-slate-50">Admin</Link>
            <Link to="/quote" className="block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-500">
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
