import React, { useRef, useState,  } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
// import  SectionWrapper  from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  });

  const[loading,setLoading]= useState(false);

  const handleChange=()=>{}

  const handleSubmit=()=>{}
  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.55] bg-black-100 p-14 rounded-2xl'
        >
          <p className="text-sm">Get in touch</p>
           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Con<span className="text-primary">tact</span>
        </h2>
        
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=' flex flex-col gap-2'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name} 
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-primary/10 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-primary/10 -80 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-primary/10 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );  
}


export default Contact;
