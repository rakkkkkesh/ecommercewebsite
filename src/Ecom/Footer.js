import React from 'react';
import './Style/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Company</h2>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">Customer Service</h2>
          <ul className="footer-links">
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-media-icons">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </Link>

            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

          <div className="footer-section">
            <h2 className="footer-title">Contact Us</h2>
            <div>
              <p className="footer-contact">Email: support@example.com</p>
              <p className="footer-contact">Phone: 1-800-123-4567</p>
              <p className="footer-contact">Address: 1234 E-commerce St, Shop City, EC 12345</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Made With💖. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;