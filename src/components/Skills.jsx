import React from 'react';
import { motion } from 'framer-motion';
import { 
  Blocks, 
  FileJson, 
  Palette, 
  Code2, 
  PaintBucket 
} from 'lucide-react';

const skillsData = [
  {
    name: 'React',
    icon: <Blocks className="w-10 h-10" />,
    color: '#61DAFB',
    description: 'Biblioteca JavaScript para interfaces de usuario'
  },
  {
    name: 'JavaScript',
    icon: <FileJson className="w-10 h-10" />,
    color: '#F7DF1E',
    description: 'Lenguaje de programación web'
  },
  {
    name: 'Tailwind',
    icon: <Palette className="w-10 h-10" />,
    color: '#38B2AC',
    description: 'Framework CSS utilitario'
  },
  {
    name: 'HTML',
    icon: <Code2 className="w-10 h-10" />,
    color: '#E34F26',
    description: 'Lenguaje de marcado web'
  },
  {
    name: 'CSS',
    icon: <PaintBucket className="w-10 h-10" />,
    color: '#264DE4',
    description: 'Estilos y diseño web'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 text-gray-800"
        >
          Habilidades Técnicas
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <div style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold mb-1"
                    style={{ color: skill.color }}
                  >
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;