import React from "react";
import styles from "./SelectionService.module.css";
import { ExpandableCardDemo } from "@/components/features/expandible-card-demo";
import { menuPackage } from "@/components/Interfaces/MenuPackage";
import ButtonPrevious from "@/components/features/ButtonPrevious";

interface SelectionServiceProps {
  onSeleccionar: (card: menuPackage) => void;
  isCardExpanded: boolean;
  onCardToggle: () => void;
  onBack: () => void;
}

export const SelectionService: React.FC<SelectionServiceProps> = ({
  onSeleccionar,
  onCardToggle,
  isCardExpanded,
  onBack,
}) => {
  return (
    <div className={styles.InteractionArea}>
      <div className={styles.CarouselArea}>
        <div className={styles.ExpandableCardDemo}>
          <ExpandableCardDemo
            onCardToggle={onCardToggle}
            isCardExpanded={isCardExpanded}
            onSeleccionar={onSeleccionar}
          ></ExpandableCardDemo>
        </div>
        <ButtonPrevious onClick={onBack}></ButtonPrevious>
      </div>
    </div>
  );
};
