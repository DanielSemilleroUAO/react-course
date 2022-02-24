import React from "react";
import Componente1 from "./Componente1";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Componente2 from "./Componente2";
import Componente3 from "./Componente3";

const PadreRutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Componente1 />}></Route>
          <Route path="/componente-dos" element={<Componente2 />}></Route>
          <Route path="/componente-tres/:id" element={<Componente3 />}></Route>
        </Routes>
        <Link to="/">inicio</Link>
        <Link to="/componente-dos">Compoente2</Link>
        <Link to="/componente-tres">Componente3</Link>
      </BrowserRouter>
    </div>
  );
};

export default PadreRutas;
