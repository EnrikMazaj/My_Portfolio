import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Experience from "./sections/Experience/Experience";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

function App() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      <ScrollProgress />
    </>
  );
}

export default App;
