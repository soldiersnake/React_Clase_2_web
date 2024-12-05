import img1 from "../img/categoria1.jpg";

const EjemplosJSX = () => {
  const nombre = "Juan";
  const esVisible = true;
  const valor = false;
  const numeros = [1, 2, 3, 4];
  const estilo = { color: "red", fontSize: "20px" };

  const handleClick = () => {
    alert("Holis");
  };

  return (
    // Se llama className
    <div className="btn">
      {/* Todas las etiquetas deben de cerrarse /  */}
      <img src={img1} alt="Imagen" />
      <input type="text" />

      {/* Expreciones javascript entre llaves {} */}
      <h1>Hola, {nombre}!</h1>

      {/* Solo se puede devolver un componente padre */}
      {/* <div></div> */}

      {/* Atributos en cammelCase handleChange onClick */}
      <button onClick={handleClick}>Haz clic aquí</button>

      {/* SE Puede usar condicionales */}
      <div>{esVisible ? <p>Visible</p> : <p>Oculto</p>}</div>

      {/* BUCLES */}
      <u>
        {numeros.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </u>

      {/* Valores null, undefined, y false no se renderizan */}
      <p>{valor}</p>

      {/* Estilos inline se escriben como un objeto */}
      <p style={estilo}>Texto con estilo</p>

      {/* Las etiquetas for y label usan htmlFor */}
      <label htmlFor="input">Etiqueta:</label>
      <input id="input" type="text" />

      {/* Los comentarios se escriben con  */}
      {/* ... */}
    </div>
  );
};

export default EjemplosJSX;
