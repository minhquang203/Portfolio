import { motion } from 'framer-motion';
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  // ...existing code...

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-800'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="text-2xl" />,
      url: 'https://facebook.com/yourusername',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <MdEmail className="text-2xl" />,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* ...existing heading code... */}

        {/* Add this before the form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`text-gray-600 ${social.color} transition-colors duration-300`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* ...existing form code... */}

        {/* Replace the existing email section with this */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-gray-600"
        >
          <p className="text-sm">Feel free to reach out through any platform!</p>
          <motion.div
            className="flex justify-center gap-4 mt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.span
                key={index}
                className="text-sm text-gray-500"
              >
                {social.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;