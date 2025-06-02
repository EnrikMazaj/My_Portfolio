import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
     <h1 className="sectionTitle">Skills</h1>

<h3>Programming Languages</h3>
<div className={styles.skillList}>
  <SkillList skill="HTML" />
  <SkillList skill="CSS" />
  <SkillList skill="JavaScript" />
  <SkillList skill="Typescript" />
  <SkillList skill="Python" />
  <SkillList skill="C, C++" />
</div>
<hr />

<h3>Frameworks and Libraries</h3>
<div className={styles.skillList}>
  <SkillList skill="React.js" />
  <SkillList skill="Node.js" />
  <SkillList skill="Tailwind CSS" />
  <SkillList skill="Express" />
  <SkillList skill="Fastify" />
</div>
<hr/>

<h3>Databases and ORMs</h3>
<div className={styles.skillList}>
  <SkillList skill="MySQL" />
  <SkillList skill="PostgreSQL" />
  <SkillList skill="MongoDB" />
  <SkillList skill="Prisma, Supabase" />
</div>
<hr />

<h3>Tools and Platforms</h3>
<div className={styles.skillList}>
  <SkillList skill="Git Actions" />
  <SkillList skill="Kafka" />
  <SkillList skill="BullMq" />
  <SkillList skill="Docker" />
  <SkillList skill="Slack" />
  <SkillList skill="Trello" />
  <SkillList skill="Swagger" />
  <SkillList skill="Jira" />
</div>


    </section>
  );
}

export default Skills;
