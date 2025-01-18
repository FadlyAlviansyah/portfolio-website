import "./navbar.scss";
import Links from "./links/Links";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeMenu = (e) => {
      // Jika klik di luar menu, tutup menu
      if (!e.target.closest('.hamburger') && open) {
        setOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [open]);

  return (
    <div className="navbar">
      <motion.div className="hamburger" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
      <div className="wrapper">
        <div className="container">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home">Fadly</a>
          </motion.span>
          <motion.div
          className="nav-links"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Links />
          </motion.div>
          <motion.div
            className="social"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://github.com/FadlyAlviansyah" target="_blank" rel="noreferrer">
              <i className='bx bxl-github'></i>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
