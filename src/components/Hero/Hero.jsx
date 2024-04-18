import './hero.scss'
import { motion } from 'framer-motion'
import me from '../../../public/Me.png'

const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.01,
    }
  },

  scrollBtn:{
    opacity:0,
    y:10,
   transition:{
    duration:2,
    repeat:Infinity,
   }

  }
}
const Hero = () => {
  return (
    
    <div className='hero'>
  
    <div className='herowrapper'>
      <motion.div className="herotext" variants={textVariants} initial='initial' animate='animate'>
        <motion.h2 variants={textVariants}>MICHAEL AHIALE</motion.h2>
        <motion.h1 variants={textVariants}>Front End Web Developer</motion.h1>
        <motion.p variants={textVariants}>I design and code beautifully simple things, and I love what I do.</motion.p>
       <motion.div variants={textVariants} className="herobtn">
        <button variants={textVariants}>Projects</button>
        <button variants={textVariants}>Contact me</button>
        </motion.div>
        <motion.img animate='scrollBtn'  variants={textVariants} src="/scroll.png" alt="" />
      </motion.div>
      <div className="heroimg">
        <img src={me} alt="" />
      </div>
    </div>
    </div>
    
  )
}

export default Hero
