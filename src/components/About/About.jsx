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
      Hey there! 👋 I'm Michael. As someone deeply passionate about technology, I embarked on a self-taught journey to create my own digital space.
       Armed with curiosity and determination, I delved into the world of web development, learning the art of code, design, and user experience.
       I look forward to contribute to your project and objectives and also grow in the tech environment.
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
