import React, { useState } from "react";
import { styles } from "../service/style";

export const ItemsCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

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
    <>
      <div style={styles.container}>
        <h2 style={styles.title}>Camisa tiger</h2>

        <div style={styles.counterContainer}>
          {/* boton de incrementar */}
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

          {/* Container */}
          <span style={styles.counter}> {count} </span>

          {/* boton de incrementar */}
          <button
            style={{
              ...styles.button,
              ...(count === stock ? styles.disabledButton : {}),
            }}
            onClick={handleIncrement}
            disabled={count == stock}
          >
            +
          </button>

          {/* boton de agregar al carrito */}
        </div>
        <button style={styles.addButton} onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
