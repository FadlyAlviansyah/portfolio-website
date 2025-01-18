import "./hero.scss";
import { motion } from "framer-motion";


const textVariants = {
  initial: {
    x: -500,
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

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate= "animate"
        >
          <motion.h2 variants={textVariants}>Hi! My name is</motion.h2>
          <motion.h1 variants={textVariants}>
            Muhamad Fadly Alviansyah
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
