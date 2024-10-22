import styles from "../Projects/ProjectsStyle.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from '../../assets/fresh-burger.png'
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          p={"Streaming App"}
          h3={"Viberr"}
          link={"https://github.com/EnrikMazaj/MusicPlayer"}
        />
        <ProjectCard
          src={freshBurger}
          p={"Burgering"}
          h3={"Burgerrrrr"}
          link={"https://github.com/EnrikMazaj/MusicPlayer"}
        />
      </div>
    </section>
  );
}

export default Projects;
