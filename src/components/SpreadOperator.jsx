import React from 'react'

const SpreadOperator = () => {

    const animales = ['ciervo','leon','jirafa'];
    const animalesDom = ['perro', 'gato'];

    const animals = [...animales, ...animalesDom]

  return (
    <>
    <h1>{animals}</h1>
    </>
  )
}

export default SpreadOperator