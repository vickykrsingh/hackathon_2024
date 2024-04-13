import { Toaster } from 'react-hot-toast'
import LoginComponent from '../Components/Login'
function Login() {
  return (
    <div className='w-full min-h-screen bg-gray-400 flex items-center justify-center'>
    <LoginComponent/>
    <Toaster/>
    </div>
  )
}

export default Login