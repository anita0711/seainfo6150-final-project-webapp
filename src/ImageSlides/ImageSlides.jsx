import React from "react";
import styles from "./ImageSlides.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlides = ({ img1, img2, img3, img4, img5, title }) => {
  return (
    <div className={styles.imageContainer}>
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={img1} alt={title} />
        </div>
        <div>
          <img src={img2} alt={title} />
        </div>
        <div>
          <img src={img3} alt={title} />
        </div>
        <div>
          <img src={img4} alt={title} />
        </div>
        <div>
          <img src={img5} alt={title} />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlides;
