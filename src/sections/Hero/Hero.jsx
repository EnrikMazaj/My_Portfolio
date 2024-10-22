import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from '../../assets/instagram-dark.svg'
import githubLight from "../../assets/github-light.svg";
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Enrik_CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme==='light'? sun:moon;
  const instagramIcon = theme==='light'? instagramLight:instagramDark;
  const githubIcon = theme==='light'? githubLight:githubDark;
  const linkedinIcon = theme==='light'? linkedinLight:linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />

        <img
          src={themeIcon}
          alt="color mode icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Enrik <br></br>
          Mazaj
        </h1>
        <h2>- FullStack Software Engineer  <br></br>- Data Scientist</h2>
        <span>
          <a href="https://www.instagram.com/enrik_mazaj/" target="_blank">
            <img src={instagramIcon} alt="instagram Icon" />
          </a>
          <a href="https://github.com/EnrikMazaj" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/enrik-mazaj/" target="_blank">
            <img src={linkedinIcon} alt="linkedin Icon" />
          </a>
        </span>
        <p className="description">Welcome to my Portfolio - Website! Explore my <strong><a href="#projects">projects</a></strong>, <strong><a href="#skills">skills</a></strong>, and experiences that define my professional journey. If you’d like to connect or have any questions, please use the <strong><a href="#contact">contact form</a></strong> at the bottom of the page!</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
