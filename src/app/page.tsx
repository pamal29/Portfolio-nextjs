import Navbar from '../components/NavBar'
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Certifications from '../components/Certifications';
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}