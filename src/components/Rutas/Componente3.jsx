import React from 'react'
import { useParams } from 'react-router-dom';

const Componente3 = () => {
    let params = useParams();
    console.log(params);
  return (
    <div>Componente3</div>
  )
}

export default Componente3