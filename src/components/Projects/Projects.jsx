import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import './projects.scss';

import signInPageImage from '../../assets/sign in page.png';
import unsplashImage from '../../assets/proj2.png';


const items = [
  {
    id: 1,
    title: 'stayEdu',
    img: signInPageImage,
    desc: 'The website of stayEdu. A Ghanaian NGO that focuses on educating the youth through different media. Built with Bootstrap  ',
  },
  {
    id: 2,
    title: 'Dogegram',
    img: unsplashImage,
    desc: 'A social media app created for pets. Front-end project built with react and the option to login and sign up',
  },
  {
    id: 3,
    title: 'stayEdu',
    img: unsplashImage,
    desc: 'lofem sdfsij sdfswfjoweifj dsfuhsefoiwjfi sdfhuiowejf sfishfuwefuwif ',
  },
];

const Single = ({ item }) => {
  return (
    <section className='projectItem'>
     <img src={item.img} alt={item.title} />
     
     <div className="projectText"> 
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <button>github</button>
      <button>live</button>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });

  return (
    
    <div className='projects' ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX: scrollYProgress }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
    
  );
};

export default Projects;
