import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Contact from '../pages/Contact'
import PageError from '../pages/PageError'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
