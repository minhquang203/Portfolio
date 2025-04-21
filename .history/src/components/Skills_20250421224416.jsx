import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML5", level: 90, icon: "🌐" },
        { name: "CSS3/SCSS", level: 85, icon: "🎨" },
        { name: "JavaScript", level: 85, icon: "⚡" },
        { name: "React", level: 80, icon: "⚛️" },
        { name: "Tailwind CSS", level: 85, icon: "🎯" }
      ]
    },
    {
      category: "UI/UX Skills",
      items: [
        { name: "Responsive Design", level: 88, icon: "📱" },
        { name: "Animation", level: 75, icon: "✨" },
        { name: "UI Components", level: 85, icon: "🎪" },
        { name: "Web Design", level: 80, icon: "🎭" }
      ]
    },
    {
      category: "Development Tools",
      items: [
        { name: "Git", level: 80, icon: "🔄" },
        { name: "VS Code", level: 85, icon: "⚙️" },
        { name: "Figma", level: 70, icon: "🎨" },
        { name: "Chrome DevTools", level: 85, icon: "🔍" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-600 flex items-center gap-2">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 flex items-center gap-2">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;