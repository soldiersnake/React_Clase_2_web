import { useEffect, useState } from "react";

const SugarSintaxis = (props) => {
  //Desestructuracion y valores por defecto en props
  console.log(props.saludo);
  console.log(props.edad);
  console.log("props :", props);

  //Spread operator o operador de propagacion
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [loop, setLoop] = useState(0);
  const randonNumber = Math.floor(Math.random() * 100) + 1; //numero aleatoreo

  useEffect(() => {
    setTimeout(() => {
      setLoop(loop + 1);
    }, 5000);
    // setArr([...arr, randonNumber ]);
    setArr((preArr) => [...preArr, randonNumber]); // evitamos problemas de actualizado en funciones asincronicas
    console.log(arr);
    console.log("El valor del loop es : ", loop);
  }, [loop]);

  //Desestructuración en Funciones
  const mostrarUsuario = ({ nombre, edad }) => {
    console.log(`El usuario es ${nombre} y tiene ${edad} años.`);
  };
  const usuario = {
    nombre: props.saludo,
    edad: props.edad,
    esAdmin: props.admin,
  };
  mostrarUsuario(usuario);

  //PROPIEDADES DINAMICAS - Permiten crear claves (keys) en objetos utilizando expresiones dinámicas en lugar de nombres estáticos
  const id = 42;
  const objeto = {
    foo: "bar",
    ["baz" + id]: "valor dinámico",
  };

  console.log("objeto", objeto);
  // Explicación:
  // Usamos ["baz" + id] para crear una clave dinámica, combinando el texto "baz" con el valor de id (42).
  // Esto es útil cuando las claves dependen de valores variables

  // DEEP MATCHING - Permite extraer valores anidados de un objeto mediante desestructuración.
  const data = { a: { b: { c: 42 } } };

  const { a: { b: { c: valor }, }, } = data;
  console.log(valor);
  // Resultado: 42

  // ASIGNACION EN DESECTRUCTURACION - Permite asignar valores predeterminados a variables durante la desestructuración.
  const arreglo = [4, 5];
  const [a = 1, b = 2, c = 3, d = 4] = arreglo;
  console.log(a, b, c, d); 
  // Resultado: 4, 5, 3, 4

  return (
    <>
      <h1>Sugar Sintaxis</h1>
      <p>Arreglo: {arr.join(", ")}</p> {/* Muestra los elementos del arreglo */}
      <p>Loop: {loop}</p> {/* Muestra el número de loops */}
      <p>
        Hola como estas?, {props.saludo}
        {props.edad >= 18 && (
          <span> Feliz cumpleaños, has cumplido {props.edad} años.</span>
        )}
      </p>
      {/* OPERADOR TERNARIO */}
      <button>{props.admin ? "Admin" : "Usuario"}</button>
    </>
  );
};

export default SugarSintaxis;
