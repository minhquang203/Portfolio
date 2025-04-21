import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {
  const skills = [
    { 
      name: "HTML/CSS", 
      level: "Learning", 
      icon: "📚",
      color: "from-blue-400 to-blue-600"
    },
    { 
      name: "JavaScript", 
      level: "Basic", 
      icon: "🌱",
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      name: "React", 
      level: "Beginning", 
      icon: "⚛️",
      color: "from-cyan-400 to-cyan-600"
    },
    { 
      name: "Tailwind", 
      level: "Learning", 
      icon: "🎨",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Git Basics",
      level: "Learning",
      icon: "📝",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Responsive Design",
      level: "Basic",
      icon: "📱",
      color: "from-green-400 to-green-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          Learning Journey
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`bg-gradient-to-br ${skill.color} p-[2px] rounded-lg`}
            >
              <div className="bg-white p-4 rounded-lg h-full">
                <div className="flex items-center gap-3">
                  <motion.span 
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {skill.icon}
                  </motion.span>
                  <div>
                    <h3 className="font-medium text-gray-800">{skill.name}</h3>
                    <p className="text-sm text-purple-600">{skill.level}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 space-y-2"
        >
          <p className="text-gray-600">
            Currently focusing on frontend development basics 💻
          </p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-500 text-sm"
          >
            Learning and growing every day! 🚀
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;