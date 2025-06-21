import React, { useRef, useState,  } from "react";
import { motion } from "framer-motion";
 import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
// import  SectionWrapper  from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS service, template, and user IDs
    const serviceId = 'service_d7tyk7n';
    const templateId = 'template_di738tu';
    const publicKey = 'n0JEXyInvfPZZeSrc';

    // Dynamically import emailjs to avoid build errors if not installed
    import('@emailjs/browser').then(emailjs => {
      emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        publicKey
      ).then(
        () => {
          setLoading(false);
          alert('Thank you. Your message has been sent!');
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          alert('Something went wrong. Please try again.');
        }
      );
    });
  };
  return (
    <>
    <section id="Contact" >
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
              <span className=' font-medium mb-2'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name} 
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-primary/10 py-4 px-6 placeholder:text-gray-400 rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className=' font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-primary/10 -80 py-4 px-6 placeholder:text-gray-400 rounded-lg outline-none border-none font-medium'
              
              />
            </label>
            <label className='flex flex-col'>
              <span className=' font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-primary/10 py-4 px-6 placeholder:text-gray-400  rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-6 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary'
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
    </section>
    </>
  );  
}


export default Contact;
