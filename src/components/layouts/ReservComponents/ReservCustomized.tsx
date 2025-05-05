import React from "react";
import { FirstForm } from "./ProcCustomized/FirstForm/FirstForm";

interface ReservCustomProps {
  onCardToggle: () => void;
  isCardExpanded: boolean;
}
export const ReservCustomized: React.FC<ReservCustomProps> = ({
  onCardToggle,
  isCardExpanded,
}) => {
  return (
    <>
      <FirstForm />
    </>
  );
};
