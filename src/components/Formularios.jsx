import React, { useState } from "react";

const Formularios = () => {
  const [nombre, setNombre] = useState(false);
  const [apellido, setApellido] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const nombreRegex = new RegExp("^[a-zA-Z]{3,16}$");

  const valorNombre = (nombreValidar) => {
    console.log(nombreValidar);
    if (nombreRegex.test(nombreValidar)) {
      setNombre(true);
      console.log("valido");
    } else {
      setNombre(false);
      console.log("no valido");
    }
  };
  const valorApellido = (apellidoValidar) => {};
  const valorEmail = (emailValidar) => {};
  const valorPassword = (passwordValidar) => {};
  const enviar = (e) => {
    e.preventDefault();
    if (nombre && apellido && email && password) {
      console.log("enviar");
    } else {
      console.log("ingresa los datos");
    }
    setTimeout(() => window.location.reload(), 5000);
  };

  return (
    <>
      <h1>Formularios</h1>
      <form>
        <h3>Escribe tu nombre:</h3>
        <input type="text" onChange={(e) => valorNombre(e.target.value)} />
        <h1>{nombre}</h1>

        <h3>Escribe tu apellido:</h3>
        <input type="text" onChange={(e) => valorApellido(e.target.value)} />

        <h3>Escribe tu Email:</h3>
        <input type="email" onChange={(e) => valorEmail(e.target.value)} />

        <h3>Escribe tu password:</h3>
        <input
          type="password"
          onChange={(e) => valorPassword(e.target.value)}
        />

        <br />
        <input type="submit" onSubmit={(e) => enviar(e)} />
      </form>
      <br />
    </>
  );
};

export default Formularios;
