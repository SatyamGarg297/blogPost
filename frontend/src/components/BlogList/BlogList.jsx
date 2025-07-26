import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import "./BlogList.css";
import { deleteBlog, getAllBlogs } from "../../services/blogService";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if(!confirmDelete) return;

    try {
      await deleteBlog (id);
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('Failed to delete blog:', error);
    }
  };

  const publishedBlogs = blogs.filter((blog) => blog.status === "published");
  const draftBlogs = blogs.filter((blog) => blog.status === "draft");

  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">Published Blogs</h2>
      {publishedBlogs.length === 0 ? (
        <p className="no-blogs">No published blogs found.</p>
      ) : (
        <div className="blog-list">
          {publishedBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
          ))}
        </div>
      )}

      <h2 className="blog-list-title">Drafts</h2>
      {draftBlogs.length === 0 ? (
        <p className="no-blogs">No draft blogs found.</p>
      ) : (
        <div className="blog-list">
          {draftBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
