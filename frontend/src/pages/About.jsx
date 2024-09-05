import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Our mission is to reduce food waste by connecting organizations with surplus food to NGOs that distribute it to those in need. Together, we are helping fight hunger and making a difference.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              To bridge the gap between food surplus and those in need by creating a platform that facilitates easy food donations from organizations, hotels, and more to NGOs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>
              A world where no food is wasted, and every meal is distributed to those who need it most. Our goal is to reduce global food waste and contribute towards a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (Interactive) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-700">Head of Operations</p>
            </div>
            {/* Team Member 3 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Mark Johnson</h3>
              <p className="text-gray-700">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section (Statistics) */}
      <section className="py-12 bg-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-4xl font-bold">10,000+</h3>
              <p>Meals Donated</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p>NGOs Registered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">200+</h3>
              <p>Organizations Donating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
