import React from 'react';
import './FeaturedPosts.css';
import PostCard from '../PostCard/PostCard';

const FeaturedPosts = ({ blogs }) => {

  const featuredPosts = blogs.filter(blog => blog.featured).slice(0, 3);

  return (
    <section className="featured-posts">
      <div className="container">
        <h2 className="section-title">Featured Posts</h2>
        <div className="posts-grid">
          {featuredPosts.length > 0 ? (
            featuredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="no-featured">No featured posts available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;