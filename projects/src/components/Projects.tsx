import "../styles/Projects.scss";
const Projects = () => {
  const projects = [
    {
      title: "Test Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      technologies: ["Test1", "Test2", "Test3"],
      image: "",
      link: "#",
      github: "#",
    },
    {
      title: "Test Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      technologies: ["Test1", "Test2", "Test3"],
      image: "",
      link: "#",
      github: "#",
    },
    {
      title: "Test Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      technologies: ["Test1", "Test2", "Test3"],
      image: "",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.title} className="projects__card">
              <div className="projects__image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projects__content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                <div className="projects__technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="projects__technology">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="projects__links">
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                  <a
                    href={project.github}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
