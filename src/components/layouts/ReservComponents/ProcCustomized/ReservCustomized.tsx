import React from "react";
import { FirstForm } from "./FirstForm/FirstForm";
import { useState } from "react";
import SelectionType from "./SelectionType/SelectionType";

interface ReservCustomProps {
  onCardToggle: () => void;
  isCardExpanded: boolean;
  onBack: () => void;
}
export interface ReservaData {
  servicio: menuType | null;
  datosEvento: FormData;
}

export const ReservCustomized: React.FC<ReservCustomProps> = ({
  onCardToggle,
  isCardExpanded,
  onBack,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [reserva, setReserva] = useState<ReservaDataCustomized>({
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
  const [datosReserva, setDatosReserva] = useState({
    tipoEvento: "",
    telefono: "",
    fecha: "",
    distrito: "",
    hora: "",
    direccion: "",
    cantHoras: "",
  });
  const handleDatosEvento = (data: FormData) => {
    setReserva((prev) => ({
      ...prev,
      datosEvento: data,
    }));
    setDatosReserva(data);
    setStep(3);
  };
  return (
    <>
      {/*
      {step === 1 && (
        <FirstForm onBack={onBack} initialValues={datosReserva} onNext={handleDatosEvento} />
      )}
      {step === 2 && <SelectionType />}
      * */}
    </>
  );
};
