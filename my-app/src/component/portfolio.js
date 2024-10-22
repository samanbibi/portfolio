// src/components/Portfolio.js
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Cloth from './cloth.jpg';
import services from './SERVICES.jpg';
import food from './FOOD.jpg';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'E-commerce Website', img: Cloth },
    { id: 2, title: 'Food Website', img: food },
    { id: 3, title: 'Services Agency Website', img: services },
  ];

  // Animation variants for the section and project items
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      id="portfolio"
      className="py-12 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105" // Added hover effect
              initial="hidden"
              animate="visible"
              variants={projectVariants}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
