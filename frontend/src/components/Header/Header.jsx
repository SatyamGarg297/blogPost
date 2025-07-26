import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            BlogEditor
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/blogs" className="nav-link">
              All Blogs
            </Link>
            <Link to="/create" className="nav-link">
              Create Blog
            </Link>
            <Link to="/featured" className="nav-link">
              Featured
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
