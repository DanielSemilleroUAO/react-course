import React from "react";

class CicloVida extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    nombre: "Daniel",
    evento: null,
  };

  // montamos el componente (eventos y peticiones http)
  componentDidMount() {
    console.log("El compoente se montó");
    this.state.evento = window.addEventListener("resize", () =>
      console.log(window.innerWidth)
    );
  }

  // Actualización del componente
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    console.log("el componente se actualizo");
  }

  // Desmontaje del componente
  componentWillUnmount() {
    console.log("El componente se quitara");
    window.removeEventListener(this.state.evento);
  }

  render() {
    return (
      <>
        <h1>{this.state.nombre}</h1>
        <button onClick={() => this.setState({ nombre: "Carlos" })}>
          Cambiar nombre
        </button>
      </>
    );
  }
}

export default CicloVida;
