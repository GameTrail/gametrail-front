import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Game } from '@/models/Game/types';
import {
  Container, Input, StyledReactPaginate, Row, Titulo, Titulo2, Cajas, Cuerpo, Cuerpo2, Fila, Mascara, P, Buscador, CabezaTabla, Tabla, Boton,
} from './styles';

export type Props = {
  games: Game[];
};

const GameList: FC<Props> = ({ games }) => {
  const [busqueda, setbusqueda] = useState('');
  const [resultados, setresultados] = useState<Game[]>([]);

  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(games.length / PER_PAGE);

  useEffect(() => {
    const resultadoFinal = games.filter((game) => Object.values(game).some((value) => typeof value === 'string'
      && value.toLowerCase().includes(busqueda.toLowerCase())));
    setresultados(resultadoFinal);
  }, [busqueda, games]);

  const evento = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbusqueda(event.target.value);
  };

  const [showDiv2, setShowDiv2] = useState(true);
  const [buttonText, setButtonText] = useState('Desactivado');

  const toggleDiv = () => {
    setShowDiv2(!showDiv2);
    if (showDiv2) {
      setButtonText('Activado');
    } else {
      setButtonText('Desactivado');
    }
  };

  function handlePageClick({ selected: selectedPage }: { selected: number }) {
    setCurrentPage(selectedPage);
  }

  return (

    <Container>
      <Buscador>
        <Input type="text" value={busqueda} onChange={evento} placeholder="Buscar..." />
        <Titulo>Lista de juegos</Titulo>
        <Titulo2>Modo Lista</Titulo2>
        <Boton onClick={toggleDiv}>{buttonText}</Boton>
      </Buscador>
      {showDiv2 ? (
        <>
          <Cuerpo>

            {resultados.length === 0 && <h3>No hemos encontrado ningún resultado</h3>}
            {resultados.length > 0 && (

              resultados.slice(offset, offset + PER_PAGE).map((game) => (
                <Cajas key={game.id}>
                  <Mascara>
                    <Image src={game.image} width={450} height={600} alt="nu" />
                  </Mascara>
                  <h2>{game.name}</h2>

                  <P>
                    Añadir
                  </P>

                </Cajas>
              ))

            )}
          </Cuerpo>
          <StyledReactPaginate
            previousLabel="← Anterior"
            nextLabel="Siguiente →"
            pageCount={pageCount}
            // eslint-disable-next-line react/jsx-no-bind
            onPageChange={handlePageClick}
            containerClassName="pagination"
            previousLinkClassName="pagination__link"
            nextLinkClassName="pagination__link"
            disabledClassName="pagination__link--disabled"
            activeClassName="pagination__link--active"
            breakClassName="pagination__break"
          />

        </>
      ) : (
        <>
          <Cuerpo2>
            <Tabla>
              <CabezaTabla>
                <tr>
                  <th>Portada</th>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                </tr>
              </CabezaTabla>
              <tbody>

                {resultados.length === 0 && <h3>No hemos encontrado ningún resultado</h3>}
                {resultados.length > 0 && (

                  resultados.slice(offset, offset + PER_PAGE).map((game) => (

                    <Row key={game.id}>
                      <Fila><Image src={game.image} width={80} height={100} alt="nu" /></Fila>
                      <Fila><h2>{game.name}</h2></Fila>
                      <Fila><h2>{game.releaseDate}</h2></Fila>
                      <Fila>+</Fila>
                    </Row>

                  ))

                )}

              </tbody>
            </Tabla>

          </Cuerpo2>
          <StyledReactPaginate
            previousLabel="← Anterior"
            nextLabel="Siguiente →"
            pageCount={pageCount}
            // eslint-disable-next-line react/jsx-no-bind
            onPageChange={handlePageClick}
            containerClassName="pagination"
            previousLinkClassName="pagination__link"
            nextLinkClassName="pagination__link"
            disabledClassName="pagination__link--disabled"
            activeClassName="pagination__link--active"
            breakClassName="pagination__break"
          />
        </>
      )}

    </Container>
  );
};

export default GameList;
