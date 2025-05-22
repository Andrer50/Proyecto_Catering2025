import React, { useState } from "react";
import "./Usuario.css";

interface UsuarioInfoP {
  nombre: string;
  apellidos: string;
  telefono: string;
  dni: string;
  direccion: string;
  correo: string;
}

const UsuarioInfoo: React.FC<UsuarioInfoP> = ({
  nombre,
  apellidos,
  telefono,
  dni,
  direccion: direccionInicial,
  correo,
}) => {
  const [direccion, setDireccion] = useState(direccionInicial);
  const [editando, setEditando] = useState(false);

  if (!nombre || !apellidos || !telefono || !dni || !direccion || !correo) {
    return <p className="mensaje">Faltan datos del usuario.</p>;
  }

  const handleDireccionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDireccion(e.target.value);
  };

  const toggleEditar = () => {
    // Guardar datos 
    setEditando(!editando);
  };

  return (
    <div className="usuario-formulario">
      <h2>Información del Usuario</h2>
      <form>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" value={nombre} readOnly />
        </div>
        <div className="form-group">
          <label>Apellidos</label>
          <input type="text" value={apellidos} readOnly />
        </div>
        <div className="form-group">
          <label>Teléfono</label>
          <input type="text" value={telefono} readOnly />
        </div>
        <div className="form-group">
          <label>DNI</label>
          <input type="text" value={dni} readOnly />
        </div>
        <div className="form-group">
          <label>Dirección</label>
          <input
            type="text"
            value={direccion}
            onChange={handleDireccionChange}
            readOnly={!editando}
          />
        </div>
        <div className="form-group">
          <label>Correo</label>
          <input type="text" value={correo} readOnly />
        </div>

        <button type="button" className="boton-editar" onClick={toggleEditar}>
          {editando ? "Guardar Dirección" : "Modificar Dirección"}
        </button>
      </form>
    </div>
  );
};

export default UsuarioInfoo;
