import '../styles/hero.scss';
const Hero = () => {
  return (
    <section className="hero">
      <div className= "hero__bg" ></div>
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Hi, I'm <span className="hero__highlight">Diana</span>
          </h1>
          <h2 className="hero__subtitle">smth</h2>
          <p className="hero__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie at ligula non pretium. Etiam egestas erat ut vehicula finibus. Phasellus vel tortor mi. Vestibulum eu ligula vitae ante efficitur fringilla quis sit amet dui. Cras fermentum aliquam tempus. Phasellus consectetur mauris quam, ac dignissim turpis iaculis ut. Donec eu tincidunt orci, a porta libero. Duis venenatis aliquam urna, non condimentum augue auctor in. Curabitur non metus risus. Aliquam rhoncus urna semper ultrices ultricies. Sed dignissim est magna, porttitor finibus justo rutrum vel. Donec scelerisque placerat mauris sit amet congue. Curabitur scelerisque felis quis elit sagittis blandit.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Hero; 