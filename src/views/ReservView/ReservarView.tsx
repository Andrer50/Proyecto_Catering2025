"use client";
import NavComponent from "@/components/layouts/NavComponents/NavComponent";
import React from "react";
import styles from "./ReservarView.module.css";
import { ReservPredetermined } from "@/components/layouts/ReservComponents/ProcPredetermined/ReservPredetermined";
import { ReservCustomized } from "@/components/layouts/ReservComponents/ProcCustomized/ReservCustomized";
import { useState, useEffect } from "react";
import { SelectOptionForm } from "@/components/layouts/ReservComponents/SelectOptionForm";

export const ReservarView = () => {
  //State to control the selection of Left or Right button
  const [selectedOption, setSelectedOption] = useState<
    "predeterminado" | "personalizado" | null
  >(null);
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

  return (
    <div className={styles.MainArea}>
      <NavComponent></NavComponent>
      <div className={styles.ContainerForm}>
        <div className={styles.Area}>
          <div className={styles.InteractionArea}>
            {/*According to the selected button, load a form*/}
            {!isMounted && (
              <SelectOptionForm
                onSelectOption={(option) => {
                  setSelectedOption(option);
                  setIsMounted(true); // Al seleccionar, ocultamos SelectOptionForm y mostramos el formulario
                }}
              />
            )}

            {isMounted && selectedOption === "predeterminado" ? (
              <ReservPredetermined
                onCardToggle={handleCardToggle}
                isCardExpanded={isCardExpanded}
                onBack={() => setIsMounted(false)}
              />
            ) : isMounted && selectedOption === "personalizado" ? (
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
