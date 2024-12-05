import Categorias from "./component/Categorias";
import { Header } from "./component/Header";
import MainPage from "./component/MainPage";
import { Navegacion } from "./component/Navegacion";
import SobreNosotros from "./component/SobreNosotros";
import Footer from "./component/Footer";
import SugarSintaxis from "./component/SugarSintaxis";
import ButtonMultiuso from "./component/ButtonMultiuso";
import ItemCount from "./component/ItemCount";
import EjemplosJSX from "./component/EjemplosJSX";

function App() {


  //ALERTA PARA CONTADOR
  const handleAddToCart = (quantity) => {
    alert(`Has agregado ${quantity} producto(s) al carrito`);
  };
  return (
    <>
    
      {/* <SugarSintaxis saludo={'Juan'} edad={18} admin={false}/> */}

        {/* EJERCICIO DE BOTON CON ESTILOS */}
      {/* Ejemplo 1: Cambiar color y texto */}
      {/* <ButtonMultiuso
        color="red"
        label="Clic aquí"
        onClick={() => alert("¡Botón clickeado!")}
      /> */}
      {/* Ejemplo 2: Botón con valor predeterminado */}
      {/* <ButtonMultiuso
        onClick={() => alert("Botón con estilos predeterminados clickeado")}
      /> */}
      {/* Ejemplo 3: Botón con otro color */}
      {/* <ButtonMultiuso
        color="green"
        label="Aceptar"
        onClick={() => console.log("Botón verde clickeado")}
      /> */}
      {/* Ejemplo 4: Botón con Children */}
      {/* <ButtonMultiuso
        color="pink"
        label="Aceptar"
        onClick={() => console.log("Botón verde clickeado")}
        children={'Hola a todos'}
      /> */}

      {/* EJEMPLO JSX */}
      {/* <EjemplosJSX/> */}

      {/* EJERCICIO 2 BOTON CONTADOR */}
      {/* <h1>Tienda de Ropa</h1>
    <ItemCount stock={10} initial={1} onAdd={handleAddToCart}/> */}

        {/* WEB PASADA A REACT */}
      {/* <Header/>
      <Navegacion/>
      <Categorias/>
      <SobreNosotros/>
      <MainPage/>
      <Footer/> */}
    </>
  );
}

export default App;
