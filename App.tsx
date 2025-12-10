import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { SEO } from './components/SEO';
import { SUPPORT_PHONE_NUMBER, APP_NAME } from './constants';
import { seoPages } from './data/seo';
import { blogPosts } from './data/blogPosts';
import { PageLayout } from './components/PageLayout';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header
          appName={APP_NAME}
          supportPhoneNumber={SUPPORT_PHONE_NUMBER}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<PageLayout><h1 className="text-4xl text-center py-16">404 - Page Not Found</h1></PageLayout>} />
          </Routes>
        </main>
        <Footer
          appName={APP_NAME}
          supportPhoneNumber={SUPPORT_PHONE_NUMBER}
        />
      </div>
    </HashRouter>
  );
};

export default App;