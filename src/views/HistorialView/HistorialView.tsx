import React from "react";
import NavComponent from "../../components/layouts/NavComponents/NavComponent";
import ReservaTarje from "../../components/HistorialReserva/ReservaTarj";
import "./Historial.css";
export const HistorialView = () => {
  

  return ( 
   <>
      <NavComponent />
      <div className="historial-container">
        <ReservaTarje />
      </div>
    </>
   
   
)
};
export default HistorialView;
