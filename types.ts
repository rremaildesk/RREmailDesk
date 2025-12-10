import type React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  author: string;
  date: string;
  content: string; // Markdown content
}

export interface SEOPageMeta {
  title: string;
  metaDescription: string;
  url: string;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  darkTextColor: string;
  lightTextColor: string;
  softBackgroundColor: string;
  fontFamilySans: string;
  fontFamilyHeading: string;
}