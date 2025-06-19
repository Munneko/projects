import "../styles/skills.scss";
const Skills = () => {
  const skills = [
    {
      category: "Test",
      items: [
        { name: "Test", level: 90 },
        { name: "Test", level: 0 },
        { name: "Test", level: 50 },
        { name: "Test", level: 25 },
        { name: "Test", level: 1 },
      ],
    },
    {
      category: "Test1",
      items: [
        { name: "Test", level: 100 },
        { name: "Test", level: 100 },
        { name: "Test", level: 100 },
        { name: "Test", level: 100 },
        { name: "Test", level: 100 },
      ],
    },
    {
      category: "Test2",
      items: [
        { name: "Test", level: 100 },
        { name: "Test", level: 100 },
        { name: "Test", level: 100 },
        { name: "Test", level: 100 },
        { name: "Test", level: 100 },
      ],
    },
  ];

  return (
    <section className={"section skills"}>
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
