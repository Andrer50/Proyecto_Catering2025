import React from "react";
import styled from "styled-components";
import { menuPackage } from "../Interfaces/MenuPackage";

const Card = ({ servicio }: { servicio: menuPackage }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img className="img" src={servicio.imageUrl}></img>
        <div className="textBox">
          <p className="text head">{servicio.title}</p>
          <span>{servicio.description}</span>
          <p className="text price">{servicio.price}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 195px;
    height: 285px;
    background: #313131;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.2s ease-in-out;
    overflow: hidden; /* Asegúrate de que el contenido no se desborde */
    position: relative;
  }

  .img {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.2s ease-in-out;
    z-index: 1;
    object-fit: cover;
  }

  .textBox {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: 0.2s ease-in-out;
    z-index: 2;
    margin: 1em;
  }

  .textBox > .text {
    font-weight: bold;
    color: black;
  }

  .textBox > .head {
    font-size: 30px;
  }

  .textBox > .price {
    font-size: 17px;
  }

  .textBox > span {
    font-size: 12px;
    color: rgb(61, 59, 59);
  }

  .card:hover > .textBox {
    opacity: 1;
  }

  .card:hover > .img {
    height: 150%;
    filter: blur(7px);
    animation: anim 3s infinite;
  }

  @keyframes anim {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .card:hover {
    transform: scale(1.04) rotate(-1deg);
  }
`;

export default Card;
