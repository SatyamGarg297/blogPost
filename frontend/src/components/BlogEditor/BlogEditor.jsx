import React, { useState, useEffect } from "react";
import "./BlogEditor.css";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlogById,
  publishBlog,
  saveDraft,
} from "../../services/blogService";

const BlogEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("draft");
  const [blog, setBlog] = useState(null);
  const [blogId, setBlogId] = useState(id);

  useEffect(() => {
    if (!id) return; // Don’t fetch blog if no ID present (i.e., new blog)
    const fetchBlog = async () => {
      try {
        const blog = await getBlogById(id);
        setBlog(blog);
        setTitle(blog.title);
        setContent(blog.content);
        setTags(blog.tags.join(", "));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        toast.error("Failed to load blog");
      }
    };

    fetchBlog();
  }, [id]);

  const formattedTags = tags
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = {
      id: blogId,
      title: title.trim(),
      content: content.trim(),
      tags: formattedTags,
      status,
    };

    try {
      const actionMap = {
        draft: saveDraft,
        published: publishBlog,
      };

      const action = actionMap[status];

      const result = await action(blogData);

      if (result?._id && !blogId) {
        setBlogId(result._id);
        setBlog(result);
      }

      toast.success(`Blog ${status} successfully.`);
      navigate("/blogs"); // redirect to blog list page
    } catch (error) {
      console.error("saving error:", error);
      toast.error(`Failed to save ${status}.`);
    }
  };

  return (
    <div className="blog-editor-container">
      <h2 className="editor-title">{blog ? "Edit Blog" : "Create New Blog"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title*</label>
          <input
            name="title"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              name="tags"
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="comma, separated, tags"
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="content">Content*</label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here..."
            rows="10"
            required
          />
        </div>

        <div className="editor-actions">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="cancel-button"
          >
            Cancel
          </button>
          <button type="submit" className="save-button">
            {blog ? "Update" : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogEditor;
