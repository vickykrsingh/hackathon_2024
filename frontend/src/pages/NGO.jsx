import React from 'react';

const NGO = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome, NGO!</h1>
          <p className="text-xl">View available food donations and collect them for distribution to those in need.</p>
        </div>
      </section>

      {/* Available Donations */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Available Donations</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <h3 className="text-lg font-bold">Surplus Food from Hotel XYZ</h3>
              <p className="text-gray-700">Food Description: 10 meals available</p>
              <p className="text-gray-700">Location: Hotel XYZ, Downtown</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Accept Donation
              </button>
            </div>
            <hr className="my-4" />
            <div className="mb-4">
              <h3 className="text-lg font-bold">Surplus Food from PG ABC</h3>
              <p className="text-gray-700">Food Description: 20 meals available</p>
              <p className="text-gray-700">Location: PG ABC, Midtown</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Accept Donation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Donations */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Your Accepted Donations</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p>No accepted donations yet. Start accepting donations now!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NGO;
