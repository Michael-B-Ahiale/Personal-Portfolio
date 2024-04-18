import './about.scss'
import { useEffect } from 'react'
import { useAnimation,motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import myImage from "../../assets/Michael.jpg";
import sass from '../../assets/sass.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.png'
import framer from '../../assets/framer.png'
import css from '../../assets/css.png'
import firebase from '../../assets/firebase.png'
import bootstrap from '../../assets/bootstrap.png'

const aboutVariants={
  visible:{opacity:1, scale:1, transition:{duration:1}},
  hidden:{opacity:0, scale:0.5}
}
const About = () => {

const controls=useAnimation();
const [ref,inView]=useInView();

useEffect(()=>{
  if(inView){
    controls.start('visible');
  }
}, [controls, inView]);

  return (
    <div className='About'>
      <motion.div
      variants={aboutVariants}
      initial='hidden'
      animate={controls}
      ref={ref}
      className="aboutcontent">
        <div className="aboutImage">
          <img src={myImage} alt="Michael" />
        </div>
      <div className="aboutText">
        <h1>About Me!</h1>
      <motion.p>
      Hey there! 👋 I'm Michael, a self-taught web developer.
      I've had the opportunity to work on a variety of projects, from simple websites to developing interactive web applications.
      I'm excited about the opportunities ahead and look forward to making meaningful contributions to your project.
      </motion.p>
      </div>

      </motion.div>
      <h3>Skills</h3>
      <div className="skills">
        
        <div className="icon"><img src={html} alt="html" /> <p>HTML</p></div>
        <div className="icon"><img src={css} alt="css" /><p> CSS</p></div>
        <div className="icon"><img src={javascript} alt="javascript" /><p> Javascript</p></div>
        <div className="icon"><img src={react} alt="react" /><p>React</p> </div>
        <div className="icon"><img src={bootstrap} alt="bootstrap" /><p>Bootstrap</p></div>
        <div className="icon"><img src={framer} alt="framer" /><p>Framer</p></div>
        <div className="icon"><img src={firebase} alt="firebase" /><p>Firebase</p></div>
        <div className="icon"><img src={sass} alt="framer" /><p>Sass</p></div>
      </div>
    </div>
  )
}

export default About
