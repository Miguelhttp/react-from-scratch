import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Contact from '../pages/Contact'
import PageError from '../pages/PageError'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
