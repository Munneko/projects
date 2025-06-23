import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";  


const Home: React.FC = () => {

  return (
    <div>
      <Hero />
      <Skills />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
