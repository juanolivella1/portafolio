import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hola, soy <span className="text-blue-600">Juan Sebastian</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Desarrollador Web Full Stack
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/573008376494"
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contáctame
              </a>
              
            </motion.div>
          </motion.div>
           
          <motion.div // circulo de la imagen
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-30"></div>
              <img //  imagen
                src="img/Picture.png" 
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;