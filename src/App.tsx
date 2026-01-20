import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import './App.css'
import './i18n'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className='flex-grow'>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
