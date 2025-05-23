import React from "react";
import InformationMainView from "../../components/layouts/InicioComponents/InformationMainView";
import styles from "./MainView.module.css";
import { HeaderComponent } from "@/components/layouts/HeaderComponents/HeaderComponent";
import NavComponent from "@/components/layouts/NavComponents/NavComponent";
import { CarouselComponent } from "@/components/layouts/CarouselComponent/CarouselComponent";
export const MainView = () => {
  return (
    //3 Area for the MainView
    <div className={styles.MainArea}>
      <HeaderComponent></HeaderComponent>
      <CarouselComponent></CarouselComponent>
      <div className={styles.InformationArea}>
        <InformationMainView></InformationMainView>
      </div>
    </div>
  );
};
export default MainView;
