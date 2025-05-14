import React from "react";
import styles from "@/components/layouts/ReservComponents/ProcCustomized/FirstForm/FirstForm.module.css";
import ButtonNext from "@/components/features/ButtonNext";
import ButtonPrevious from "@/components/features/ButtonPrevious";
import Card from "@/components/features/Card";
import { useState } from "react";

interface Props {
  initialValues: FormDataCustomized;
  onBack: () => void;
  onNext: (data: FormDataCustomized) => void;
}

export const FirstForm: React.FC<Props> = ({
  onNext,
  onBack,
  initialValues,
}) => {
  const [tipoEvento, setTipoEvento] = useState(initialValues.tipoEvento);
  const [telefono, setTelefono] = useState(initialValues.telefono);
  const [fecha, setFecha] = useState(initialValues.fecha);
  const [distrito, setDistrito] = useState(initialValues.distrito);
  const [hora, setHora] = useState(initialValues.hora);
  const [direccion, setDireccion] = useState(initialValues.direccion);
  const [cantHoras, setCantHoras] = useState(initialValues.cantHoras);
  //Function to control the inputs
  const handleNext = () => {
    if (
      !tipoEvento ||
      !telefono ||
      !fecha ||
      !distrito ||
      !hora ||
      !direccion ||
      !cantHoras
    ) {
      alert("Por favor completa todos los campos");
      console.log("Faltan campos: ", {
        tipoEvento,
        telefono,
        fecha,
        distrito,
        hora,
        direccion,
        cantHoras,
      });
      return;
    }
    onNext({
      tipoEvento,
      telefono,
      fecha,
      distrito,
      hora,
      direccion,
      cantHoras,
    });
  };
  return (
    <div className={styles.InteractionArea}>
      <form className={styles.FormArea} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.AreaForm}>
          <h1>Información del Evento</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className={styles.FormInputs}>
              <label htmlFor="tipoEvento">Tipo de Evento</label>
              <input
                id="tipoEvento"
                placeholder="--Selecciona--"
                value={tipoEvento}
                onChange={(e) => setTipoEvento(e.target.value)}
              />
            </div>

            <div className={styles.FormInputs}>
              <label htmlFor="numberTelephone">Número de Teléfono</label>
              <input
                id="numberTelephone"
                placeholder="+51"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className={styles.FormInputs}>
              <label htmlFor="fechaEvento">Fecha del Evento</label>
              <input
                id="fechaEvento"
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>

            <div className={styles.FormInputs}>
              <label htmlFor="district">Distrito</label>
              <select
                className={styles.SelectDistrict}
                id="district"
                value={distrito}
                onChange={(e) => setDistrito(e.target.value)}
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
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </div>

            <div className={styles.FormInputs}>
              <label htmlFor="direccionEvento">Dirección del Evento</label>
              <input
                id="direccionEvento"
                placeholder="Dirección del evento"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.ButtonArea}>
            <ButtonPrevious texto="Anterior" onClick={onBack} />
            <ButtonNext texto="Siguiente" onClick={handleNext} />
          </div>
        </div>
      </form>
    </div>
  );
};
