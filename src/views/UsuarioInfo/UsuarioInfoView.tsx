import React from "react";
import NavComponent from "../../components/layouts/NavComponents/NavComponent";
import UsuarioInfo from "../../components/UsuarioInfo/UsuarioInfoo";
import "./UsuarioInfoView.css";

export const UsuarioInfoView = () => {
  // Prueba
  const usuario = {
    nombre: "Jorge",
    apellidos: "Chicana",
    telefono: "999888777",
    dni: "87654321",
    direccion: "Jr. Luisa 456, Lima Norte",
    correo: "Aji@gmail.com"
  };

  return (
    <>
      <NavComponent />
      <div className="usuario-infocontainer">
        <UsuarioInfo
          nombre={usuario.nombre}
          apellidos={usuario.apellidos}
          telefono={usuario.telefono}
          dni={usuario.dni}
          direccion={usuario.direccion}
          correo={usuario.correo}
        />
      </div>
    </>
  );
};

export default UsuarioInfoView;
