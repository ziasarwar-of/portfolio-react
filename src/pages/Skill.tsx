import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <section className="page">
      <h2 className="section-title">Skills</h2>

      <div className="section-line"></div>

      <div className="skills-grid">
        <SkillCard
          icon="https://www.svgrepo.com/show/508837/html5-01.svg"
          title="HTML"
        />

        <SkillCard
          icon="https://www.svgrepo.com/show/372994/css3.svg"
          title="CSS"
        />

        <SkillCard
          icon="https://www.svgrepo.com/show/443364/brand-react.svg"
          title="React"
        />

        <SkillCard
          icon="https://www.svgrepo.com/show/508935/nodejs02.svg"
          title="JavaScript"
        />
      </div>
    </section>
  );
}

export default Skills;
