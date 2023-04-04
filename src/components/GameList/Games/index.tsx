import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { Game } from '@/models/Game/types';
import type { GameInList, UserInDetails } from '@/models/GameInUserList/types';
import { getUserCookie } from '@/utils/login';
import { normalizeImage } from '@/utils/normalizeImage';
import {
  Container, Input, StyledReactPaginate, Row, Titulo, Titulo2, Cajas, Cuerpo, Cuerpo2, Fila, Mascara, Button, Buscador, CabezaTabla, Tabla, Boton, GameNameAnonymous,
} from './styles';

export type Props = {
  games: Game[];
};

const GameList: FC<Props> = ({ games }) => {
  const [busqueda, setbusqueda] = useState('');
  const [resultados, setresultados] = useState<Game[]>([]);
  const [showDiv2, setShowDiv2] = useState(true);
  const [buttonText, setButtonText] = useState('Desactivado');
  const [userGames, setUserGames] = useState<GameInList[]>([]);
  const user = getUserCookie();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 12;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(games.length / PER_PAGE);

  const evento = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbusqueda(event.target.value);
  };

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

  const checkGameInUserList = (gameId: number) => userGames?.some((game) => (game.id === gameId));

  useEffect(() => {
    const gamesToRender = games.filter((game) => Object.values(game).some((value) => typeof value === 'string'
      && value.toLowerCase().includes(busqueda.toLowerCase())));
    setresultados(gamesToRender);
  }, [busqueda, games]);

  useEffect(() => {
    const getUserGames = async (userId: number) => {
      const res = await fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/user/${userId}`);
      const data: UserInDetails = await res.json();
      console.log(data.games);
      setUserGames(data.games);
    };
    if (user) getUserGames(user?.id);
  }, [user]);
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
                <Cajas key={game.id} onClick={() => handleClickGameDetails(game.id)}>
                  <Mascara>
                    <img src={normalizeImage(game.image)} width={450} height={600} alt="nu" />
                  </Mascara>
                  <GameNameAnonymous>{game.name}</GameNameAnonymous>

                  {user && checkGameInUserList(game.id) ? (
                    <Button>
                      En tu lista
                    </Button>
                  ) : (

                    <Boton>
                      Añadir
                    </Boton>
                  )}

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

                    <Row key={game.id} onClick={() => handleClickGameDetails(game.id)}>
                      <Fila><img src={normalizeImage(game.image)} width={80} height={100} alt="nu" /></Fila>
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
