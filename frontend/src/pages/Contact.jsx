import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">
            We’d love to hear from you! Whether you're an NGO or donor, feel free to get in touch.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Map Placeholder"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
