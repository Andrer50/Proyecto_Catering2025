import React from "react";

import styles from "./InformationMainView.module.css";
import { CarouselDemo } from "@/components/features/carousel-demo";
import { TextGenerateEffectDemo } from "@/components/features/texto-demo";

export const InformationMainView = () => {
  return (
    <div className={styles.MainArea}>
      <div className={styles.ContainerArea}>
        <div className={styles.InformationArea}>
          {/*Component Text */}
          <div className={styles.TitleText}>
            <TextGenerateEffectDemo
              words="D'Bolivar Gourmet"
              style={{ fontFamily: "Tienne, sans-serif", fontSize: "5rem" }}
            ></TextGenerateEffectDemo>
          </div>
          <div className={styles.FirstText}>
            <TextGenerateEffectDemo
              words="Sabores que enamoran, eventos que inspiran..."
              style={{ fontFamily: "Italiana, sans-serif", fontSize: "30px" }}
            ></TextGenerateEffectDemo>
          </div>
          <p className={styles.SecondText}>Reserva tu catering ahora!!</p>
          <input
            className={styles.ReservButtom}
            value="Reservar Ahora"
            type="button"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default InformationMainView;
