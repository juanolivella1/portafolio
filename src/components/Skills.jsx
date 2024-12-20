import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, icon, level }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { title: "React", icon: "⚛️", level: 90 },
    { title: "JavaScript", icon: "📜", level: 85 },
    { title: "Node.js", icon: "🟢", level: 80 },
    { title: "HTML/CSS", icon: "🎨", level: 95 },
    { title: "TypeScript", icon: "📘", level: 75 },
    { title: "Git", icon: "📦", level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Habilidades</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;