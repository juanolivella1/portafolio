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
              ¡Hola! Soy Juan Sebastián, un desarrollador de software apasionado con experiencia en JavaScript y React. Me encanta crear aplicaciones dinámicas y funcionales que resuelvan problemas reales.
              </p>
              <p className="text-lg text-gray-600">
                Mi objetivo es combinar diseño y funcionalidad para crear aplicaciones 
                web que no solo se vean bien, sino que también sean intuitivas y 
                eficientes.
              </p>
              <h1 className="text-4xl font-bold text-center mb-12"> ¿Qué me motiva?</h1>
              <p className="text-lg text-gray-600" > La tecnología es un puente entre las ideas y las soluciones. Siempre estoy en busca de nuevos desafíos que me permitan aprender y aportar a proyectos significativos.¡Trabajemos juntos! </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-4">
                <img
                  src="img/Picture.png"
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