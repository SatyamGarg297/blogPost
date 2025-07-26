import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ blog, onDelete }) => {
  return (
    <div className={`blog-card ${blog.status}`}>
      <div className="blog-card-header">
        <h3 className="blog-title">{blog.title}</h3>
        <span className={`blog-status ${blog.status}`}>
          {blog.status}
        </span>
      </div>
      <div className="blog-date">
        {new Date(blog.createdAt).toLocaleDateString()}
      </div>
      <div className="blog-tags">
        {blog.tags.map(tag => (
          <span key={tag} className="blog-tag">{tag}</span>
        ))}
      </div>
      <p className="blog-excerpt">{blog.content || 'No Content available'}</p>
      <div className="blog-card-actions">
        <Link to={`/edit/${blog._id}`} className="edit-button">
          Edit
        </Link>
        <button onClick={() => onDelete(blog._id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;