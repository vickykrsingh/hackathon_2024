import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'
axios.defaults.withCredentials=true
function LoginComponent() {
    // email, password
    const Navigate = useNavigate()
    const [login, setlogin] = useState({ email: '', password: '' })
    function handleInput(e) {
        setlogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(login)
        try {
            const response = await axios.post('http://localhost:8000/api/v1/auth/login', login, "POST")
            console.log(response)
            if (response.status === 200) {
                // toast.success(response.data.message)
                setlogin('')
                Navigate('/')
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {

        }
    }
    return (



        <div className="flex p-4 rounded-lg w-full h-[90vh] items-center justify-center">
            <form onSubmit={handleSubmit} className="w-[400px] bg-gray-600 px-10 py-10 text-gray-600" >
                <h1 className="font-semibold text-2xl my-4 text-center text-white">
                    Login
                </h1>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered w-full text-gray-600"
                        name="email"
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        className="input input-bordered w-full to-gray-600"
                        name="password"
                        onChange={handleInput}
                    />
                    <div className="w-full text-right underline cursor-pointer text-white">
                        Forget Password
                    </div>
                    <Link to={"/register"}>
                        <div className="w-full text-right underline cursor-pointer text-white">
                            Not Registered? Click here to Register
                        </div>
                    </Link>
                    <button className="bg-gray-400 w-full py-2">Login</button>
                </div>
                <div className="divider align-self-center w-full text-center text-white font-semibold my-2">
                    OR
                </div>
                <div className="flex flex-col gap-2">
                    <button className="bg-gray-400 w-full py-2">Google</button>
                </div>
            </form>
        </div>

    );
}

export default LoginComponent;
8