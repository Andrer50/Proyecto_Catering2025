"use client";
import React from "react";
import MainView from "../views/MainView/MainView";
import ServicesView from "../views/ServicesView/ServicesView";
import NosotrosView from "../views/NosotrosView/NosotrosView";
import ReservarView from "../views/ReservView/ReservarView";
import "./globals.css";
import { MyProvider } from "@/context/mycontext";

export default function App() {
  return (
    <>
      <MyProvider>
        <MainView />
      </MyProvider>
    </>
  );
}
