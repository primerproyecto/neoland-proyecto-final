import React, { useContext, useEffect, useRef, useState } from 'react';
import { Heart } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

//import contexto de carrito
import { CartContext } from '../../context/cartContext';
//importo contexto de productos
import { ProductsContent } from '../../context/productsContext.jsx';
//utilidades
import { estaPresenteEnArray } from '../../utils';
import { Figure, Imagen, LoadingWrapper } from './ProductStyes.jsx';

const ProductsPage = () => {
  const [terminoDeBusqueda, setTerminoDeBusqueda] = useState('');
  const {
    productos,
    setProductos,
    mujer,
    hombre,
    joyas,
    electronica,
    todasLasCategorias,
    isLoading,
  } = useContext(ProductsContent);

  const [favoritos, setFavoritos] = useState(() => {
    const resultados = JSON.parse(window.localStorage.getItem('favoritos'));
    if (resultados) {
      return resultados;
    } else {
      return [];
    }
  });
  console.log('desde el estado', favoritos);

  const { addToCart } = useContext(CartContext);
  // referencia para hace focus onload
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // buscar desde campo input
  const buscar = (e) => {
    e.preventDefault();
    if (terminoDeBusqueda) {
      setProductos(
        productos.filter((item) => {
          return item.title.toLocaleLowerCase().includes(terminoDeBusqueda);
        }),
      );
    }
  };

  //checquear que sea favorito

  const addToFavorites = (item) => {
    if (!estaPresenteEnArray(favoritos, item.title)) {
      setFavoritos([...favoritos, item.title]);
      //lo meto al localstorage
      window.localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
  };
  const removeFavorite = (item) => {
    const newArray = favoritos.filter((favorito) => favorito !== item.title);
    console.log('que es newarray', newArray), setFavoritos(newArray);
    window.localStorage.setItem('favoritos', JSON.stringify(favoritos));
  };

  return (
    <div>
      {!isLoading && (
        <LoadingWrapper>
          <FormattedMessage id="app.header.cargando" defaultMessage="Cargando..." />
        </LoadingWrapper>
      )}

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
            {terminoDeBusqueda && <button onClick={todasLasCategorias}>Limpiar</button>}
          </form>
        </div>
      </section>
      <section>
        <button onClick={hombre}>
          <FormattedMessage
            id="app.header.categoria_modaHombre"
            defaultMessage="Moda hombre"
          />
        </button>
        <button onClick={mujer}>
          <FormattedMessage
            id="app.header.categoria_modaMujer"
            defaultMessage="Moda hombre"
          />
        </button>
        <button onClick={joyas}>
          <FormattedMessage id="app.header.categoria_joya" defaultMessage="Moda hombre" />
        </button>
        <button onClick={electronica}>
          <FormattedMessage
            id="app.header.categoria_electronica"
            defaultMessage="Moda hombre"
          />
        </button>
        <button onClick={todasLasCategorias}>Todas</button>
      </section>
      <section>
        {/* <Paginacion
          currentPage={currentPage}
          total={productos.length}
          limit={5}
          onPageChange={(pagina) => setCurrentPage(pagina)}
        /> */}
      </section>
      <section className="columnas">
        {productos?.map((item) => {
          return (
            <Figure key={item.id}>
              <Link to={`/productos/` + item.id}>
                <Imagen src={item.image} alt=" " />
              </Link>

              {favoritos.some((favorito) => item.title === favorito) ? <Heart /> : ''}
              <figcaption>{item.title}</figcaption>
              <p>Categoria {item.category}</p>
              <div>
                {favoritos.some((favorito) => item.title === favorito) ? (
                  <button
                    data-nombre={item.title}
                    onClick={() => {
                      removeFavorite(item);
                    }}
                  >
                    <FormattedMessage
                      id="app.header.categoria_removeFavoritos"
                      defaultMessage="Moda hombre"
                    />
                  </button>
                ) : (
                  <button
                    data-nombre={item.title}
                    onClick={() => {
                      addToFavorites(item);
                    }}
                  >
                    <FormattedMessage
                      id="app.header.categoria_addFavoritos"
                      defaultMessage="Moda hombre"
                    />
                  </button>
                )}

                <button
                  onClick={() => {
                    addToCart(item, item.id);
                  }}
                >
                  <FormattedMessage
                    id="app.header.categoria_addToCart"
                    defaultMessage="Moda hombre"
                  />
                </button>
              </div>
            </Figure>
          );
        })}
      </section>
    </div>
  );
};

export default ProductsPage;
