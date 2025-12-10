import React from 'react';
import { NavLink } from 'react-router-dom';
import { CallToAction } from './CallToAction';
import { HomeIcon, InformationCircleIcon, BriefcaseIcon, BookOpenIcon, PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Using Heroicons for a modern look

interface HeaderProps {
  appName: string;
  supportPhoneNumber: string;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ appName, supportPhoneNumber, isMobileMenuOpen, toggleMobileMenu }) => {
  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon className="h-5 w-5 mr-2" /> },
    { name: 'About Us', path: '/about-us', icon: <InformationCircleIcon className="h-5 w-5 mr-2" /> },
    { name: 'Services', path: '/services', icon: <BriefcaseIcon className="h-5 w-5 mr-2" /> },
    { name: 'Blog', path: '/blog', icon: <BookOpenIcon className="h-5 w-5 mr-2" /> },
    { name: 'Contact', path: '/contact', icon: <PhoneIcon className="h-5 w-5 mr-2" /> },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="text-xl md:text-2xl font-heading font-bold text-primary hover:text-blue-700 transition-colors">
            {appName}
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-darkText hover:text-primary font-medium flex items-center transition-colors 
                ${isActive ? 'text-primary border-b-2 border-primary pb-1' : ''}`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
          <CallToAction phoneNumber={supportPhoneNumber} buttonText="Call Now" />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <CallToAction phoneNumber={supportPhoneNumber} buttonText="Call" size="small" />
          <button onClick={toggleMobileMenu} className="ml-4 text-darkText hover:text-primary focus:outline-none">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4 pt-2">
          <nav className="flex flex-col items-start px-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={toggleMobileMenu} // Close menu on click
                className={({ isActive }) =>
                  `w-full py-2 px-3 text-lg text-darkText hover:bg-softBackground hover:text-primary rounded-md flex items-center transition-colors 
                  ${isActive ? 'bg-softBackground text-primary font-semibold' : ''}`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};