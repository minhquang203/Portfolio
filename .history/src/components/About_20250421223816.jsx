import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="your-image.jpg" 
              alt="Profile" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-6">
              Your introduction goes here. Write about your background,
              passion for web development, and what drives you.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                Download CV
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;