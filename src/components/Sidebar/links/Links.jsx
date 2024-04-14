
import { motion } from 'framer-motion'


const Links = () => {

  const items=[ 'Home', 'About', 'Projects', 'Contact']

  return (
    <div className='links'>
      {items.map((item)=>(
        <motion.a whileTap={{scale:0.95}} href={`#${item}`} key={item}>{item}</motion.a>
      ))}
    </div>
  )
}

export default Links
