import React from "react";

class EstilosLinea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorAzul: true,
    };
  }
  render() {
    return (
      <>
        <h1>Estilos Linea</h1>
        <p
          style={{
            color: "blue",
            textAlign: "center",
            backgroundColor: this.state.colorAzul ? "orange" : "white",
          }}
        >
          Soy un estilo en linea
        </p>
        <button
          onClick={() => this.setState({ colorAzul: !this.state.colorAzul })}
        >
          Cambiar color
        </button>
      </>
    );
  }
}

export default EstilosLinea;
