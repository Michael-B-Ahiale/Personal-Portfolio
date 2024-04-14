import { motion } from "framer-motion"
import './sidebar.scss'
import Links from "./links/Links"
import Togglebutton from "./togglebutton/Togglebutton"
import { useState } from "react"


const Sidebar = () => {
  const[open,setOpen]=useState(false)

  const variants={
    open:{
      clipPath:'circle(1200px at 50px 50px)',
      transition:{
        type:'spring',
        stiffness:20,
      },
    },

    closed:{
      clipPath:'circle(25px at 50px 50px)',
      transition:{
        delay:0.3,
        type:'spring',
        stiffness:400,
        damping: 40,
      },
    },
  }
  return (
    <motion.div 
    animate={open? 'open': 'closed'}
    className="sidebar">
      <motion.div variants={variants} className="bg">
        <Links/>
      </motion.div>
    <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
