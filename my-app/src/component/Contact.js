// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input
            className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
