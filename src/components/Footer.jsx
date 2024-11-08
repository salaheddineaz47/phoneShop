import React, { Component } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6 lg:flex lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold">phoneShop</h2>
            <p className="text-sm mt-2">Your favorite e-commerce store</p>
          </div>

          <div className="mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 mt-4">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-gray-400">
                  Cart
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-400">
          <p>Made with ❤️ by Salah Eddine</p>
        </div>

        <div className="text-center mt-8 text-sm">
          <p>&copy; 2024 phoneShop, All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
