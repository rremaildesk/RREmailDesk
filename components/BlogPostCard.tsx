import React from 'react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <Link to={`/blog/${post.slug}`}>
        <img
          src={post.imageUrl}
          alt={post.imageAlt}
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm text-lightText mb-2">{post.category}</span>
        <Link to={`/blog/${post.slug}`} className="hover:underline">
          <h3 className="text-xl font-heading font-semibold text-primary mb-3 leading-tight flex-grow">
            {post.title}
          </h3>
        </Link>
        <div className="flex items-center text-sm text-lightText mt-auto pt-4 border-t border-softBackground">
          <span className="mr-3">By {post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
};