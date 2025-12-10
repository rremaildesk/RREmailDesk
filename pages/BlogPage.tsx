import React from 'react';
import { SEO } from '../components/SEO';
import { seoPages } from '../data/seo';
import { blogPosts } from '../data/blogPosts';
import { BlogPostCard } from '../components/BlogPostCard';
import { PageLayout } from '../components/PageLayout';

export const BlogPage: React.FC = () => {
  const seo = seoPages.blog;

  return (
    <PageLayout>
      <SEO title={seo.title} description={seo.metaDescription} />

      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 text-center">
        Roadrunner Email Help Articles
      </h1>
      <p className="text-lg md:text-xl text-lightText mb-12 text-center max-w-3xl mx-auto">
        Find step-by-step guides, troubleshooting tips, and expert advice for common Roadrunner email issues.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </PageLayout>
  );
};