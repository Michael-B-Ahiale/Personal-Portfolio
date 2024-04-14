import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './contact.scss'
import emailjs from '@emailjs/browser';

const variants={
  initial:{
    y:500,
    opacity:0,
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.1,
    },
  },
};
const Contact = () => {

  const formRef =useRef()
  const [error, setError]=useState(false);
  const [sucess, setSuccess]=useState(false);

  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_7yx24zg', 'template_ktjxx3b', formRef.current,{publicKey:'73HygmtCbz8XRfrm_',})
        .then(
          () => {
           setSuccess(true);
          },
          (error) => {
            setError(true);
          },
        );
    };

  return (
    <motion.div className='contact' variants={variants} initial='initial' whileInView='animate'>
      <motion.div className="contactText" variants={variants}>
        <motion.h1 variants={variants}>Let's work on your project</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span><a href="abmike268@gmail.com">abmike268@gmail.com</a></span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+233200191355</span>
        </motion.div>
        <motion.div className="socials" variants={variants}>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </motion.div>
      </motion.div>
      <div className="contactForm">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder='Name'  name='from_name'/>
          <input type="email" required placeholder='Email' name='mail'/>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Leave a message'/>
          <button>Submit</button>
          {error && 'Error'}
          {sucess && 'Success'}
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
