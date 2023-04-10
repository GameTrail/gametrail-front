import type { FC, ChangeEvent } from 'react';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import type { Game } from '@/models/Game/types';
import { normalizeImage } from '@/utils/normalizeImage';
import {
  Container, Input, StyledReactPaginate, Row, Titulo, Titulo2, Cajas, Cuerpo, Cuerpo2, Fila, Mascara, Button, Buscador, CabezaTabla, Tabla, Boton,
} from './styles';

export type Props = {
  games: Game[];
  searchQuery: string;
  handleUpdateSearchQuery: (e: ChangeEvent<HTMLInputElement>) => void;
};

const GameList: FC<Props> = ({ games, searchQuery, handleUpdateSearchQuery }) => {
  const [showDiv2, setShowDiv2] = useState(true);
  const [buttonText, setButtonText] = useState('Desactivado');
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 12;
  const pageCount = Math.ceil(games.length / PER_PAGE);

  const toggleDiv = () => {
    setShowDiv2(!showDiv2);
    if (showDiv2) {
      setButtonText('Activado');
    } else {
      setButtonText('Desactivado');
    }
  };

  const handleClickGameDetails: any = (id: number) => {
    router.push(`/game/${id}`);
  };

  function handlePageClick({ selected: selectedPage }: { selected: number }) {
    setCurrentPage(selectedPage);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (

    <Container>
      <Buscador>
        <Input type="text" value={searchQuery} onChange={handleUpdateSearchQuery} placeholder="Buscar..." />
        <Titulo>Lista de juegos</Titulo>
        <Titulo2>Modo Lista</Titulo2>
        <Boton onClick={toggleDiv}>{buttonText}</Boton>
      </Buscador>
      {showDiv2 ? (
        <>
          <Cuerpo>

            {
              games.map((game) => (
                <Cajas key={game.id} onClick={() => handleClickGameDetails(game.id)}>
                  <Mascara>
                    <img src={normalizeImage(game.image)} width={450} height={600} alt="nu" />
                  </Mascara>
                  <h2>{game.name}</h2>

                  <Button>
                    Añadir
                  </Button>

                </Cajas>
              ))
            }
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

                {games.map((game) => (

                  <Row key={game.id} onClick={() => handleClickGameDetails(game.id)}>
                    <Fila><img src={normalizeImage(game.image)} width={80} height={100} alt="nu" /></Fila>
                    <Fila><h2>{game.name}</h2></Fila>
                    <Fila><h2>{game.releaseDate}</h2></Fila>
                    <Fila>+</Fila>
                  </Row>

                ))}
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
