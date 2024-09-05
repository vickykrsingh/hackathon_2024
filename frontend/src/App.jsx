import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginComponent from './pages/Auth/Login'
import RegisterComponent from './pages/Auth/Register'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Donor from './pages/Donar'
import NGO from './pages/NGO'
import About from './pages/About'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<LoginComponent />} path='/login' />
        <Route element={<RegisterComponent />} path='/register' />
        <Route element={<Donor />} path='/donor' />
        <Route element={<NGO />} path='/ngo' />
        <Route element={<About />} path='/about' />
        <Route element={<Contact />} path='/contact' />
      </Routes>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
    </>
  )
}

export default App
