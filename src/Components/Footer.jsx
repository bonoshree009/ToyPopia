import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-600 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
         <a className="btn btn-ghost text-2xl text-blue-400">Toy<span className='text-pink-400'>Popia</span></a>
          <p className="mt-2 text-gray-400">
            A vibrant toy marketplace for kids. Discover, play, and enjoy!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-400">Home</a></li>
            <li><a href="/about" className="hover:text-orange-400">About</a></li>
            <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
            <li><a href="/faq" className="hover:text-orange-400">FAQ</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Policies</h3>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:text-orange-400">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="/return" className="hover:text-orange-400">Return Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Copywrite */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ToyPopia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
