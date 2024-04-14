import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>

    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
  </div>;
};

export default App;
