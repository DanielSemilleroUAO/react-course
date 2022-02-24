import React from "react";
import Hijo from "./Hijo";

const Padre = () => {
  const nombres = ["luis", "daniel", "carlos"];

  return (
    <>
      {nombres.map((nombre) => (
        <Hijo nombre={nombre} />
      ))}
    </>
  );
};

export default Padre;
