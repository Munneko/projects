import "../styles/skills.scss";
const Skills = () => {
  const skills = [
    {
      category: "Frontend Basics",
      items: [
        { name: "HTML", level: 90 },
        { name: "CSS / Sass", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 70 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", level: 80 },
        { name: "Next.js", level: 40 },
        { name: "Redux / Zustand", level: 65 },
        { name: "React Router", level: 75 },
        { name: "UI Libraries (shadcn, Tailwind, etc.)", level: 80 },
      ],
    },
    {
      category: "Tools & Other",
      items: [
        { name: "Git / GitHub", level: 85 },
        { name: "Vite", level: 80 },
        { name: "Vercel", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className={"section skills"}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills__grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skills__category">
              <h3 className="skills__category-title">{skillGroup.category}</h3>
              <div className="skills__list">
                {skillGroup.items.map((skill, id) => (
                  <div key={skill.name + id} className="skills__item">
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__item-bar">
                      <div
                        className="skills__item-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
