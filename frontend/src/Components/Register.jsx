import React, { useEffect, useState } from "react";
import axiox from "axios";
import { useNavigate } from "react-router-dom";
import{ toast} from 'react-hot-toast';

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
      const response = await axiox.post(
        "http://localhost:3000/api/v1/auth/register",
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
    <form onSubmit={hanndleSubmit}>
      <div className="flex flex-col bg-gray-800 p-4 rounded-lg">
        <h1 className="font-semibold text-2xl my-4 text-center">Register</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            name="name"
            onChange={hanndleInput}
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full"
            name="email"
            onChange={hanndleInput}
          />
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered w-full"
            name="password"
            onChange={hanndleInput}
          />
          <input
            type="text"
            className="input input-bordered w-full"
            name="phone"
            onChange={hanndleInput}
          />
          <textarea
            rows={5}
            cols={5}
            type="text"
            className="input input-bordered w-full"
            name="address"
            onChange={hanndleInput}
          />

          <select name="role" onChange={hanndleInput}>
            <option>Donator</option>
            <option>NGO</option>
          </select>
          <button className="btn w-full">Register</button>
        </div>
        <div className="divider">OR</div>
        <div className="flex flex-col gap-2">
          <button className="btn">Google</button>
          <button className="btn">Github</button>
        </div>
      </div>
    </form>
  );
}

export default RegisterComponent;
