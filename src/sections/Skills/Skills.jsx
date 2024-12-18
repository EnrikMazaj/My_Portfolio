import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
     <h1 className="sectionTitle">Skills</h1>

<h3>Programming Languages</h3>
<div className={styles.skillList}>
  <SkillList src={checkMarkIcon} skill="HTML" />
  <SkillList src={checkMarkIcon} skill="CSS" />
  <SkillList src={checkMarkIcon} skill="JavaScript" />
  <SkillList src={checkMarkIcon} skill="Python" />
  <SkillList src={checkMarkIcon} skill="C, C++" />
</div>
<hr />

<h3>Frameworks and Libraries</h3>
<div className={styles.skillList}>
  <SkillList src={checkMarkIcon} skill="React.js" />
  <SkillList src={checkMarkIcon} skill="Node.js" />
  <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
</div>
<hr/>

<h3>Cloud and Deployment</h3>
<div className={styles.skillList}>
  <SkillList src={checkMarkIcon} skill="Azure" />
  <SkillList src={checkMarkIcon} skill="Google Colab" />
  <SkillList src={checkMarkIcon} skill="Vercel" />
</div>
<hr />

<h3>Databases and ORMs</h3>
<div className={styles.skillList}>
  <SkillList src={checkMarkIcon} skill="MySQL" />
  <SkillList src={checkMarkIcon} skill="PostgreSQL" />
  <SkillList src={checkMarkIcon} skill="Prisma, Supabase" />
</div>
<hr />

<h3>Tools and Platforms</h3>
<div className={styles.skillList}>
  <SkillList src={checkMarkIcon} skill="Git" />
  <SkillList src={checkMarkIcon} skill="Slack" />
  <SkillList src={checkMarkIcon} skill="Trello" />
  <SkillList src={checkMarkIcon} skill="Swagger" />
</div>


    </section>
  );
}

export default Skills;
