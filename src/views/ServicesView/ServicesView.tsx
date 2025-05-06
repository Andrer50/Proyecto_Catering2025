import React from "react";
import NavComponent from "../../components/layouts/NavComponents/NavComponent";
import { CarouselDemo } from "@/components/features/carousel-demo";
import styles from "./ServicesView.module.css";
export const ServicesView = () => {
  return (
    <>
      <div className={styles.MainArea}>
        <NavComponent></NavComponent>
        <div className={styles.ServicesArea}>
          <div className={styles.CarouselArea}>
            <div className={styles.CarouselCards}>
              <CarouselDemo></CarouselDemo>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesView;
