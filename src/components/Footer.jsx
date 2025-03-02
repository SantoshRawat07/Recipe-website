import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Foodland Logo" className="w-16 h-16" />
          <span className="text-2xl font-semibold">Foodland</span>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-6 mt-6 md:mt-0 text-gray-300">
          <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Recipes</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © 2025 Foodland. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
