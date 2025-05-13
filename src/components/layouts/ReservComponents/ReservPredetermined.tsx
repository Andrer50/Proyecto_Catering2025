"use client";
import React, { useState } from "react";
import { SelectionService } from "./ProcPredetermined/SelectionService/SelectionService";
import { InformationForm } from "./ProcPredetermined/InformationForm/InformationForm";
import { menuPackage } from "@/components/Interfaces/MenuPackage";
import { ReservDetails } from "./ProcPredetermined/ReservDetails/ReservDetails";
import { FormData } from "@/components/Interfaces/FormDataDefault";
import { ReservConfirmation } from "./ProcPredetermined/ReservConfirmation/ReservConfirmation";

interface ReservProcProps {
  onCardToggle: () => void;
  isCardExpanded: boolean;
}
export interface ReservaData {
  servicio: menuPackage | null;
  datosEvento: FormData;
}
export const ReservPredetermined: React.FC<ReservProcProps> = ({
  onCardToggle,
  isCardExpanded,
}) => {
  //State to control the steps
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  //State to control the Data
  const [reserva, setReserva] = useState<ReservaData>({
    servicio: null,
    datosEvento: {
      tipoEvento: "",
      telefono: "",
      fecha: "",
      distrito: "",
      hora: "",
      direccion: "",
    },
  });
  //Function to take the selected menu to the next step
  const handleServiceSelected = (menu: menuPackage) => {
    setReserva((prev) => ({ ...prev, servicio: menu }));
    setStep(2);
    {
      console.log(menu);
    }
  };
  const [datosReserva, setDatosReserva] = useState({
    tipoEvento: "",
    telefono: "",
    fecha: "",
    distrito: "",
    hora: "",
    direccion: "",
  });
  //Function to take the Data Event to the next step
  const handleDatosEvento = (data: FormData) => {
    setReserva((prev) => ({
      ...prev,
      datosEvento: data,
    }));
    setDatosReserva(data);
    setStep(3);
  };

  const handleBackToStep1 = () => setStep(1);
  const handleBackToStep2 = () => setStep(2);

  const handleSubmitFinal = (reservaFinal: any) => {
    setStep(4);
  };
  return (
    <>
      {step === 1 && (
        <SelectionService
          //When the first form is finished, it goes to the second
          onSeleccionar={handleServiceSelected}
          onCardToggle={onCardToggle}
          isCardExpanded={isCardExpanded}
        />
      )}
      {step === 2 && reserva.servicio && (
        <InformationForm
          servicio={reserva.servicio}
          initialValues={datosReserva}
          onNext={handleDatosEvento}
          onBack={handleBackToStep1}
        />
      )}
      {step === 3 && reserva.servicio && (
        <ReservDetails
          servicio={reserva.servicio}
          datos={datosReserva}
          onBack={handleBackToStep2}
          onSubmitFinal={handleSubmitFinal}
        ></ReservDetails>
      )}
      {step === 4 && reserva.servicio && (
        <ReservConfirmation servicio={reserva.servicio}></ReservConfirmation>
      )}
    </>
  );
};
