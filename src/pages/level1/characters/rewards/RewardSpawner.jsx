import React, { useState, useEffect } from "react";
import RewardBar from "./RewardBar";

const RewardSpawner = () => {
  const [collectedItems, setCollectedItems] = useState([]);
  const [spawnedItems, setSpawnedItems] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  // Función para agregar una recompensa al tablero
  const collectItem = (itemSymbol) => {
    // Busca si ya se ha recolectado esta recompensa
    const itemIndex = collectedItems.findIndex(
      (item) => item.symbol === itemSymbol
    );

    if (itemIndex !== -1) {
      // Si ya se ha recolectado, aumenta su cantidad
      setCollectedItems((prevItems) => {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity++;
        return newItems;
      });
    } else {
      // Si es una nueva recompensa, la agrega al tablero con cantidad 1
      setCollectedItems((prevItems) => [
        ...prevItems,
        { symbol: itemSymbol, quantity: 1 },
      ]);
    }
  };

  // Función para generar una recompensa en una posición aleatoria
  const spawnItem = () => {
    // Lista de símbolos de recompensa disponibles
    const rewardSymbols = ["🍎", "🍌", "💎", "💰"];

    // Escoge aleatoriamente un símbolo de la lista
    const randomSymbol =
      rewardSymbols[Math.floor(Math.random() * rewardSymbols.length)];

    // Genera una posición aleatoria
    const randomX = Math.random() * 1;
    const randomY = Math.random() * 1;

    console.log(randomSymbol, randomX, randomY);

    // Agrega la recompensa a la lista de recompensas generadas
    setSpawnedItems((prevItems) => [
      ...prevItems,
      { symbol: randomSymbol, x: randomX, y: randomY },
    ]);

    // Establece un temporizador para que la recompensa desaparezca después de 5 segundos
    setTimeout(() => {
      setSpawnedItems((prevItems) =>
        prevItems.filter((item) => item.symbol !== randomSymbol)
      );
    }, 5000);
  };

  useEffect(() => {
    // Llama a handleStartGame al iniciar RewardSpawner
    handleStartGame();
  }, []);

  useEffect(() => {
    // Genera recompensas en un bucle
    const intervalId = setInterval(() => {
      spawnItem();
    }, 3000); // Genera una nueva recompensa cada 3 segundos

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  const handleStartGame = () => {
    // Aquí puedes poner el código para iniciar el juego
    console.log("¡Juego iniciado!");
    setGameStarted(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        cursor: "pointer",
      }}
      onClick={handleStartGame}
    >
      {gameStarted && (
        <div style={{ position: "absolute", bottom: "40px", right: "40px" }}>
          {/* Muestra las recompensas recolectadas */}
          <RewardBar items={collectedItems} />
        </div>
      )}
      {/* Renderiza las recompensas generadas */}
      {spawnedItems.map((item, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${item.y}%`,
            left: `${item.x}%`,
            fontSize: "100px",
            cursor: "pointer",
          }}
          onClick={() => collectItem(item.symbol)}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  );
};

export default RewardSpawner;









