import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";  
import Navbar from "../components/NavBar";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
