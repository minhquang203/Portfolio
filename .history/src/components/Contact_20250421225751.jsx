import { motion } from 'framer-motion';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-3xl" />,
      url: 'https://github.com/minhquang203',
      color: 'hover:text-gray-800',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="text-3xl" />,
      url: 'https://www.facebook.com/quang082003/',
      color: 'hover:text-blue-600',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="text-3xl" />,
      url: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-600',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Email',
      icon: <MdEmail className="text-3xl" />,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-purple-600',
      gradient: 'from-purple-500 to-purple-700'
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600">Find me on these platforms</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex flex-col items-center p-4 rounded-lg
                bg-gradient-to-br ${social.gradient}
                transform hover:-translate-y-1 transition-all duration-300
                shadow-md hover:shadow-lg
                group
              `}
            >
              <div className="text-white group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
              <span className="mt-2 text-sm font-medium text-white">
                {social.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <MdLocationOn className="text-xl text-purple-600" />
            <span>Ho Chi Minh City, Vietnam</span>
          </div>
          <p className="text-sm text-gray-500">
            Available for frontend development opportunities
          </p>
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              transition: { duration: 2, repeat: Infinity }
            }}
            className="text-purple-600 font-medium"
          >
            Let's build something amazing together! ✨
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;