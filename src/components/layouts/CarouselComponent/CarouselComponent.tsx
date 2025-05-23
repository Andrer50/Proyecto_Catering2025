import React from "react";
import image1 from "@/assets/images/ImageMobileCarousel1.png";
import image2 from "@/assets/images/ImageMobileCarousel2.png";
import image3 from "@/assets/images/ImageMobileCarousel3.png";
import image4 from "@/assets/images/ImageMobileCarousel4.png";
import image5 from "@/assets/images/ImageMobileCarousel5.png";
import styles from "./CarouselComponent.module.css";
import NavComponent from "../NavComponents/NavComponent";

export const CarouselComponent = () => {
  return (
    <div className={styles.sliderBox}>
      <NavComponent></NavComponent>
      <ul>
        <li>
          <img className={styles.Image} src={image1.src}></img>
        </li>
        <li>
          <img className={styles.Image} src={image2.src}></img>
        </li>
        <li>
          <img className={styles.Image} src={image3.src}></img>
        </li>
        <li>
          <img className={styles.Image} src={image4.src}></img>
        </li>
        <li>
          <img className={styles.Image} src={image5.src}></img>
        </li>
      </ul>
    </div>
  );
};
