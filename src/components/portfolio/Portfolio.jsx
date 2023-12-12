import { useRef } from "react";
import "./portfolio.scss";
import { motion, useInView } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Portfolio = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="portfolio" ref={ref}>
      <div className="wrapper">
        <div className="header">
          <h1>Recent Project</h1>
          <p>Here are a few projects I&apos;ve worked on recently</p>
        </div>
        <div className="container">
          <div className="row">
            {items.map((item) => {
              return (
                <motion.div
                  className="card"
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView && { opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="imageContainer">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="textContainer">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    {/* <button>See Demo</button> */}
                    {/* <a href=""><img src="/new-tab.png" alt="" /></a> */}
                  </div>
                </motion.div>
                // <div className="card" key={item.id}>
                //   <div className="imageContainer">
                //     <img src={item.img} alt="" />
                //   </div>
                //   <div className="textContainer">
                //     <h2>{item.title}</h2>
                //     <p>{item.desc}</p>
                //     {/* <button>See Demo</button> */}
                //     {/* <a href=""><img src="/new-tab.png" alt="" /></a> */}
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
