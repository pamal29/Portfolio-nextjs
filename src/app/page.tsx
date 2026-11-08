import Navbar from '../components/NavBar'
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}