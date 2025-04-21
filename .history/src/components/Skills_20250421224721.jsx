import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {
  const skills = [
    { 
      name: "HTML/CSS", 
      level: "Learning", 
      icon: "📚"
    },
    { 
      name: "JavaScript", 
      level: "Basic", 
      icon: "🌱"
    },
    { 
      name: "React", 
      level: "Beginning", 
      icon: "⚛️"
    },
    { 
      name: "Tailwind", 
      level: "Learning", 
      icon: "🎨"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Learning Journey
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-4 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <h3 className="font-medium text-gray-800">{skill.name}</h3>
                  <p className="text-sm text-purple-600">{skill.level}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-gray-600 text-sm"
        >
          Currently focusing on frontend development basics 💻
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;