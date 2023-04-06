import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

//paginacion
import Paginacion from '../../components/paginacion/Paginacion.jsx';
//import contexto de carrito
import { CartContext } from '../../context/cartContext';
//importo contexto de productos
import { ProductsContent } from '../../context/productsContext.jsx';
import { Figure, Imagen } from './ProductStyes.jsx';

const ProductsPage = () => {
  const [terminoDeBusqueda, setTerminoDeBusqueda] = useState('');
  const { productos } = useContext(ProductsContent);
  const [products, setProducts] = useState([]);

  //paginacion
  const [currentPage, setCurrentPage] = useState(1);

  const { addToCart } = useContext(CartContext);
  // referencia para hace focus onload
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    setProducts(productos);
  }, [productos]);

  // moda hombre
  const modaHombre = () => {
    setProducts(
      productos.filter((item) => {
        return item.category === "men's clothing";
      }),
    );
  };
  // moda mujer
  const modaMujer = () => {
    setProducts(
      productos.filter((item) => {
        return item.category === "women's clothing";
      }),
    );
  };
  // jolleria
  const joyeria = () => {
    setProducts(
      productos.filter((item) => {
        return item.category === 'jewelery';
      }),
    );
  };
  // moda mujer
  const tecnologia = () => {
    setProducts(
      productos.filter((item) => {
        return item.category === 'electronics';
      }),
    );
  };
  // buscar desde campo input
  const buscar = (e) => {
    e.preventDefault();
    if (terminoDeBusqueda) {
      setProducts(
        productos.filter((item) => {
          return item.title.toLocaleLowerCase().includes(terminoDeBusqueda);
        }),
      );
    }
  };
  //limpiar input de busqueda tras reset.
  const resetBusqueda = (e) => {
    e.preventDefault();
    setTerminoDeBusqueda('');
    setProducts(productos);
  };

  return (
    <div>
      <section>
        <div className="wrapper">
          <form>
            <input
              type="text"
              ref={inputRef}
              placeholder="Búsqueda de producto"
              value={terminoDeBusqueda}
              onChange={(e) => setTerminoDeBusqueda(e.target.value.toLocaleLowerCase())}
            />
            <button onClick={buscar}>buscar</button>
            {terminoDeBusqueda && <button onClick={resetBusqueda}>Limpiar</button>}
          </form>
        </div>
      </section>
      <section>
        <button onClick={modaHombre}>Moda de hombre</button>
        <button onClick={modaMujer}>Moda de mujer</button>
        <button onClick={joyeria}>Joyería</button>
        <button onClick={tecnologia}>Tencología</button>
      </section>
      <section>
        <Paginacion
          currentPage={currentPage}
          total={productos.length}
          limit={5}
          onPageChange={(pagina) => setCurrentPage(pagina)}
        />
      </section>
      <section className="columnas">
        {products.map((item) => {
          return (
            <Figure key={item.id}>
              <Link to={`/productos/` + item.id}>
                <Imagen src={item.image} alt=" " />
              </Link>
              <figcaption>{item.title}</figcaption>
              <p>Categoria {item.category}</p>
              <div>
                <button
                  onClick={() => {
                    addToCart(item, item.id);
                  }}
                >
                  Añadir a favoritos
                </button>
                <button>Añadir al carrito</button>
              </div>
            </Figure>
          );
        })}
      </section>
    </div>
  );
};

export default ProductsPage;
