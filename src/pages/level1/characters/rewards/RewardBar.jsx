import React from "react";

const RewardBar = ({ items }) => {
  return (
    <div>
      {/* Mostrar las recompensas recolectadas junto con su cantidad */}
      {items.map((item, index) => (
        <div key={index}>
          {item.symbol}: {item.quantity}
        </div>
      ))}
    </div>
  );
};

export default RewardBar;


