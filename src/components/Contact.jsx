import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file
import food from "../assets/food-contact.jpg";
import contactimg from "../assets/contact-1.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from "../components/Footer";
import Playstore from "./Playstore";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      service: "",
      message: "",
    });
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Page Banner */}
      <section className="banner">
        <h1>Contact Us</h1>
        <nav>
          <a href="/">Home</a> <span>/ Contact</span>
        </nav>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="info-container">
          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <h4>Address</h4>
            <p>New Baneshwor, Kathmandu</p>
          </div>

          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <h4>Email</h4>
            <p>foodlandinfo@gmail.com</p>
          </div>

          <div className="info-box">
            <FaPhone className="info-icon" />
            <h4>Phone</h4>
            <p>+977-9867463347</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section lg:ms-40 me-12 md:ms-[40px]">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Have questions? Get in touch!</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="input-group mt-3">
                <input type="text" name="subject" placeholder="Your Subject" value={formData.subject} onChange={handleChange} required />
                <input type="text" name="service" placeholder="Your Service" value={formData.service} onChange={handleChange} required />
              </div>
              <textarea className="mt-3" name="message" placeholder="Write message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              <button className="pop" type="submit">Submit Now</button>
            </form>
          </div>

          <div className="contact-image">
            <img src={contactimg} alt="Contact" />
          </div>
        </div>
      </section>
      <Playstore/>

      {/* Map Section */}
      <section className="mt-4">
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.924591127006!2d85.32951859659794!3d27.694703218571817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2z4KSo4KSv4KS-4KSBIOCkrOCkvuCkqOClh-CktuCljeCkteCksCwg4KSV4KS-4KSg4KSu4KS-4KSh4KWM4KSBIDQ0NjAw!5e0!3m2!1sne!2snp!4v1740996251448!5m2!1sne!2snp"
          width="600"
          height="450"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </section>

      {/* Popup Modal */}
      {isSubmitted && (
        <div className="popup">
          <div className="popup-content">
            <h3>Your message is successfully submitted</h3>
            <button className="button" onClick={closePopup}>OK</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ContactPage;
