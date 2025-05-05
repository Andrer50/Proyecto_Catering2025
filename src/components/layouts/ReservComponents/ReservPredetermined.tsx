"use client";
import React, { useState } from "react";
import { SelectionService } from "./ProcPredetermined/SelectionService/SelectionService";
import { InformationForm } from "./ProcPredetermined/InformationForm/InformationForm";

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
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const handleSeleccionServicio = (servicio: any) => {
    setServicioSeleccionado(servicio);
    setPaso(2);
  };

  return (
    <>
      {paso === 1 && (
        <SelectionService
          onSeleccionar={handleSeleccionServicio}
          onCardToggle={onCardToggle}
          isCardExpanded={isCardExpanded}
        />
      )}
      {paso === 2 && servicioSeleccionado && (
        <InformationForm servicio={servicioSeleccionado} />
      )}
    </>
  );
};
