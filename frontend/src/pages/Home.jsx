import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to the Food Donation Platform
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Helping organizations donate surplus food to those in need.
          </p>
          <div className="flex space-x-4">
            <a
              href="/register"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Become a Donor
            </a>
            <a
              href="/register"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Join as NGO
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Real-Time Notifications</h3>
              <p>
                NGOs receive instant alerts from donors when surplus food is available for collection.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Seamless Donations</h3>
              <p>
                Donors can easily list surplus food, and the platform matches them with nearby NGOs.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Secure Authentication</h3>
              <p>
                Secure login for both NGOs and donors, ensuring a safe and reliable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Saving Food</h2>
          <p className="mb-8">
            Together, we can reduce food waste and ensure surplus food reaches those in need.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/donor"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Become a Donor
            </a>
            <a
              href="/ngo"
              className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Join as NGO
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Food Donation Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
