import React from "react";

const IterarKeys = () => {
  const animal = {
    nombre: "coco",
    especie: "dasdas",
  };

  const key = Object.keys(animal);

  return (
    <>
      <ul>
        {key.map((k) => (
          <li>{k}:{animal[k]}</li>
        ))}
      </ul>
    </>
  );
};

export default IterarKeys;
