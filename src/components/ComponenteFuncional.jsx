/**
 * Dado el ComponenteClase.jsx, convertirlo en componente funcional
 * que realice exactamente lo mismo
 */

import React, { useEffect, useState } from "react";

const Clock = (props) => {
  // Estado del component
  const initialState = {
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, [state]);

  function tick() {
    setState((prevState) => {
      return { ...prevState, fecha: new Date(), edad: state.edad + 1 };
    });
  }
  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default Clock;
