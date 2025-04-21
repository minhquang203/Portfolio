import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 md:pt-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-purple-600">Minh Quang</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Web Developer & Designer
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;