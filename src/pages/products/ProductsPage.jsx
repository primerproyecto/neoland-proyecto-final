import React, { useContext, useState } from 'react';
import { Heart } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Buscador from '../../components/buscador/Buscador';
//import contexto de carrito
import { CartContext } from '../../context/cartContext';
//importo contexto de productos
import { ProductsContent } from '../../context/productsContext.jsx';
import {
  Figcampiton,
  Figcaption,
  Figure,
  FilterByCategory,
  Imagen,
  LoadingWrapper,
} from './ProductStyes.jsx';

const ProductsPage = () => {
  const { productos, mujer, hombre, joyas, electronica, todasLasCategorias, isLoading } =
    useContext(ProductsContent);

  const [favoritos, setFavoritos] = useState(() => {
    const localStorageImportado = JSON.parse(window.localStorage.getItem('USER'));
    /* localStorageImportado.favoritos; */

    const resultados = localStorageImportado.favoritos;

    if (resultados) {
      return resultados;
    } else {
      return [];
    }
  });

  const { addToCart } = useContext(CartContext);

  const addToFavorites = (item) => {
    setFavoritos([...favoritos, item.title]);

    const localStorageImportado = JSON.parse(window.localStorage.getItem('USER'));
    localStorageImportado.favoritos = [...favoritos, item.title];
    window.localStorage.setItem('USER', JSON.stringify(localStorageImportado));
  };
  const removeFavorite = (item) => {
    const newArray = favoritos.filter((favorito) => favorito !== item.title);
    setFavoritos(newArray);

    const localStorageImportado = JSON.parse(window.localStorage.getItem('USER'));
    localStorageImportado.favoritos = favoritos.filter(
      (favorito) => favorito !== item.title,
    );
    window.localStorage.setItem('USER', JSON.stringify(localStorageImportado));
  };

  return (
    <div>
      {!isLoading && (
        <LoadingWrapper>
          <FormattedMessage id="app.header.cargando" defaultMessage="Cargando..." />
        </LoadingWrapper>
      )}
      <Buscador />
      <FilterByCategory>
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
      </FilterByCategory>
      {/* <ol
        style={{
          position: 'fixed',
          bottom: '0px',
          right: '0px',
          backgroundColor: 'hotpink',
          color: 'white',
          width: '300px',
          zIndex: 9999,
          padding: '1rem 1rem 1rem 2rem',
        }}
      >
        {productos.map((producto, index) => (
          <li key={index}>{producto.title}</li>
        ))}
      </ol> */}
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
              <Figcaption>{item.title}</Figcaption>
              <Figcampiton>{item.category}</Figcampiton>
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
                      defaultMessage="Añadir a favoritos"
                    />
                  </button>
                )}

                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  <FormattedMessage
                    id="app.header.categoria_addToCart"
                    defaultMessage="Añadir al carrito"
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
