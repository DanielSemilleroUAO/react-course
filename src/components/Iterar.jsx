import React from "react";

const Iterar = () => {
  const animales = ["pato", "perro", "gato"];

  const personas = [
      {
          id: 0,
          nombre: 'Daniel',
          puesto: 'Desarrollador'
      },
      {
        id: 1,
        nombre: 'Jennifer',
        puesto: 'Desarrollador'
    }
  ]

  return (
    <>
      <ul>
        {animales.map((animal) => (
          <li>{animal}</li>
        ))}
        <br />
        {personas.map(({nombre, puesto, id}) => (
            <div key={id}>
                <li>{nombre}</li>
                <li>{puesto}</li>
                <br />
            </div>
            ))}
      </ul>
    </>
  );
};

export default Iterar;
