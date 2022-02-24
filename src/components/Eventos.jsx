import React from "react";

/*
    onFocus (cuando un input esta activado o en foco)
    onBlur (cuando pulsamos fuera de un input que esta en foco)
    onChange (Cuando hay un cambio en el componente o input)
    onClick (Cuando se hace un click en el raton sobre el elemento)
    onDoubleClick (Cuando se hace un click en e lraton sobre el elemento)
    onKeyDown (Cuando pulsamos un boton del teclado)
    onKeyPress (Cuando presionamos una tecla)
    onMousePress (Cuando presionamos una tecla)
    onMouseDown (Cuando presionamos el boton del mouse hacia abajo)
    onMouseOver (Cuando pasamos por encima el ratón)
    onMouseLeave (Cuando salimos del elemento)
*/

const foco = () => console.log("estoy en foco");
const blur = () => console.log("estoy en blur");
const change = () => console.log("cambie");
const click = () => console.log("Click");
const doubleClick = () => console.log("Doblie click");
const pulsarTecla = () => console.log("Pulsar tecla");

const Eventos = () => {
  return (
    <>
      <form>
        <input
          onChange={change}
          onBlur={blur}
          onFocus={foco}
          onKeyDown={pulsarTecla}
          type="text"
        />
      </form>
      <button onClick={click} onDoubleClick={doubleClick}>
        Forma
      </button>
    </>
  );
};

export default Eventos;
