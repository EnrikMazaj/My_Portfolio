import styles from "../Projects/ProjectsStyle.module.css";
import github from "../../assets/github-light.svg";
import document from "../../assets/document.svg";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={github}
          p={"Interactive Educational Python 2D-Game"}
          h3={"GeoLearner"}
          link={"https://github.com/EnrikMazaj/Interactive-Education-Game"}
        />
        <ProjectCard
          src={document}
          p={"Machine Learning Model for Predicting Football Matches"}
          h3={"Prediction Model"}
          link={"https://polynoe.lib.uniwa.gr/xmlui/handle/11400/7709"}
        />
        <ProjectCard
          src={github}
          p={"React.js + Node.js Ecommerce website (under development)"}
          h3={"Fullstack Website"}
          link={"https://github.com/EnrikMazaj/bus-ecommerce"}
        />
        <ProjectCard
          src={github}
          p={"C++ Packman Terminal Game"}
          h3={"Pacman Game"}
          link={"https://github.com/EnrikMazaj/Packman-terminal-game"}
        />
        <ProjectCard
          src={github}
          p={"React Native Music Player Layout"}
          h3={"Music Player"}
          link={"https://github.com/EnrikMazaj/MusicPlayer"}
        />
        
      </div>
    </section>
  );
}

export default Projects;
