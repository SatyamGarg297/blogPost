import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-image">
        <img src={post.image || 'https://via.placeholder.com/400x250'} alt={post.title} />
        <span className="post-category">{post.category || 'General'}</span>
      </div>
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-excerpt">{post.excerpt || 'No excerpt available'}</p>
        <div className="post-meta">
          <span className="post-date">{new Date(post.createdAt).toLocaleDateString()}</span>
          {/* <Link to={`/blogs/${post.id}`} className="read-more">Read More</Link> */}
          <Link to="/" className="read-more">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;