import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return <div>

    <section><Navbar/></section>
    <section id="Home"><Hero/></section>
    <section id="About"><About/></section>
    <section id="Projects"><Projects/></section>
    <section id="Contact"><Contact/></section>
    <section><Footer/></section>
    
    
    
  </div>;
};

export default App;
