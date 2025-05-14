"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavBarComponent = () => {
  return (
    <StyledWrapper>
      <div className="nav">
        <div className="container">
          <div className="btn">
            <Link href="/">Inicio</Link>
          </div>
          <div className="btn">
            <Link href="/servicios">Servicios</Link>
          </div>
          <div className="btn">
            <Link href="/nosotros">Nosotros</Link>
          </div>
          <svg
            className="outline"
            overflow="visible"
            width={400}
            height={60}
            viewBox="0 0 400 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="rect"
              pathLength={100}
              x={0}
              y={0}
              width={400}
              height={60}
              fill="transparent"
              strokeWidth={5}
            />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .rect {
    stroke-dashoffset: 5;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s;
    stroke: black;
  }

  .nav {
    position: relative;
    width: 400px;
    height: 60px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .container {
    position: absolute;
    inset: 0;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
  }

  .container:hover .outline .rect {
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
    stroke: black;
    transition: 999999s;
  }

  .btn {
    padding: 0.5em 1.5em;
    color: black;
    cursor: pointer;
    transition: 0.1s;
  }

  .btn:hover {
    background: #fff3;
  }

  /* Hover effects por botón */
  .btn:nth-child(1):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 3 8 71.5 8 10.7;
    stroke: black;
  }

  .btn:nth-child(2):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 15.5 9 44.5 9 20;
    stroke: black;
  }

  .btn:nth-child(3):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 30.4 9 14.6 9 30;
    stroke: black;
  }

  .btn:hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
    stroke: black;
  }
`;

export default NavBarComponent;
