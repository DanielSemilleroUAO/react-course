import React from "react";
import styles from "./EstilosModulo.module.css";

class EstilosModulo extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <h1 className={styles.titulo}>Estilos modulos</h1>
      </>
    );
  }
}

export default EstilosModulo;
