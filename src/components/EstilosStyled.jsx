import React from "react";
import styled, { keyframes } from "styled-components";
import "./variables.css";

class EstilosStyled extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {

    const animaTexto = keyframes`
      from {
        color: green;
      }
      to {
        color: red;
      }
    `;

    const Titulo = styled.h1`
      color: green;
      font-size: 20px;

      &:hover {
        color: blue;
      }

      @media (min-width: 800px) {
        color: red;
      }
 
      animation: ${animaTexto} 2s linear infinite;

    `;

    const Cabecera = styled.header`
      height: var(--altoHeader);
      background-color: var(--colorHeader);
      widt: var(--anchoHeader);
    `;

    return (
      <>
        <Cabecera>
          <Titulo>Titulo</Titulo>
        </Cabecera>
      </>
    );
  }
}

export default EstilosStyled;
