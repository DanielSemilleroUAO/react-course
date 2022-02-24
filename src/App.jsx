import React from "react";
import "./App.css";
import CicloVida from "./components/CicloVido";
import Estilos from "./components/Estilos";
import EstilosLinea from "./components/EstilosLinea";
import EstilosModulo from "./components/EstilosModulo";
import EstilosStyled from "./components/EstilosStyled";
import Eventos from "./components/Eventos";
import Formularios from "./components/Formularios";
import Hook from "./components/Hook";
import Padre from "./components/IterandoComponentes/Padre";
import Iterar from "./components/Iterar";
import IterarKeys from "./components/IterarKeys";
import PrimerComponente from "./components/PrimerComponente";
import Props from "./components/Props";
import Refs from "./components/Refs";
import RendeCondicional from "./components/RenderCondiconal";
import PadreRutas from "./components/Rutas/PadreRutas";
import SpreadOperator from "./components/SpreadOperator";
import State from "./components/State";

function App() {
  const lista = ["Daniel ", "Jose ", "Gonzalo "];
  return (
    <>
      <h1>Hola mundo</h1>
      <h2>Inicio</h2>
      <PrimerComponente />
      <Props nombre={lista} />
      <State />
      <Estilos />
      <EstilosLinea />
      <EstilosModulo />
      <EstilosStyled />
      <Refs />
      <CicloVida />
      <Hook />
      <Formularios />
      <Eventos />
      <RendeCondicional />
      <SpreadOperator />
      <Iterar />
      <IterarKeys />
      <Padre />
      <PadreRutas />
    </>
  );
}

export default App;
