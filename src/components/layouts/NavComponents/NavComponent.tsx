"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./NavComponent.module.css";
import logo from "../../../assets/images/Logo Blanco.png";
import imageCarouselMobile1 from "@/assets/images/ImageMobileCarousel1.png";
import imageCarouselMobile2 from "@/assets/images/ImageMobileCarousel2.png";
import imageCarouselMobile3 from "@/assets/images/ImageMobileCarousel3.png";
import imageCarouselMobile4 from "@/assets/images/ImageMobileCarousel4.png";
import imageCarouselMobile5 from "@/assets/images/ImageMobileCarousel5.png";
import { LoginButtom } from "../LoginComponents/LoginButtom";
import Link from "next/link";
import { UserButton } from "../LoginComponents/UserButton";
import { AreaForm } from "../LoginComponents/AreaForm";
import UserDropdown from "@/components/features/UserDropdown";
import NavBarComponent from "@/components/features/NavBarComponent";
import { useRouter } from "next/router";
import UserDropdownMobile from "@/components/features/UserDropDownMobile";
import clsx from "clsx";

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
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Puedes ajustar este valor
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={clsx(styles.MainArea)}>
        <div className={styles.LayoutNav}></div>
        <div
          className={clsx(styles.NavMainArea, { [styles.Scrolled]: scrolled })}
        >
          <div className={styles.LogoArea}>
            <img className={styles.logo} src={logo.src} />
          </div>

          <div className={styles.NavAndButtom}>
            <div
              className={styles.Hamburger}
              onClick={() => setIsOpen(!isOpen)}
              ref={buttonRef}
            >
              ☰
            </div>
            {isOpen && (
              <div className={styles.MobileMenu} ref={menuRef}>
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
              <UserDropdownMobile></UserDropdownMobile>
            </div>
          </div>
        </div>
        {showLogin && <AreaForm onClose={() => setShowLogin(false)} />}
      </div>
    </>
  );
};
export default NavComponent;
