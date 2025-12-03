
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-solid border-slate-200 dark:border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
              <img src={logo} alt="SFTechProjects Logo" className="h-8 w-auto" />
              <span className="text-lg font-bold">SFTechProjects</span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
              Engineering • Prototyping • Digital Fabrication
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600">Home</Link></li>
              <li><Link to="/services" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600">Services</Link></li>
              <li><Link to="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600">About</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600">Request a Quote</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600">Contact</Link></li>
              <li><Link to="/store" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600">Store</Link></li>
            </ul>
          </div>

          {/* Section 3: Social Icons */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              {/* Placeholder social icons */}
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.8.35-1.65.58-2.5.68.9-.53 1.58-1.37 1.9-2.4-.84.5-1.77.86-2.77 1.05C18.25 4.37 17.06 4 15.75 4c-2.55 0-4.6 2.07-4.6 4.6 0 .36.04.7.12 1.04-3.8-.18-7.17-2-9.42-4.77-.4.68-.62 1.47-.62 2.32 0 1.6.8 3 2.02 3.82-.75-.02-1.45-.22-2.08-.57v.06c0 2.23 1.58 4.1 3.68 4.52-.4.1-.82.15-1.25.15-.3 0-.58-.03-.86-.08.6 1.83 2.3 3.15 4.33 3.18-1.57 1.23-3.55 1.96-5.7 1.96-.37 0-.74-.02-1.1-.06 2 1.3 4.38 2.06 6.94 2.06 8.32 0 12.87-6.9 12.87-12.87 0-.2 0-.4-.02-.6.9-.65 1.68-1.47 2.3-2.4z" /></svg></a>
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 8.5h-2.1v7h-3v-7h-2v-3h2V6.6c0-1.5 1.2-2.6 2.6-2.6h2.4v3h-1.9c-.3 0-.6.3-.6.6V8.5z" clipRule="evenodd" /></svg></a>
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-5h3v5zm-1.5-6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6.5 6.5h-3v-3.25c0-.8-.4-1.25-1-1.25s-1 .45-1 1.25V16h-3v-5h3v1.25c.5-.9 1.5-1.5 2.5-1.5 1.93 0 3.5 1.57 3.5 3.5V16z" /></svg></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">© 2025 BayLabTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
