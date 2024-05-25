import React from "react";

const HealthBar = ({ lives, maxLives }) => {
  // Calcula el porcentaje de vidas restantes
  const healthPercentage = (lives / maxLives) * 100;

  return (
    <div style={{ display: "flex", alignItems: "center", position: 'absolute', top: '20px', right: '500px', zIndex: '9999' }}>
      {/* Muestra los corazones */}
      {Array.from({ length: maxLives }, (_, index) => (
        <div key={index} style={{ marginRight: "5px" }}>
          {index < lives ? (
            <img
              src="/assets/images/corazonRojo.svg" // Ruta de la imagen de corazón lleno
              alt="heart"
              style={{ width: "20px", height: "20px" }}
            />
          ) : (
            <img
              src="/assets/images/corazonNegro.svg" // Ruta de la imagen de corazón vacío
              alt="empty heart"
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </div>
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



