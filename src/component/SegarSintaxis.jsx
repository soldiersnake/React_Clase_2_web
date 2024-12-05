import React, { useEffect, useState } from 'react'

const SegarSintaxis = (props) => {

    const [arr, setArr] = useState([1, 2, 3, 4]);
    const [loop, setLoop] = useState(0);
    const randonNumber = Math.floor(Math.random() * 100) + 1;

    console.log('props', props.name, props.edad, props.admin);
    
    //Spread operator o operador de propagacion  (...)
    useEffect(() => {
        setTimeout(() => {
            setLoop(loop + 1)
        }, 2000);
        setArr([ ...arr, randonNumber]);
        console.log(arr);
        console.log("El valor del loop es :", loop);
        
    },[])

  return (
    <>
      <h2>Sugar sintaxis</h2>
      <p>Arreglo {arr.join(", ")}</p>
      <p>TU nombre es: {props.name} </p>
      <button>{props.admin ? "Admin" : "Usuario"}</button>

      {props.edad >= 18 && (
          <span> Feliz cumpleaños, has cumplido {props.edad} años.</span>
        )}
        
    </>
  )
}

export default SegarSintaxis
