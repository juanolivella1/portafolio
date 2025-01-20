import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Juan Sebastian </h3>
            <p className="text-gray-400">Desarrollador Web Full Stack</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/juanolivella1?tab=repositories" className="hover:text-black transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://wa.me/573008376494" className="hover:text-green-500 transition-colors">
              <FaWhatsapp  size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Juan Sebastian. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;