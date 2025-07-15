import "../styles/about.scss";
const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Lorem ipsum</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              I’m a junior frontend developer with a passion for creating modern
              and user-friendly interfaces. I enjoy solving non-trivial tasks
              and exploring new technologies. I’ve built several web
              applications to practice real-world logic, including shopping
              carts, search, filters, and authentication flows.
            </p>
            <p>
              My stack includes React, Next.js, TypeScript, Zustand, Tailwind,
              and various UI libraries. I also have experience integrating APIs,
              including AI-powered services, and developing simple bots for
              Discord and Telegram using JavaScript and Python.
            </p>
            <p>
              I studied at a specialized school with an advanced English
              program, and I’m currently pursuing a degree at KPI (specialty 174
              – Automation, Computer-Integrated Technologies and Robotics). I’m
              self-driven, detail-oriented, and always eager to learn and
              improve through real projects and challenges.
            </p>
          </div>
          <div className="about__stats"></div>
          <div className="about__stat">
            <h3>6 months</h3>
            <p>commercial coding experience</p>
          </div>
          <div className="about__stat">
            <h3>✅</h3>
            <p>commercial project in progress</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
