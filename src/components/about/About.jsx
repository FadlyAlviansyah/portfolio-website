import "./about.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <motion.div
          className="imageContainer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/about.png" alt="Muhamad Fadly Alviansyah" />
        </motion.div>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>About Me</motion.h1>
          <motion.p variants={textVariants}>
          Since my youth, I have been interested in the world of technology and programming. This interest prompted me to pursue an education major in Software and Games Development. I see software development as a bridge between creativity and practicality, where I can create technology-based solutions that benefit the real world.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
