import { useState, useRef } from "react"
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../style.js';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc/index.js';
import { slideIn } from "../utils/motion.js";
import Swal from 'sweetalert2';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value } = e.target;

    setForm({...form, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_9j0m3wn', 'template_zdt29ea', {from_name: form.name, to_name: 'Khalid', from_email: form.email, to_email: 'mdkhalidhossen10@gmail.com',  message: form.message}, 'k2p5jTTBzManl5E-e')
    .then(() => {
      setLoading(false);
      Swal.fire({
        title: "Success!",
        text: "Thank you for reaching out. I will get back to you shortly.",
        icon: "success"
      });
    }, (error) => {
      setLoading(false);
      alert(error.message, 'Failed to send message. Please try again.');
    })
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Let me know, how can I help you?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');