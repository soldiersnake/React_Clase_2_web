
import img1 from '../img/categoria1.jpg'
import img2 from '../img/categoria2.jpg'
import img3 from '../img/categoria3.jpg'

const Categorias = () => {

  return (
    <>
      <section className="contenedor categorias">
        <h2 className="text-center">Categorias de Michis</h2>

        <div className="listado-categorias">
          <div className="categorias">
            <img src={img1} alt="Imagen Categoria" />
            <a href="#">Oficina</a>
          </div>

          <div className="categorias">
            <img src={img2} alt="Imagen Categoria" />
            <a href="#">Hogar</a>
          </div>

          <div className="categorias">
            <img src={img3} alt="Imagen Categoria" />
            <a href="#">Cocina</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categorias;
