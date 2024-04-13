import './App.css'
import { Routes,Route} from 'react-router-dom'
import Login from "./pages/Login"
import Home from './pages/Home'
import Register from './pages/Register'

function App() {

  return (
   <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Register/>} path='/register'/>
   </Routes>
  )
}

export default App
