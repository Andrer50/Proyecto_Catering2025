import React from "react";
import styles from "./ReservDetails.module.css";
import ButtonPrevious from "@/components/features/ButtonPrevious";
import ButtonNext from "@/components/features/ButtonNext";
import Card from "@/components/features/Card";
import { Pedido } from "@/components/Interfaces/Pedido";

interface ReservDetailsProps {
  onBack: () => void;
  pedido: Pedido;
  onSubmitFinal: () => void;
}
export const ReservDetails: React.FC<ReservDetailsProps> = ({
  onBack,
  pedido,
  onSubmitFinal,
}) => {
  return (
    <>
      <div className={styles.InteractionArea}>
        <div className={styles.ServiceInfo}>
          <h2>Servicio Seleccionado</h2>
          <Card menu={pedido.infoMenu} />
        </div>
        <div className={styles.DetailsArea}>
          <h1>Resumen de la Reserva</h1>
          <p>
            <strong>Codigo del Pedido:</strong> {pedido.idPedido}
          </p>
          <p>
            <strong>Tipo de Evento:</strong> {pedido.datosEvento.tipoEvento}
          </p>
          <p>
            <strong>Teléfono:</strong> {pedido.datosEvento.telefono}
          </p>
          <p>
            <strong>Fecha del Evento:</strong>{" "}
            {pedido.datosEvento.fechaEvento.toLocaleDateString()}
          </p>
          <p>
            <strong>Hora de Inicio:</strong>{" "}
            {pedido.datosEvento.horaInicio.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p>
            <strong>Dirección del Evento:</strong>{" "}
            {pedido.datosEvento.direccion}
          </p>
          <div className={styles.ButtonArea}>
            <ButtonPrevious texto="Anterior" onClick={onBack} />
            <ButtonNext texto="Reservar" onClick={onSubmitFinal} />
          </div>
        </div>
      </div>
    </>
  );
};
