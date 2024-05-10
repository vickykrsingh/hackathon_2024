"use server"
import axios from "axios";

const handleOnSubmit = async (name:string,email:string,password:string,phone:string,address:string) => {
    

    const res = await axios.post('http://localhost:5173/api/v1/auth/register',{
      name,
      email,
      password,
      phone,
      address
    })
    
    return res.data;

  }

  const handleLogin = async (email:string,password:string) => {
    const res = await axios.post('http://localhost:5173/api/v1/auth/login',{
      email,
      password
    })
    console.log(res.data);
    return res.data;
  }
export {
    handleOnSubmit,
    handleLogin
}