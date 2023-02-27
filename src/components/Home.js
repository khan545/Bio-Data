import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/img.png";
const Home = () => {
  const clientCount = useRef(null);
  const clientProject = useRef(null);
  const animationClientCount = () => {
    animate(0, 100, {
      duration: 2,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProject = () => {
    animate(0, 500, {
      duration: 2,
      onUpdate: (v) => (clientProject.current.textContent = v.toFixed()),
    });
  };
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I am <br />
            Mohammad Wasim Perwez
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "React Developer",
                "Web Designer",
                "Consulting work",
                "Logo Designer",
              ],
              autoStart: true,
              cursor: "",
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:wasim.perwez@gmail.com">Hire me </a>
            <a href="#work">
              Project <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              <motion.span
                whileInView={animationClientCount}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>Client worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +{" "}
                <motion.span
                  whileInView={animationProject}
                  ref={clientProject}
                ></motion.span>
              </p>
              <span>Project Developed</span>
            </article>
            <article data_spacial>
              <p>Contact</p>
              <span>wasim.perwez@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Wasim" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
