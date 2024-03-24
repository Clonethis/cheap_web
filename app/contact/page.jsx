'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can add the logic to send the form data to a server or an email service

    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full py-12 lg:py-24">
      <div className="container px-4 flex flex-col gap-8 md:gap-12 text-center">

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
    
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
    </div>

  );
};

export default ContactForm;
