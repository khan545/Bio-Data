import React from "react";
import data from "../assets/data.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Work = () => {
  return (
    <div id="work">
      <h2>Work</h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => {
              return (
                <div key={i.title} className="workItem">
                  <img src={i.imgSrc} alt="Images" />
                  <aside>
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                    <a target="_blank" href={i.url}>
                      View Demo
                    </a>
                  </aside>
                </div>
              );
            })}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
