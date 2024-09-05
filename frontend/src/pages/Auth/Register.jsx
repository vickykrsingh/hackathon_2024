import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import{ toast} from 'react-hot-toast';
axios.defaults.withCredentials=true


function RegisterComponent() {
  const Navigate = useNavigate();
  const [register, setregister] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    address: "",
    phone: "",
  });

  function hanndleInput(e) {
    setregister({
      ...register,
      [e.target.name]: e.target.value,
    });
  }
  async function hanndleSubmit(e) {
    e.preventDefault();
    console.log(register);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        register,
        "POST"
      );
      console.log(response.status);
      if (response.status === 200) {
        alert("Successfully Register");
        Navigate("/login");
        setregister("");
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {}
  }

  return (
    <section className="w-full h-[90vh] flex items-center justify-center">
        <section className="w-[400px]">
        <form onSubmit={hanndleSubmit}>
      <div className="flex flex-col bg-gray-800 p-4 rounded-lg">
        <h1 className="font-semibold text-2xl my-4 text-center">Register</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full to-gray-600"
            name="name"
            onChange={hanndleInput}
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full to-gray-600"
            name="email"
            onChange={hanndleInput}
          />
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered w-full to-gray-600"
            name="password"
            onChange={hanndleInput}
          />
          <textarea
            rows={3}
            cols={5}
            type="text"
            className="input input-bordered w-full to-gray-600"
            name="address"
            onChange={hanndleInput}
            placeholder="Enter address"
          />

          <select name="role" onChange={hanndleInput} className="bg-gray-600 text-white py-2 px-2">
            <option>Donator</option>
            <option>NGO</option>
          </select>
          <button className="btn w-full bg-gray-600 text-white py-2">Register</button>
        </div>
      </div>
    </form>
        </section>
    </section>
  );
}

export default RegisterComponent;
