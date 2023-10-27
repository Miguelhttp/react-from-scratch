import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageBase from '../pages/PageBase'
import PageError from '../pages/PageError'
import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Contact from '../pages/Contact'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
