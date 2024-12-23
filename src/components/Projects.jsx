import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, technologies, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300"
    >
      <img
        src={image}
        alt={`Imagen del proyecto ${title}`}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver más detalles del proyecto ${title}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Ver proyecto →
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción breve del proyecto 1",
      image: "./public/img/proyecto-1.jpg",
      technologies: ["React", "Tailwind", "firebase"],
      link: "#"
    },
    {
      title: "Proyecto 2",
      description: "Descripción breve del proyecto 2",
      image: "./public/img/proyectos-2.jpg",
      technologies: ["React", "Pocketbase",],
      link: "#"
    },
    {
      title: "Proyecto 3",
      description: "Descripción breve del proyecto 3",
      image: "./public/img/proyecto-3.jpg",
      technologies: ["React", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mis Proyectos</h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/juanolivella1?tab=repositories "
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-blue-700 transition-colors"
          >
            Ver más proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
