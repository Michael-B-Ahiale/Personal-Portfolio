import Sidebar from '../Sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
    <Sidebar/>
      <div className="wrapper">
        <motion.span className='logo'
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        >{`M<>A`}</motion.span>
        <div className="links">
          
          <motion.a whileHover={{scale:1.15}} whileTap={{scale:0.95}} href="#Skills">LinkedIn</motion.a>
          <motion.a whileHover={{scale:1.15}} whileTap={{scale:0.95}} href="#Projects">Github</motion.a>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
