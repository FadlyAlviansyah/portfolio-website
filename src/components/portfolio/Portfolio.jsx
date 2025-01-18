import { useRef } from "react";
import "./portfolio.scss";
import { motion, useInView } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Broker",
    img: "/project-broker.png",
    desc: "The Broker POS System is a comprehensive Point of Sale (POS) application designed to streamline and enhance transaction management for businesses. This project is built with a robust Laravel backend and a dynamic React front-end, ensuring optimal performance, scalability, and a seamless user experience.",
  },
  {
    id: 2,
    title: "Pharmacy Application",
    img: "/project-apotek.png",
    desc: "This website was created to facilitate pharmacists. There are several features available, such as CRUD, login, register, export Excel, print PDF, and many more. This project was created using the Laravel framework for the backend and Bootstrap for the frontend.",
  },
  {
    id: 3,
    title: "Blog App",
    img: "/project-blog.png",
    desc: "This project has several features, such as CRUD, login, dashboard, and more. This project was created using the Laravel framework for the backend and Bootstrap for the frontend.",
  },
  {
    id: 4,
    title: "Mosque Website",
    img: "/project-masjid.png",
    desc: "A mosque website where a feature is available .on the website for donations for the construction of the Wikrama Bogor Vocational High School mosque. I used PHP, HTML, and CSS programming languages to create this project.",
  },
  // {
  //   id: 5,
  //   title: "Pharmacy Application",
  //   img: "/project-apotek.png",
  //   desc: "This website was created to facilitate pharmacists. There are several features available, such as CRUD, login, register, export Excel, print PDF, and many more. This project was created using the Laravel framework for the backend and Bootstrap for the frontend.",
  // },
  // {
  //   id: 6,
  //   title: "Blog App",
  //   img: "/project-blog.png",
  //   desc: "This project has several features, such as CRUD, login, dashboard, and more. This project was created using the Laravel framework for the backend and Bootstrap for the frontend.",
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
