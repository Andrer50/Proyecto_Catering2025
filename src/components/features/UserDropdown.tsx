"use client";
import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ReservarImg from "@/assets/images/ReservarIcon.png";
import HistorialImg from "@/assets/images/HistorialReservaIcon.png";

const UserDropdown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const goToReservar = () => {
    router.push("/reservar");
  };

  const goToHistorial = () => {
    router.push("/historial");
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Ajusta aquí el tiempo en ms para que desaparezca más rápido
  };

  return (
    <StyledWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="popup">
        <div onClick={() => setIsOpen(!isOpen)} className="burger">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            height={20}
            width={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
          </svg>
        </div>
        {isOpen && (
          <nav className="popup-window">
            <legend>Opciones</legend>
            <ul>
              <li>
                <button onClick={goToReservar} tabIndex={-1}>
                  <img src={ReservarImg.src} style={{ width: 25 }}></img>
                  <span>Reservar</span>
                </button>
              </li>
              <li>
                <button onClick={goToHistorial}>
                  <img src={HistorialImg.src} style={{ width: 25 }}></img>
                  <span>Historial de Reservas</span>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* The design is inspired from Galahhad*/

  .popup {
    --burger-line-width: 1.125em;
    --burger-line-height: 0.125em;
    --burger-offset: 0.625em;
    --burger-bg: #fd8a26;
    --burger-color: #333;
    --burger-line-border-radius: 0.1875em;
    --burger-diameter: 3.125em;
    --burger-btn-border-radius: calc(var(--burger-diameter) / 2);
    --burger-line-transition: 0.3s;
    --burger-transition: all 0.1s ease-in-out;
    --burger-hover-scale: 1.1;
    --burger-active-scale: 0.95;
    --burger-enable-outline-color: var(--burger-bg);
    --burger-enable-outline-width: 0.125em;
    --burger-enable-outline-offset: var(--burger-enable-outline-width);
    /* nav */
    --nav-padding-x: 0.25em;
    --nav-padding-y: 0.625em;
    --nav-border-radius: 0.375em;
    --nav-border-color: #ccc;
    --nav-border-width: 0.0625em;
    --nav-shadow-color: rgba(0, 0, 0, 0.2);
    --nav-shadow-width: 0 1px 5px;
    --nav-bg: #eee;
    --nav-font-family: "Poppins", sans-serif;
    --nav-default-scale: 0.8;
    --nav-active-scale: 1;
    --nav-position-left: -10em;
    --nav-position-right: unset;
    /* if you want to change sides just switch one property */
    /* from properties to "unset" and the other to 0 */
    /* title */
    --nav-title-size: 0.625em;
    --nav-title-color: #777;
    --nav-title-padding-x: 1rem;
    --nav-title-padding-y: 0.25em;
    /* nav button */
    --nav-button-padding-x: 1rem;
    --nav-button-padding-y: 0.375em;
    --nav-button-border-radius: 0.375em;
    --nav-button-font-size: 17px;
    --nav-button-hover-bg: #fd8a26;
    --nav-button-hover-text-color: #fff;
    --nav-button-distance: 0.875em;
    /* underline */
    --underline-border-width: 0.0625em;
    --underline-border-color: #ccc;
    --underline-margin-y: 0.3125em;
  }

  /* popup settings 👆 */

  .popup {
    display: inline-block;
    text-rendering: optimizeLegibility;
    position: relative;
  }

  .popup input {
    display: none;
  }

  .burger {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background: var(--burger-bg);
    width: var(--burger-diameter);
    height: var(--burger-diameter);
    border-radius: var(--burger-btn-border-radius);
    border: none;
    cursor: pointer;
    overflow: hidden;
    transition: var(--burger-transition);
    outline: var(--burger-enable-outline-width) solid transparent;
    outline-offset: 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .popup-window {
    transform: scale(var(--nav-default-scale));
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding: var(--nav-padding-y) var(--nav-padding-x);
    background: var(--nav-bg);
    font-family: var(--nav-font-family);
    color: var(--nav-text-color);
    border-radius: var(--nav-border-radius);
    box-shadow: var(--nav-shadow-width) var(--nav-shadow-color);
    border: var(--nav-border-width) solid var(--nav-border-color);
    top: calc(
      var(--burger-diameter) + var(--burger-enable-outline-width) +
        var(--burger-enable-outline-offset)
    );
    left: var(--nav-position-left);
    right: var(--nav-position-right);
    transition: var(--burger-transition);
    margin-top: 10px;
    width: 14em;
  }
  .popup:hover .popup-window,
  .popup:focus-within .popup-window {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }

  .popup-window legend {
    padding: var(--nav-title-padding-y) var(--nav-title-padding-x);
    margin: 0;
    color: var(--nav-title-color);
    font-size: var(--nav-title-size);
    text-transform: uppercase;
  }

  .popup-window ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .popup-window ul button {
    outline: none;
    width: 100%;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    color: var(--burger-color);
    font-size: var(--nav-button-font-size);
    padding: var(--nav-button-padding-y) var(--nav-button-padding-x);
    white-space: nowrap;
    border-radius: var(--nav-button-border-radius);
    cursor: pointer;
    column-gap: var(--nav-button-distance);
  }
  .popup-window ul li button {
    display: flex;
    align-items: center;
    gap: 0.75em;
    font-size: 1em;
    padding: 0.4em 1em;
    border: none;
    background: none;
    border-radius: 0.375em;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }
  .popup-window ul li button:hover {
    background: #fd8a26;
    color: white;
  }

  .popup-window ul li button svg {
    color: #fd8a26;
  }

  .popup-window ul li:nth-child(1) svg,
  .popup-window ul li:nth-child(2) svg {
    color: #fd8a26;
  }

  .popup-window ul li:nth-child(4) svg,
  .popup-window ul li:nth-child(5) svg {
    color: rgb(153, 153, 153);
  }

  .popup-window ul li:nth-child(7) svg {
    color: red;
  }

  .popup-window hr {
    margin: var(--underline-margin-y) 0;
    border: none;
    border-bottom: var(--underline-border-width) solid
      var(--underline-border-color);
  }

  /* actions */

  .popup-window ul button:hover,
  .popup-window ul button:focus-visible,
  .popup-window ul button:hover svg,
  .popup-window ul button:focus-visible svg {
    color: var(--nav-button-hover-text-color);
    background: var(--nav-button-hover-bg);
  }

  .burger:hover {
    transform: scale(var(--burger-hover-scale));
  }

  .burger:active {
    transform: scale(var(--burger-active-scale));
  }

  .burger:focus:not(:hover) {
    outline-color: var(--burger-enable-outline-color);
    outline-offset: var(--burger-enable-outline-offset);
  }

  .popup input:checked + .burger span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }

  .popup input:checked + .burger span:nth-child(2) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }

  .popup input:checked + .burger span:nth-child(3) {
    transform: translateX(
      calc(var(--burger-diameter) * -1 - var(--burger-line-width))
    );
  }

  .popup input:checked ~ nav {
    transform: scale(var(--nav-active-scale));
    visibility: visible;
    opacity: 1;
  }
`;

export default UserDropdown;
