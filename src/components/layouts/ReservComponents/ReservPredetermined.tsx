"use client";
import React, { useState } from "react";
import { SelectionService } from "./ProcPredetermined/SelectionService/SelectionService";
import { InformationForm } from "./ProcPredetermined/InformationForm/InformationForm";
import { menuPackage } from "@/components/Interfaces/MenuPackage";

interface ReservProcProps {
  onCardToggle: () => void;
  isCardExpanded: boolean;
}
export const ReservPredetermined: React.FC<ReservProcProps> = ({
  onCardToggle,
  isCardExpanded,
}) => {
  //Controlar estado de Pasos del formulario de reserva
  const [paso, setPaso] = useState(1);
  const [serviceSelected, setserviceSelected] = useState<menuPackage | null>(
    null
  );

  const handleServiceSelected = (menu: menuPackage) => {
    setserviceSelected(menu);
    setPaso(2);
    {
      console.log(menu);
    }
  };

  return (
    <>
      {paso === 1 && (
        <SelectionService
          //When the first form is finished, it goes to the second
          onSeleccionar={handleServiceSelected}
          onCardToggle={onCardToggle}
          isCardExpanded={isCardExpanded}
        />
      )}
      {paso === 2 && serviceSelected && (
        <InformationForm servicio={serviceSelected} />
      )}
    </>
  );
};
