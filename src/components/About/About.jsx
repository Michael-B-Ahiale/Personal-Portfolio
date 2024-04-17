import './about.scss'
import { useEffect } from 'react'
import { useAnimation,motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import myImage from "../../assets/Michael.jpg";

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
        
        <div className="html">HTML</div>
        <div className="css">CSS</div>
        <div className="css">JS</div>
        <div className="css">REACT</div>
        <div className="css">BOOTSTRAP</div>
        <div className="css">FRAMER</div>
      </div>
    </div>
  )
}

export default About
