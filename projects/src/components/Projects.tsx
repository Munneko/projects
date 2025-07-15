import "../styles/Projects.scss";
const Projects = () => {
  const projects = [
    {
      title: "E-Shop",
      description:
        "An online store featuring a product catalog with cards and detailed pages, product search, full shopping cart functionality, user authentication (login/register), and order placement with payment. Includes a base structure for user profile and order tracking.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Zustand",
        "Shadcn/UI",
        "Tailwind",
        "Vite",
      ],
      image: "/images/e-shop.png",
      link: "#",
      github: "https://github.com/Munneko/e-shop",
    },
    {
      title: "To-Do List App",
      description:
        "A straightforward to-do app created specifically to practice managing state with Redux. Includes basic features like adding, deleting, and completing tasks, demonstrating component interaction and state flow.",
      technologies: ["React", "TypeScript", "Redux", "CSS Modules", "Vite"],
      image: "/images/todo-app.png",
      link: " #",
      github: "https://github.com/Munneko/to-do",
    },
    {
      title: "In Progress / Commercial Project",
      description:
        "Started working on a commercial project, which limited the time available for personal projects. More updates and new work coming soon.",
      technologies: ["React", "TypeScript", "Redux", "Next.js", "UI Libraries"],
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
