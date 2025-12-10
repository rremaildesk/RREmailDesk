import React from 'react';
import { NavLink } from 'react-router-dom';
import { footerContent } from '../data/content';

interface FooterProps {
  appName: string;
  supportPhoneNumber: string;
}

export const Footer: React.FC<FooterProps> = ({ appName, supportPhoneNumber }) => {
  const mainNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' }, // Placeholder route
    { name: 'Terms of Service', path: '/terms-of-service' }, // Placeholder route
  ];

  return (
    <footer className="bg-primary text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Brand Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-heading font-bold mb-4">{appName}</h3>
          <p className="text-sm leading-relaxed">{footerContent.copyright}</p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {mainNavLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-white hover:text-softBackground transition-colors text-sm"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact and Legal */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-4">Support & Info</h4>
          <p className="mb-2">
            Call Us: <a href={`tel:${supportPhoneNumber}`} className="font-bold text-accent hover:underline">
              {supportPhoneNumber}
            </a>
          </p>
          <p className="text-sm mb-4">{footerContent.tagline}</p>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-white hover:text-softBackground transition-colors text-sm"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};