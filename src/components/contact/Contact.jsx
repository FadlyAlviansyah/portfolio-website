import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const socialVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7n639bu', 'template_xox9ifg', formRef.current, '_aJiJukN0hl7Upzhx')
      .then((result) => {
          setSuccess(true)
        }, (error) => {
          setError(true)
      });
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="container">
        <motion.div className="textContainer" variants={variants}>
          <motion.div className="row" variants={variants}>
            <h1>Contact Info</h1>
          </motion.div>
          <div className="row">
            <motion.div className="item" variants={variants}>
              <i className='bx bx-map'></i>
              <span>Bogor, Indonesia</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <i className='bx bx-envelope'></i>
              <span>fadlyalviansyah89@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <i className='bx bx-phone'></i>
              <span>+6281224916688</span>
            </motion.div>
          </div>
          <div className="row">
            <motion.a href="https://www.instagram.com/fadly.alv" target="_blank" className="item" variants={socialVariants}>
              <i className='bx bxl-instagram'></i>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/muhamad-fadly-alviansyah-31a7412a4/" target="_blank" className="item" variants={socialVariants}>
              <i className='bx bxl-linkedin'></i>
            </motion.a>
          </div>
        </motion.div>
        <div className="formContainer">
          <motion.div variants={variants}>
            <h2>Send a Message</h2>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
          >
            <motion.input variants={variants} type="text" required autoComplete="off" placeholder="Name" name="name"></motion.input>
            <motion.input variants={variants} type="email" required autoComplete="off" placeholder="Email" name="email"></motion.input>
            <motion.textarea variants={variants} rows={8} required autoComplete="off" placeholder="Message" name="message"></motion.textarea>
            <motion.button variants={variants} type="submit">Submit</motion.button>
            <div className="error">
              {error && "Error"}
            </div>
          </motion.form>
          <div className="alert">
            {success && <p className="success">I appreciate the advice given. Thank you very much!</p>}
            {error && <p className="error">Sorry, it looks like there was an error submitting your suggestion. Please try again.</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
