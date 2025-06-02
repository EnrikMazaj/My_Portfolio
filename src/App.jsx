import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Experience from "./sections/Experience/Experience";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

function App() {
  const floatingElements = [
    "React", "JavaScript", "Python", "CSS", "HTML", 
    "Node.js", "MongoDB", "Git", "API", "JSON",
    "{ }", "< />", "console.log()", "=>", "useState()"
  ];

  return (
    <>
      <div className="floating-elements">
        {floatingElements.map((element, index) => (
          <div key={index} className="floating-element">
            {element}
          </div>
        ))}
      </div>
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
