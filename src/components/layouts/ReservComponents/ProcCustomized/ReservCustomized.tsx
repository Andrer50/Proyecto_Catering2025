import React from "react";
import { FirstForm } from "./FirstForm/FirstForm";
import { useState } from "react";
import SelectionType from "./SelectionType/SelectionType";
import { Pedido } from "@/components/Interfaces/Pedido";

interface ReservCustomProps {
  onCardToggle: () => void;
  isCardExpanded: boolean;
  onBack: () => void;
}

export const ReservCustomized: React.FC<ReservCustomProps> = ({
  onCardToggle,
  isCardExpanded,
  onBack,
}) => {
  const [step, setStep] = useState(1);
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
  const avanzar = () => setStep((p) => p + 1);
  const retroceder = () => setStep((p) => p - 1);

  const actualizarPedido = (nuevo: Partial<Pedido>) => {
    setPedido((prev) => ({
      ...prev,
      ...nuevo,
      cliente: {
        ...prev.cliente,
        ...(nuevo.cliente || {}),
      },
      datosEvento: {
        ...prev.datosEvento,
        ...(nuevo.datosEvento || {}),
      },
      infoMenu: {
        ...prev.infoMenu,
        ...(nuevo.infoMenu || {}),
        tipoServicio: {
          ...prev.infoMenu.tipoServicio,
          ...(nuevo.infoMenu?.tipoServicio || {}),
          config:
            nuevo.infoMenu?.tipoServicio?.config ??
            prev.infoMenu.tipoServicio.config,
        },
        detailExtra: {
          ...prev.infoMenu.detailExtra,
          ...(nuevo.infoMenu?.detailExtra || {}),
        },
        detailPersonal: {
          ...prev.infoMenu.detailPersonal,
          ...(nuevo.infoMenu?.detailPersonal || {}),
        },
      },
    }));
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
