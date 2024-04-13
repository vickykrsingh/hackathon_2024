import './App.css'
import { Routes,Route} from 'react-router-dom'
import Login from "./pages/Login"
import Home from './pages/Home'

function App() {

  return (
   <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
   </Routes>
  )
}

export default App
