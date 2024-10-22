// src/components/Hero.js
import React from "react";
import HERO from "./HERO.jpg";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Hero = () => {
  // Define animation variants for sliding in
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${HERO})` }}
    >
      <div className="h-full flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl font-bold"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          className="text-xl mt-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Delayed appearance
        >
          I'm a Web Developer
        </motion.p>

        {/* Animated Button */}
        <motion.a
          href="#portfolio"
          className="mt-8 bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:bg-blue-800 hover:scale-105 hover:shadow-lg duration-300 ease-in-out animate-pulse"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // Delayed appearance
        >
          See My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
