import img1 from '../img/producto1.jpg'
import img2 from '../img/producto2.jpg'
import img3 from '../img/producto3.jpg'

const MainPage = () => {

  return (
    <>
      <main className="contenido-principal contenedor">
        <h2 className="text-center">Nuestros Michis</h2>

        <div className="listado-productos">
          <div className="producto">
            <img src={img1} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Michi 1</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$1,000</p>
              <a href="#" className="btn">
                Agregar al carrito
              </a>
            </div>
          </div>

          <div className="producto">
            <img src={img2} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Michi 2</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$1,000</p>
              <a href="#" className="btn">
                Agregar al carrito
              </a>
            </div>
          </div>

          <div className="producto">
            <img src={img3} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Michi 3</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$1,000</p>
              <a href="#" className="btn">
                Agregar al carrito
              </a>
            </div>
          </div>

          {/* <div className="producto">
            <img src="img/producto4.jpg" alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Michi 4</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$1,000</p>
              <a href="#" className="btn">
                Agregar al carrito
              </a>
            </div>
          </div>

          <div className="producto">
            <img src="img/producto5.jpg" alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Michi 5</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$1,000</p>
              <a href="#" className="btn">
                Agregar al carrito
              </a>
            </div>
          </div> */}

          {/* <div className="producto">
            <img src="img/producto6.jpg" alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Michi 6</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$1,000</p>
              <a href="#" className="btn">
                Agregar al carrito
              </a>
            </div>
          </div> */}

        </div>
      </main>
    </>
  );
};

export default MainPage;
