
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaglineMarquee from './components/common/TaglineMarquee.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import FreeDemo from './pages/FreeDemo.jsx'
import ResearchSupport from './pages/ResearchSupport.jsx'

import Blog from './pages/Blog.jsx'

import Contact from "./pages/Contact";
import Programme30Day from './pages/Programme30Day.jsx'



import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import CustomCursor from './components/common/CustomCursor.jsx'

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <TaglineMarquee />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/free-demo" element={<FreeDemo />} />
        <Route path="/research-support" element={<ResearchSupport />} />
        
        <Route path="/blog" element={<Blog />} />
        
        <Route path="/30-day-programme" element={<Programme30Day />}/>
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
