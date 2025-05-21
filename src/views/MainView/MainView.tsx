import React from "react";
import imageMain from "../../assets/images/ImagenMain.jpg";

import NavComponent from "../../components/layouts/NavComponents/NavComponent";
import InformationMainView from "../../components/layouts/InicioComponents/InformationMainView";
import styles from "./MainView.module.css";
export const MainView = () => {
  return (
    //3 Area for the MainView
    <div className={styles.MainArea}>
      {/*First Area: Nav */}
      <div className={styles.NavArea}>
        <NavComponent></NavComponent>
      </div>

      {/*Seconda Area: Background and Image */}
      <div className={styles.ColumnImageArea}>
        <div className={styles.BackgroundColumnArea}></div>
        <img className={styles.ImageMain} src={imageMain.src}></img>
      </div>
      {/*Third Area: Information Area */}
      <div className={styles.InformationArea}>
        <InformationMainView></InformationMainView>
      </div>
    </div>
  );
};
export default MainView;
