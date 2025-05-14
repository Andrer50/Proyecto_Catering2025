import React from "react";
import styles from "./ReservDetails.module.css";
import { menuPackage } from "@/components/Interfaces/MenuPackage";
import ButtonPrevious from "@/components/features/ButtonPrevious";
import ButtonNext from "@/components/features/ButtonNext";
import Card from "@/components/features/Card";

interface ReservDetailsProps {
  servicio: menuPackage;
  datos: {
    tipoEvento: string;
    telefono: string;
    fecha: string;
    distrito: string;
    hora: string;
    direccion: string;
  };
  onBack: () => void;
  onSubmitFinal: (reserva: {
    tipoEvento: string;
    telefono: string;
    fecha: string;
    distrito: string;
    hora: string;
    direccion: string;
    servicio: menuPackage;
  }) => void;
}
export const ReservDetails: React.FC<ReservDetailsProps> = ({
  servicio,
  datos,
  onBack,
  onSubmitFinal,
}) => {
  //Function to handle the submit
  const handleSubmit = () => {
    onSubmitFinal({
      ...datos,
      servicio,
    });
    console.log("Datos Guardados con éxito", datos);
  };
  return (
    <>
      <div className={styles.InteractionArea}>
        <div className={styles.ServiceInfo}>
          <h2>Servicio Seleccionado</h2>
          <Card servicio={servicio} />
        </div>
        <div className={styles.DetailsArea}>
          <h1>Resumen de la Reserva</h1>
          <p>
            <strong>Servicio:</strong> {servicio.title}
          </p>
          <p>
            <strong>Tipo de Evento:</strong> {datos.tipoEvento}
          </p>
          <p>
            <strong>Teléfono:</strong> {datos.telefono}
          </p>
          <p>
            <strong>Fecha del Evento:</strong> {datos.fecha}
          </p>
          <p>
            <strong>Distrito:</strong> {datos.distrito}
          </p>
          <p>
            <strong>Hora de Inicio:</strong> {datos.hora}
          </p>
          <p>
            <strong>Dirección del Evento:</strong> {datos.direccion}
          </p>
          <div className={styles.ButtonArea}>
            <ButtonPrevious texto="Anterior" onClick={onBack} />
            <ButtonNext texto="Reservar" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};
