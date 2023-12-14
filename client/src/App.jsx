import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import About from './pages/About'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up'element={<Signup />}/>
    <Route path='/about'element={<About />}/>
    <Route path='/profile'element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
}
