import React, { useEffect, useState } from "react";

const Hook = () => {
  const [color, setColor] = useState("yellow");
  const [contador, setContador] = useState(1);

  const fondo = {
    width: "100%",
    backgroundColor: color,
  };

  useEffect(() => {
    let intervalo = setInterval(() => {
      setContador(contador + 1);
    }, 1000);
    return () => {
        clearInterval(intervalo);
    }
  }, [contador]);

  return (
    <>
      <div style={fondo}>
        <h1>Contador: {contador}</h1>
        <h1>{color}</h1>
        <button onClick={() => setColor("pink")}>Cambiar Color</button>
      </div>
    </>
  );
};

export default Hook;
