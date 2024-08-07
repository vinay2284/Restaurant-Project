import './App.css'
import { Home } from './pages/Home'
import {About} from "./pages/About"
import { Menu } from './pages/Menu'
import {Contact} from "./pages/Contact"
import {Login} from "./pages/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Register } from './pages/Register'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
