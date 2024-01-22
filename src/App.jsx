import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App