import React, { useState } from "react";
import food from "../assets/food-contact.jpg";
import contactimg from "../assets/contact-1.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from "../components/Footer";

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
    
    // Reset form fields
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
      <section
        className="relative bg-cover pt-24 pb-28 text-center text-white mb-5"
        style={{ backgroundImage: `url(${food})` }}
      >
        <h1 className="text-4xl font-bold">Contact us</h1>
        <nav className="flex justify-center space-x-4 mt-2">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <span className="text-white">/ Contact</span>
        </nav>
      </section>

      {/* Contact Info Section */}
      <section className="py-10 bg-gray-100 mb-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 text-center ms-20 me-20">
          <div className="h-[200px] w-[350px] p-6 bg-white rounded-lg shadow-md flex flex-col justify-center items-center transition transform hover:scale-105 hover:shadow-lg">
            <FaMapMarkerAlt className="text-blue-600 text-3xl mb-2" />
            <h4 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
              Address
            </h4>
            <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
              New Baneshwor, Kathmandu
            </p>
          </div>

          <div className="h-[200px] w-[350px] p-6 bg-white rounded-lg shadow-md flex flex-col justify-center items-center transition transform hover:scale-105 hover:shadow-lg">
            <FaEnvelope className="text-blue-600 text-3xl mb-2" />
            <h4 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
              Email
            </h4>
            <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
              foodlandinfo@gmail.com
            </p>
          </div>

          <div className="h-[200px] w-[350px] p-6 bg-white rounded-lg shadow-md flex flex-col justify-center items-center transition transform hover:scale-105 hover:shadow-lg">
            <FaPhone className="text-blue-600 text-3xl mb-2" />
            <h4 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
              Phone
            </h4>
            <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
              +977-9867463347
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 -mt-[520px]">
          <div className="py-20 ms-20">
            <h2 className="text-3xl font-bold mb-6">Have questions? Get in touch!</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  className="w-full p-3 border rounded"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="service"
                  placeholder="Your Service"
                  className="w-full p-3 border rounded"
                  value={formData.service}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Write message"
                className="w-full p-3 border rounded"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded">
                Submit Now
              </button>
            </form>
          </div>
          <div className="hidden md:block text-right my-10 me-20">
            <img src={contactimg} alt="Contact" className="inline-block" id="imgcontact" />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="-mt-20">
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
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-xl font-semibold">Your message is successfully submitted</h3>
            <button
              onClick={closePopup}
              className="mt-6 bg-blue-600 text-white py-2 px-4 rounded ms-28 me-20"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ContactPage;
