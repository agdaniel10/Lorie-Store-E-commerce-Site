// src/Components/Footer.jsx
import React from 'react';
import headerImage from './Images/react_header-image.jpeg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="contact-container">
        <div className="contact">
          <i className="fa-solid fa-clock"></i>
          <div className="contact-flex">
            <p>Working Hours</p>
            <p className="blue">Mon - Sat: 10:00 AM - 7:00 PM</p>
          </div>
        </div>

        <div className="contact">
          <i className="fa-solid fa-envelope"></i>
          <div className="contact-flex">
            <p>Email Us</p>
            <p className="blue">taikoxyz@gmail.com</p>
          </div>
        </div>

        <div className="contact">
          <i className="fa-solid fa-location-pin"></i>
          <div className="contact-flex">
            <p>Visit Us</p>
            <p className="blue">Canyon Island MS, USA</p>
          </div>
        </div>

        <div className="contact">
          <i className="fa-solid fa-phone"></i>
          <div className="contact-flex">
            <p>Call Us</p>
            <p className="blue">+234 7048556715</p>
          </div>
        </div>
      </div>

      <div className="footer-categories-list">
        <div className="first-footer-div">
          <div className="foot-head-container">
            <img src={headerImage} alt="Cartella Logo" />
            <h3>LORIE</h3>
          </div>
          <p>Welcome to LORIE</p>
          <p>Your all-in-one destination for smarter, simpler shopping</p>
          <div className="resume-icons">
            <div className="github-class">
              <i className="fa-brands fa-github fa-3x"></i>
            </div>
            <div className="linkedin">
              <i className="fa-brands fa-linkedin fa-3x"></i>
            </div>
            <div className="twitter">
              <i className="fa-brands fa-twitter fa-3x"></i>
            </div>
          </div>
        </div>

        <div className="second-footer-div">
          <h3>Categories</h3>
          <ul>
            <li>Jewelries</li>
            <li>Men's Clothing</li>
            <li>Kids</li>
            <li>Women's Clothing</li>
            <li>Shoes</li>
            <li>Bags</li>
            <li>Caps</li>
          </ul>
        </div>

        <div className="third-footer-div">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/policy">Terms and Policy</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/help">Help</a></li>
          </ul>
        </div>

        <div className="fourth-footer-div">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to receive updates and exclusive offers</p>
          <div className="news-letter">
            <input type="text" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="rights">
        <p>© 2025 <span>Cartella</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;