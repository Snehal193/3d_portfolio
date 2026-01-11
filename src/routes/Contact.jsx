import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas, StarsCanvas } from "../components";
import BackButton from "../components/BackButton";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]:value });
  };
  // service_69mlqlc
  // template_pgzpr2d
  // gjRjjwmccaUY9Lx1_
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_69mlqlc',
      'template_pgzpr2d',
      {
        from_name: form.name,
        to_name: "Snehal Lavangare",
        from_email: form.email,
        to_email: "snehallavangare19@gmail.com",
        message: form.message,
      },
      'gjRjjwmccaUY9Lx1_'
    ).then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    },(error) => {
      setLoading(false);
      console.error(error);

      alert("Ahh, something went wrong. Please try again.");
    });
  }

  return (
    <>
    <BackButton to="/" routeName="Home" />
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left','tween',0.2,1)}
       className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Enter Your Name"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white font-medium outline-none border-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white font-medium outline-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea
              type="text"
              name="message"
              rows={7}
              value={form.message}
              placeholder="What you want to say?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white font-medium outline-none border-none"
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
        variants={slideIn('right','tween',0.2,1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] has-[350px]:'
      >
      <EarthCanvas/>
        </motion.div>
        <StarsCanvas />
      </div>
    </>
  )
}

export default SectionWrapper(Contact,"contact");