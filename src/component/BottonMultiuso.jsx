import React from 'react'

const BottonMultiuso = ({color = 'blue', label, onClick, children}) => {
    // Definir los estilos con base en las props
  const style = {
    backgroundColor: color,
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div>
         <button style={style} onClick={onClick}>
            {children || label || 'Predeterminado'}
         </button>
    </div>
  )
}

export default BottonMultiuso
