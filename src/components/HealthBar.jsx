import React from "react";

const HealthBar = ({ lives, maxLives }) => {
  // Calcula el porcentaje de vidas restantes
  const healthPercentage = (lives / maxLives) * 100;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Muestra los corazones */}
      {Array.from({ length: maxLives }, (_, index) => (
        <div
          key={index}
          style={{
            width: "20px",
            height: "20px",
            background: index < lives ? "red" : "transparent",
            marginRight: "5px",
            borderRadius: "50%",
          }}
        />
      ))}
      {/* Muestra la barra de progreso */}
      <div
        style={{
          width: "100px",
          height: "10px",
          background: "lightgray",
          marginLeft: "10px",
        }}
      >
        <div
          style={{
            width: `${healthPercentage}%`, // Se corrigió aquí
            height: "100%",
            background: "green",
          }}
        />
      </div>
    </div>
  );
};

export default HealthBar;


