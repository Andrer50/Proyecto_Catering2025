"use client";
import React, { useState } from "react";
import { SelectionService } from "./SelectionService/SelectionService";
import { InformationForm } from "./InformationForm/InformationForm";
import { ReservDetails } from "./ReservDetails/ReservDetails";
import { ReservConfirmation } from "./ReservConfirmation/ReservConfirmation";
import { IconHttpOptions } from "@tabler/icons-react";
import { SelectOptionForm } from "../SelectOptionForm";
import { Pedido } from "@/components/Interfaces/Pedido";
import { InfoMenu } from "@/components/Interfaces/InfoMenu";

interface ReservProcProps {
  onCardToggle: () => void;
  isCardExpanded: boolean;
  onBack: () => void;
}

export const ReservPredetermined: React.FC<ReservProcProps> = ({
  onCardToggle,
  isCardExpanded,
  onBack,
}) => {
  //State to control the steps
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  //State to control the Data
  const [pedido, setPedido] = useState<Pedido>({
    idPedido: 0,
    cliente: {
      // Asumiendo que tienes definida esta interfaz y objeto Cliente adecuado
      idCliente: 10,
      nombre: "",
      email: "",
      telefono: "",
    }, // Y demás campos que tengas en Cliente...},
    datosEvento: {
      idDatosEvento: 0,
      tipoEvento: "",
      telefono: "",
      direccion: "",
      horaInicio: new Date(""),
      cantHoras: 0,
      fechaEvento: new Date(""),
    },
    infoMenu: {
      idInfoMenu: 0,
      tipoServicio: {
        idTipoServicio: 0,
        nombre: "",
        config: null,
      },
      // config: ... (según corresponda)},
      detailExtra: {
        idDetailExtra: 0,
        detailExtraInfo: [],
      },
      detailPersonal: {
        idDetailPersonal: 9,
        detailPersonalInfo: [],
      },
      title: "",
      description: "",
      price: 0,
      imageURL: "",
    },
    estado: "Nuevo",
  });

  // 1) Cuando se selecciona un servicio/paquete, actualizamos solo el infoMenu.tipoServicio
  const handleInfoMenuSelected = (infoMenu: InfoMenu) => {
    setPedido((prev) => ({
      ...prev,
      infoMenu,
    }));
    setStep(2);
  };

  // 2) Cuando se llenan datos del evento, actualizamos solo datosEvento
  const handleDatosEvento = (datosEvento: Pedido["datosEvento"]) => {
    setPedido((prev) => ({
      ...prev,
      datosEvento,
    }));
    setStep(3);
  };

  const handleBackToStep1 = () => setStep(1);
  const handleBackToStep2 = () => setStep(2);
  //function to handle the submit final
  const handleSubmitFinal = async () => {
    try {
      // Aquí haces el POST o envío del pedido
      const response = await fetch("/api/pedidos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pedido),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el pedido");
      }

      const data = await response.json();
      console.log("Pedido creado con éxito:", data);

      // Opcional: cambiar al paso final (confirmación)
      setStep(4);
    } catch (error) {
      console.error("Error en el submit final:", error);
      alert("Ocurrió un error al procesar la reserva. Intenta nuevamente.");
    }
  };
  return (
    <>
      {/*According to the step, a view is shown*/}
      {step === 1 && (
        <SelectionService
          //When the first form is finished, it goes to the second
          onSeleccionar={handleInfoMenuSelected}
          onCardToggle={onCardToggle}
          isCardExpanded={isCardExpanded}
          onBack={onBack}
        />
      )}
      {step === 2 && pedido.infoMenu.idInfoMenu !== 0 && (
        <InformationForm
          /*We pass the service to the following component */
          pedido={pedido}
          onNext={handleDatosEvento}
          onBack={handleBackToStep1}
        />
      )}
      {step === 3 && pedido.datosEvento.idDatosEvento !== 0 && (
        <ReservDetails
          /*We pass the service to the following component */
          pedido={pedido}
          onBack={handleBackToStep2}
          onSubmitFinal={handleSubmitFinal}
        ></ReservDetails>
      )}
      {step === 4 && pedido.datosEvento.idDatosEvento !== 0 && (
        <ReservConfirmation menu={pedido.infoMenu}></ReservConfirmation>
      )}
    </>
  );
};
