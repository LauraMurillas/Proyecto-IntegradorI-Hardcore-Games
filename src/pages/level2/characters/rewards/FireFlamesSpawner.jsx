import React, { useState, useEffect } from 'react';
import { Fuego } from "../../Fuego";

const BoardSize = 40; // Tamaño del tablero

const FireFlamesSpawner = () => {
  const [spawnedItems, setSpawnedItems] = useState([]);

  useEffect(() => {
    const loadModels = () => {
      const spawnFlame = () => {
        const id = Math.random().toString(36).substr(2, 9);
        const position = getRandomPosition();

        setSpawnedItems((prevItems) => [
          ...prevItems,
          { id, position }
        ]);

        setTimeout(() => {
          setSpawnedItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
          );
        }, 4000); // Tiempo para que desaparezca automáticamente después de 4 segundos
      };

      const intervalId = setInterval(spawnFlame, getRandomInterval());

      // Cargar una llama adicional después de 3 segundos
      setTimeout(spawnFlame, 1000);

      return () => clearInterval(intervalId);
    };

    loadModels();
  }, []);

  const getRandomInterval = () => {
    return Math.floor(Math.random() * 1000) + 1000;
  };

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * BoardSize) - BoardSize / 2; // Coordenada x dentro del rango [-BoardSize/2, BoardSize/2]
    const y = 0.3; // Altura fija sobre el tablero
    const z = Math.floor(Math.random() * BoardSize) - BoardSize / 2; // Coordenada z dentro del rango [-BoardSize/2, BoardSize/2]
    return [x, y, z];
  };

  return (
    <group>
      {spawnedItems.map((item) => (
        <Fuego
          key={item.id}
          position={item.position}
          scale={[0.5, 0.5, 0.5]}
        />
      ))}
    </group>
  );
};

export default FireFlamesSpawner;