import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navigation from "./components/Navigation/Navigation"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

export default function App() {
  return (
    <div className="site-shell min-h-screen overflow-x-clip bg-[var(--bg)] transition-[background-color_.28s_ease,color_.28s_ease]">
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
