import React from "react";
import styles from "./SelectionService.module.css";
import { ExpandableCardDemo } from "@/components/features/expandible-card-demo";
import { menuPackage } from "@/components/Interfaces/MenuPackage";

interface SelectionServiceProps {
  onSeleccionar: (card: menuPackage) => void;
  isCardExpanded: boolean;
  onCardToggle: () => void;
}

export const SelectionService: React.FC<SelectionServiceProps> = ({
  onSeleccionar,
  onCardToggle,
  isCardExpanded,
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
      </div>
    </div>
  );
};
