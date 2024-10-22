// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import MyPicture from './girl.jpg'; // Update the path to your image

const About = () => {
  // Animation variants for the entire section, image, and text
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      className="py-12 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:max-w-5xl">
          {/* Animated Image */}
          <motion.div
            className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-8"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img
              src={MyPicture}
              alt="My Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex-1"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Hi there! I’m a passionate web developer with a knack for building <strong>dynamic</strong> and <strong>responsive</strong> web applications. My journey started with a love for creating and design, which has led me to master essential skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              I thrive on creating beautiful and functional user interfaces while ensuring optimal performance. I believe that a seamless user experience is key to a successful application.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              I’m always eager to learn new technologies and improve my skill set. Let’s build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
