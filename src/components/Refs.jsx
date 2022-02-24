import React, { createRef } from "react";

const Refs = () => {
  const cambioColor = createRef();

  const cambioColorTexto = () => {
    console.log("cambio color");
    cambioColor.current.style.color = 'blue';
  };

  return (
    <>
      <h1 ref={cambioColor}>Soy un titulo y cambio de color</h1>
      <button onClick={cambioColorTexto}>Cambio color</button>
    </>
  );
};

export default Refs;
