"use client";
import NavComponent from "@/components/layouts/NavComponents/NavComponent";
import React from "react";
import styles from "./ReservarView.module.css";
import { ReservPredetermined } from "@/components/layouts/ReservComponents/ReservPredetermined";
import { ReservCustomized } from "@/components/layouts/ReservComponents/ReservCustomized";
import { useState, useEffect } from "react";

export const ReservarView = () => {
  //Estado para controlar la selección de boton Left o Right
  const [selectedOption, setSelectedOption] = useState<
    "predeterminado" | "personalizado"
  >("predeterminado");
  // Estado para controlar la expansión de la tarjeta
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const handleCardToggle = () => {
    // Alterna el estado de la tarjeta expandida
    setIsCardExpanded((prev) => !prev);
  };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <div
        className={`${styles.MainArea} ${
          isCardExpanded ? styles.Darkened : ""
        }`}
      >
        <NavComponent></NavComponent>
        <div className={styles.ContainerForm}>
          <div className={styles.OptionsArea}>
            <input
              className={`${styles.LeftButton} ${
                selectedOption === "predeterminado" ? styles.Selected : ""
              }`}
              type="button"
              value="Predeterminado"
              onClick={() => setSelectedOption("predeterminado")}
            />
            <input
              className={`${styles.RightButton} ${
                selectedOption === "personalizado" ? styles.Selected : ""
              }`}
              type="button"
              value="Personalizado"
              onClick={() => setSelectedOption("personalizado")}
            />
          </div>
          <div className={styles.InteractionArea}>
            {isMounted && selectedOption === "predeterminado" ? (
              <ReservPredetermined
                onCardToggle={handleCardToggle}
                isCardExpanded={isCardExpanded}
              />
            ) : isMounted ? (
              <ReservCustomized
                onCardToggle={handleCardToggle}
                isCardExpanded={isCardExpanded}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default ReservarView;
