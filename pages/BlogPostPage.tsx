import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { PageLayout } from '../components/PageLayout';
import { CallToAction } from '../components/CallToAction';
import { SUPPORT_PHONE_NUMBER } from '../constants';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <SEO title="Blog Post Not Found" description="The requested blog post could not be found." />
        <h1 className="text-3xl font-heading font-bold text-center text-red-600">Blog Post Not Found</h1>
        <p className="text-center text-lightText mt-4">
          Sorry, the article you are looking for does not exist.
        </p>
        <div className="text-center mt-6">
          <Link to="/blog" className="text-primary hover:underline inline-flex items-center">
            <ArrowLeftIcon className="h-4 w-4 mr-2" /> Back to Blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  const currentUrl = window.location.href; // Get the current full URL for sharing

  return (
    <PageLayout className="max-w-4xl">
      <SEO title={post.title} description={post.metaDescription} />

      <article className="bg-white rounded-lg shadow-md p-6 md:p-10">
        <div className="mb-8">
          <img src={post.imageUrl} alt={post.imageAlt} className="w-full h-64 md:h-80 object-cover rounded-lg mb-6" />
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center text-sm text-lightText mb-4">
            <span className="mr-3">By {post.author}</span>
            <span className="mr-3">|</span>
            <span className="mr-3">{post.date}</span>
            <span className="mr-3">|</span>
            <span className="bg-softBackground text-darkText px-2 py-1 rounded-full text-xs font-medium">{post.category}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-10 text-darkText">
          {/* Using dangerouslySetInnerHTML to render HTML content from Markdown */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center bg-softBackground p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-darkText font-semibold">Share this article:</span>
            <FacebookShareButton url={currentUrl} quote={post.title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={currentUrl} title={post.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={currentUrl} title={post.title} summary={post.metaDescription}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <CallToAction phoneNumber={SUPPORT_PHONE_NUMBER} buttonText="Need Direct Help? Call Us!" />
        </div>
      </article>

      <div className="mt-8 text-center">
        <Link to="/blog" className="text-primary hover:underline inline-flex items-center font-medium">
          <ArrowLeftIcon className="h-5 w-5 mr-2" /> Back to All Articles
        </Link>
      </div>
    </PageLayout>
  );
};