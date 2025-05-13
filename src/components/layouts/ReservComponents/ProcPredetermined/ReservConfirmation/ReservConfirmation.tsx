import React from "react";
import styles from "./ReservConfirmation.module.css";
import { menuPackage } from "@/components/Interfaces/MenuPackage";
import Card from "@/components/features/Card";
import check from "@/assets/images/Check.png";
interface ReservConfirmationProps {
  servicio: menuPackage;
}

export const ReservConfirmation: React.FC<ReservConfirmationProps> = ({
  servicio,
}) => {
  return (
    <>
      <div className={styles.InteractionArea}>
        <div className={styles.LayoutArea}>
          <div className={styles.ConfirmationArea}>
            <div className={styles.ConfirmationText}>
              <h1>Reserva Exitosa</h1>
              <img className={styles.ImageCheck} src={check.src}></img>
            </div>
            <h5>
              Su reserva ha sido guardad con éxito en el Historial de Reservas
            </h5>
            <p>
              Dirijase al Historial de Reservas para hacer el pago y nos
              pondremos en contacto con Usted.
            </p>
          </div>
          <div className={styles.ServiceInfo}>
            <Card servicio={servicio} />
          </div>
        </div>
      </div>
    </>
  );
};
