"use client";
import NavComponent from "@/components/layouts/NavComponents/NavComponent";
import React from "react";
import styles from "./ReservarView.module.css";
import { ReservPredetermined } from "@/components/layouts/ReservComponents/ReservPredetermined";
import { ReservCustomized } from "@/components/layouts/ReservComponents/ReservCustomized";
import { useState, useEffect } from "react";

export const ReservarView = () => {
  //State to control the selection of Left or Right button
  const [selectedOption, setSelectedOption] = useState<
    "predeterminado" | "personalizado"
  >("predeterminado");
  //State to control card expansion
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  const handleCardToggle = () => {
    //Change the state of the card expanded
    setIsCardExpanded((prev) => !prev);

    if (!isCardExpanded) {
      setIsCardExpanded(true);
    } else {
      setIsCardExpanded(false);
    }
  };

  //State to control if the component is being shown or not
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      //Function: If the card is expanded the background becomes dark
      className={styles.MainArea}
    >
      <NavComponent
        isCardExpanded={isCardExpanded}
        onCardToggle={handleCardToggle}
      ></NavComponent>
      <div className={styles.ContainerForm}>
        <div className={styles.Area}>
          {/*Button Area Predetermined and Customized */}
          <div className={styles.OptionsArea}>
            {/*Button Area Predetermined */}
            <input
              className={`${styles.LeftButton} ${
                selectedOption === "predeterminado" ? styles.Selected : ""
              }`}
              type="button"
              value="Predeterminado"
              onClick={() => setSelectedOption("predeterminado")}
            />
            {/*Button Area Customized */}
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
            {/*According to the selected button, load a form*/}
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
    </div>
  );
};
export default ReservarView;
