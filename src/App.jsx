import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarBackground from './components/StarBackground';
import Chatbot from './components/Chatbot';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen transition-colors duration-300 relative">
        <StarBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Chatbot />
      </div>
    </ErrorBoundary>
  );
}

export default App;
