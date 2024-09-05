import React from 'react';

const Donor = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-green-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome, Donor!</h1>
          <p className="text-xl">List your surplus food and help reduce waste by feeding those in need.</p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">List Surplus Food</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Food Description</label>
              <input
                type="text"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                placeholder="Describe the food you want to donate"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Quantity</label>
              <input
                type="number"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                placeholder="Enter quantity"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Pick-Up Location</label>
              <input
                type="text"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                placeholder="Enter your location"
              />
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Submit Donation
            </button>
          </form>
        </div>
      </section>

      {/* Past Donations */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Your Past Donations</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p>No donations yet. Start donating today!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donor;
