import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/foodland-seeklogo.png";
import shape1 from "../assets/shape-2.png";
import shape2 from "../assets/shape-3.png";
import shape3 from "../assets/shape-4.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Background Shapes */}
      <div className="footer-shapes">
        <img src= {shape1} alt="shape" className="shape shape-one" />
        <img src= {shape2} alt="shape" className="shape shape-two" />
        <img src= {shape3} alt="shape" className="shape shape-three" />
      </div>

      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src= {logo} alt="Brand Logo" />
          </div>
          <p>
            Discover culinary delights, recipes, and inspiration in our delightful food haven.
          </p>
          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-names">
            <li>New Baneshwor, Kathmandu</li>
            <li><a href="mailto:santoshchettri216@gmail.com">Foodland79@ordernow.com</a></li>
            <li><a href="tel:+977-9864926196">+977-9864926196</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section-2">
          <h4>Quick Links</h4>
          <ul>
           <li>
                    <NavLink 
                      to="/" 
                      className={({ isActive }) => isActive ? "active" : ""}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/menu" 
                      className={({ isActive }) => isActive ? "active" : ""}
                    >
                      Menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/recipe" 
                      className={({ isActive }) => isActive ? "active" : ""}
                    >
                      Recipe
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/contact" 
                      className={({ isActive }) => isActive ? "active" : ""}
                    >
                      Contact
                    </NavLink>
                  </li>
          </ul>
        </div>

        {/* Opening Hours Section */}
        <div className="footer-section">
          <h4 className="ms-9">Opening Hours</h4>
          <ul>
            <li>Monday: <span>10:00 AM - 5:00 PM</span></li>
            <li>Tuesday: <span>10:20 AM - 5:30 PM</span></li>
            {/* <li>Wednesday: <span>10:30 AM - 5:50 PM</span></li> */}
            <li>Thursday: <span>11:00 AM - 7:10 PM</span></li>
            <li>Friday: <span className="closed">Closed</span></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Foodland All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
