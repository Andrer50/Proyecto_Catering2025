"use client";
import React, { useState } from "react";
import { SelectionService } from "./SelectionService/SelectionService";
import { InformationForm } from "./InformationForm/InformationForm";
import { menuPackage } from "@/components/Interfaces/MenuPackage";
import { ReservDetails } from "./ReservDetails/ReservDetails";
import { FormData } from "@/components/Interfaces/FormDataDefault";
import { ReservConfirmation } from "./ReservConfirmation/ReservConfirmation";
import { IconHttpOptions } from "@tabler/icons-react";
import { SelectOptionForm } from "../SelectOptionForm";

interface ReservProcProps {
  onCardToggle: () => void;
  isCardExpanded: boolean;
  onBack: () => void;
}
export interface ReservaData {
  servicio: menuPackage | null;
  datosEvento: FormData;
}
export const ReservPredetermined: React.FC<ReservProcProps> = ({
  onCardToggle,
  isCardExpanded,
  onBack,
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
  //function to handle the submit final
  const handleSubmitFinal = (reservaFinal: any) => {
    setStep(4);
  };
  return (
    <>
      {/*According to the step, a view is shown*/}
      {step === 1 && (
        <SelectionService
          //When the first form is finished, it goes to the second
          onSeleccionar={handleServiceSelected}
          onCardToggle={onCardToggle}
          isCardExpanded={isCardExpanded}
          onBack={onBack}
        />
      )}
      {step === 2 && reserva.servicio && (
        <InformationForm
          /*We pass the service to the following component */
          servicio={reserva.servicio}
          initialValues={datosReserva}
          onNext={handleDatosEvento}
          onBack={handleBackToStep1}
        />
      )}
      {step === 3 && reserva.servicio && (
        <ReservDetails
          /*We pass the service to the following component */
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
