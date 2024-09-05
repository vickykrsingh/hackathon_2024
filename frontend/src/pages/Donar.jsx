import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
const Donor = () => {
    const [data, setData] = useState({
        description: "",
        quantity: "",
        location: "",
    });
    const [donations, setDonations] = useState([]); // State to store past donations


    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/v1/food/create', data, {
                withCredentials: true
            });
            if(response.data.success){
                toast.success(response.data.message)
                setData({
                    description:"",
                    location:"",
                    quantity:""
                })
            }
        } catch (error) {
            toast.error("something went wrong")
        }
    };
    // Fetch past donations when the component loads
    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const response = await axios.post('http://localhost:8000/api/v1/food/fetch');
                if (response.data.success) {
                    setDonations(response.data.food); // Assuming the API returns 'food' array
                }
            } catch (error) {
                toast.error('Failed to fetch donations');
            }
        };

        fetchDonations();
    }, []);

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
                    <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Food Description</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Describe the food you want to donate"
                                name='description'
                                onChange={handleChange}
                                value={data.description}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Quantity</label>
                            <input
                                type="number"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter quantity"
                                name='quantity'
                                onChange={handleChange}
                                value={data.quantity}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Pick-Up Location</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your location"
                                name='location'
                                onChange={handleChange}
                                value={data.location}
                            />
                        </div>
                        <button type='submit' className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
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
                        {donations?.length === 0 || !donations ? (
                            <p>No donations yet. Start donating today!</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {donations.map((donation) => (
                                    <div key={donation._id} className="bg-white p-4 rounded-lg shadow-md">
                                        <h3 className="text-lg font-bold">{donation.foodName}</h3>
                                        <p>Quantity: {donation.quantity}</p>
                                        <p>Location: {donation.location}</p>
                                        {donation.foodImage && (
                                            <img
                                                src={donation.foodImage.secure_url}
                                                alt={donation.foodName}
                                                className="w-full h-40 object-cover mt-2 rounded-lg"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donor;
