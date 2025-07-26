import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h4>About BlogEditor</h4>
            <p>A modern platform for writers to create and publish their blogs with ease.</p>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/blogs">All Blogs</a></li>
              <li><a href="/create">Create Blog</a></li>
              <li><a href="/featured">Featured</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><i className="fas fa-map-marker-alt"></i> 123 Blog Street, Writer's City</p>
            <p><i className="fas fa-phone"></i> +1 234 567 890</p>
            <p><i className="fas fa-envelope"></i> contact@blogeditor.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BlogEditor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;