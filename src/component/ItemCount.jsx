import React, { useState } from "react";
import { styles } from "../service/style";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  // Funciones para incrementar y decrementar
  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Camisa Tiger</h2>

      <div style={styles.counterContainer}>
        {/* Botón de Decrementar */}
        <button
          style={{
            ...styles.button,
            ...(count === 1 ? styles.disabledButton : {}),
          }}
          onClick={handleDecrement}
          disabled={count === 1}
        >
          -
        </button>

        {/* Contador */}
        <span style={styles.counter}>{count}</span>

        {/* Botón de Incrementar */}
        <button
          style={{
            ...styles.button,
            ...(count === stock ? styles.disabledButton : {}),
          }}
          onClick={handleIncrement}
          disabled={count === stock}
        >
          +
        </button>
      </div>

      {/* Botón de Agregar al carrito */}
      <button style={styles.addButton} onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
