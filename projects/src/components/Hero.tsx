import "../styles/hero.scss";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Hi, I'm Diana</h1>
          <h2 className="hero__subtitle">Junior Frontend Developer</h2>
          <p className="hero__description">
            I specialize in building responsive web applications using React,
            TypeScript, and modern UI libraries. Passionate about clean code,
            user-friendly interfaces, and continuous learning. I enjoy solving
            non-trivial problems and working with new or niche technologies.
            Currently studying at KPI and constantly improving my skills through
            practice and side projects.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">
              Examples of technology usage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
