import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {
  const skills = [
    { 
      name: "HTML/CSS", 
      level: 90, 
      icon: "🎨"
    },
    { 
      name: "JavaScript", 
      level: 85, 
      icon: "⚡"
    },
    { 
      name: "React", 
      level: 80, 
      icon: "⚛️"
    },
    { 
      name: "Tailwind CSS", 
      level: 85, 
      icon: "🎯"
    },
    { 
      name: "UI Design", 
      level: 75, 
      icon: "✨"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="flex items-center gap-2 text-lg">
                  <span>{skill.icon}</span>
                  {skill.name}
                </span>
                <span className="text-purple-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8 }}
                  className="bg-purple-600 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;