import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import './i18n'
import { Toaster } from 'sonner'
import { Suspense, lazy } from 'react'

const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const Contact = lazy(() => import('./sections/Contact'))

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
)

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Toaster position="top-center" richColors />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className='flex-grow'>
          <Suspense fallback={<LoadingFallback />}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
