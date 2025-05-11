import React from "react";
import styles from "./InformationForm.module.css";
import { menuPackage } from "@/components/Interfaces/MenuPackage";
import Card from "@/components/features/Card";
import Button from "@/components/features/Button";

export const InformationForm = ({ servicio }: { servicio: menuPackage }) => {
  return (
    <div className={styles.InteractionArea}>
      <div className={styles.ServiceInfo}>
        <h2>Servicio Seleccionado</h2>
        <Card servicio={servicio} />
      </div>

      <form className={styles.FormArea}>
        <div className={styles.AreaForm}>
          <h1>Información del Evento</h1>
          <div className=" grid grid-cols-2 gap-4">
            <div className={styles.FormInputs}>
              <label htmlFor="tipoEvento">Tipo de Evento</label>
              <input id="tipoEvento" placeholder="--Selecciona--" />
            </div>
            <div className={styles.FormInputs}>
              <label htmlFor="numberTelephone">Numero de Telefono</label>
              <input id="numberTelephone" placeholder="+51" />
            </div>
            <div className={styles.FormInputs}>
              <label htmlFor="fechaEvento">Fecha del Evento</label>
              <input id="fechaEvento" placeholder="dd/mm/aa" type="date" />
            </div>
            <div className={styles.FormInputs}>
              <label htmlFor="district">Distrito</label>
              <select
                className={styles.SelectDistrict}
                id="district"
                defaultValue=""
              >
                <option value="" disabled>
                  --Selecciona un distrito--
                </option>
                <option value="miraflores">Miraflores</option>
                <option value="sanIsidro">San Isidro</option>
                <option value="surco">Surco</option>
                <option value="barranco">Barranco</option>
                <option value="laMolina">La Molina</option>
              </select>
            </div>
            <div className={styles.FormInputs}>
              <label htmlFor="horaEvento">Hora de Inicio</label>
              <input
                id="horaInicio"
                placeholder="Hora de inicio/fin"
                type="time"
              />
            </div>
            <div className={styles.FormInputs}>
              <label htmlFor="direccionEvento">Dirección del Evento</label>
              <input id="direccionEvento" placeholder="Dirección del evento" />
            </div>
          </div>
          <div className={styles.ButtonArea}>
            <Button />
          </div>
        </div>
      </form>
    </div>
  );
};
