import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Sobre Mí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Soy un desarrollador apasionado por crear soluciones web innovadoras y 
                experiencias de usuario excepcionales. Con experiencia en tecnologías 
                modernas como React, Node.js y bases de datos.
              </p>
              <p className="text-lg text-gray-600">
                Mi objetivo es combinar diseño y funcionalidad para crear aplicaciones 
                web que no solo se vean bien, sino que también sean intuitivas y 
                eficientes.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src="tu-foto.jpg"
                  alt="Profile"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;