"use client";
import React from "react";
import { useState } from "react";
import styles from "./NavComponent.module.css";
import logo from "../../../assets/images/LogoBolivar.png";
import { LoginButtom } from "../LoginComponents/LoginButtom";
import Link from "next/link";
import { UserButton } from "../LoginComponents/UserButton";
import { AreaForm } from "../LoginComponents/AreaForm";
import UserDropdown from "@/components/features/UserDropdown";
import NavBarComponent from "@/components/features/NavBarComponent";
import { useRouter } from "next/router";

interface NavComponentProps {
  isCardExpanded: boolean;
  onCardToggle: () => void;
}
export const NavComponent = () => {
  {
    /*State to control the show login form */
  }
  const [showLogin, setShowLogin] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className={styles.NavMainArea}>
        <div className={styles.LogoArea}>
          <img className={styles.logo} src={logo.src} />
        </div>

        <div className={styles.NavAndButtom}>
          <div className={styles.Hamburger} onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
          {isOpen && (
            <div className={styles.MobileMenu}>
              <Link href="/">Inicio</Link>
              <Link href="/servicios">Servicios</Link>
              <Link href="/nosotros">Nosotros</Link>
            </div>
          )}
          <nav className={styles.NavArea}>
            <ul className={styles.NavRowArea}>
              <li className={styles.NavItem}>
                <Link href="/">Inicio</Link>
              </li>
              <li className={styles.NavItem}>
                <Link href="/servicios">Servicios</Link>{" "}
              </li>
              <li className={styles.NavItem}>
                <Link href="/nosotros">Nosotros</Link>{" "}
              </li>
            </ul>
          </nav>

          <div className={styles.LoginArea}>
            {/*<LoginButtom onClick={() => setShowLogin(true)} />*/}
            <UserDropdown></UserDropdown>
          </div>
        </div>
      </div>
      {showLogin && <AreaForm onClose={() => setShowLogin(false)} />}
    </>
  );
};
export default NavComponent;
