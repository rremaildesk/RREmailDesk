import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', description);

    // Clean up on unmount (optional, but good practice for SPAs if titles might overlap)
    return () => {
      // You might reset to a default title or remove meta tags if needed
      // For this app, simply ensuring the next page's SEO component overrides it is sufficient.
    };
  }, [title, description]);

  return null; // This component doesn't render anything visible
};