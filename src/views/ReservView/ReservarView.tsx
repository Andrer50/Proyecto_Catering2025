"use client";
import NavComponent from "@/components/layouts/NavComponents/NavComponent";
import React from "react";
import styles from "./ReservarView.module.css";
import { ReservProc } from "@/components/layouts/ReservComponents/ReservProc";
import { useState } from "react";

export const ReservarView = () => {
  const [selectedOption, setSelectedOption] = useState<
    "predeterminado" | "personalizado"
  >("predeterminado");
  const [isCardExpanded, setIsCardExpanded] = useState(false); // Estado para controlar la expansión de la tarjeta
  const handleCardToggle = () => {
    setIsCardExpanded((prev) => !prev); // Alterna el estado de la tarjeta expandida
  };
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
            <ReservProc
              onCardToggle={handleCardToggle}
              isCardExpanded={isCardExpanded}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ReservarView;
