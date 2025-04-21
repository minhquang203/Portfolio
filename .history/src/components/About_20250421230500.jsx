import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="md:flex items-center gap-12"
        >
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative group">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="rounded-lg shadow-lg w-full relative z-10 transition-transform duration-300 group-hover:transform group-hover:translate-x-2 group-hover:translate-y-2"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg transform translate-x-2 translate-y-2 -z-0"></div>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 space-y-6"
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl font-semibold text-gray-800"
                variants={fadeInUp}
              >
                Frontend Developer in Training
              </motion.h3>
              
              <motion.p 
                className="text-gray-600"
                variants={fadeInUp}
              >
                Hello! I'm Minh Quang, a passionate learner diving into the world of web development. 
                Currently focusing on mastering frontend technologies including React, JavaScript, and 
                modern CSS frameworks like Tailwind.
              </motion.p>

              <motion.p 
                className="text-gray-600"
                variants={fadeInUp}
              >
                My journey in web development started with curiosity and has grown into a dedicated 
                pursuit of creating engaging user experiences through code.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={fadeInUp}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full transition duration-300"
              >
                <span className="flex items-center gap-2">
                  Download CV
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full transition duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;