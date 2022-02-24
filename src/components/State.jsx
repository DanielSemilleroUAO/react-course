import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Daniel",
      apellido: "Delgado",
    };
  }

  cambiarDatos() {
    console.log("Cambiar datos");
    if (this.state.name === "Daniel") {
      this.setState({
        name: "Maria",
        apellido: "Perez",
      });
    } else {
      this.setState({
        name: "Daniel",
        apellido: "Delgado",
      });
    }
  }

  render() {
    return (
      <>
        <h2>
          Mi nombre es {this.state.name} {this.state.apellido}
        </h2>
        <button onClick={this.cambiarDatos.bind(this)}>Boton</button>
      </>
    );
  }
}

export default State;
