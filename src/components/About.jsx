import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section className="about-enes flex w-[70rem] mx-auto">
      <div className="img-wrapper">
        <img src="" alt="" />
      </div>
      <div className="descriptions">
        <div className="title-border"></div>
        <h2>About Enes</h2>
        <h4>
          Dapibus id interdum fusce sed odio massa tellus amet, faucibus nibh
          consequat justo mauris, donec nec tempus in volutpat iaculis
          pellentesque in urna.
        </h4>
        <h4>
          Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus
          tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed
          amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas
          id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc diam
          mauris ut tortor ipsum.
        </h4>
      </div>
      <a href="">
        READ FULL STORY <BsArrowRight />
      </a>
    </section>
  );
};

export default About;
