import type { FC, ChangeEvent } from 'react';
import React, {
  useEffect, useState,
} from 'react';

import { useRouter } from 'next/router';
import type { Game } from '@/models/Game/types';
import type { GameInList, UserInDetails } from '@/models/GameInUserList/types';
import { GameListState } from '@/models/GameList/types';
import { getUserCookie } from '@/utils/login';
import { normalizeImage } from '@/utils/normalizeImage';
import {
  Container, Input, StyledReactPaginate, Row, Titulo, Titulo2, Cajas, Cuerpo, Cuerpo2, Fila, Mascara, Button, Buscador, CabezaTabla, Tabla, Boton, ButtonGameInList, GameName,
} from './styles';

export type Props = {
  games: Game[];
  searchQuery: string;
  handleUpdateSearchQuery: (e: ChangeEvent<HTMLInputElement>) => void;
};

const GameList: FC<Props> = ({ games, searchQuery, handleUpdateSearchQuery }) => {
  const [showDiv2, setShowDiv2] = useState(true);
  const [buttonText, setButtonText] = useState('Desactivado');
  const [userGames, setUserGames] = useState<GameInList[]>([]);
  const user = getUserCookie();
  const token = user?.token;
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

  const handleOnClick = async (gameId: number) => {
    if (user && token) {
      const requestData = {
        user: user.id.toString(),
        game: gameId.toString(),
        status: GameListState.PENDING.toString(),
      };
      try {
        const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/gameList/game', {
          method: 'POST',
          body: JSON.stringify(requestData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
      } catch (error) {
        throw new Error();
      }
    }
  };

  const checkGameInUserList = (gameId: number) => userGames?.some((game) => (game.game.id === gameId));

  useEffect(() => {
    const getUserGames = async (userId: number) => {
      const res = await fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/user/${userId}`);
      const data: UserInDetails = await res.json();
      setUserGames(data.games);
    };
    if (user) getUserGames(user?.id);
  }, [user]);
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
                  <GameName>{game.name}</GameName>

                  {user && (checkGameInUserList(game.id) ? (
                    <ButtonGameInList>
                      En tu lista
                    </ButtonGameInList>
                  ) : (

                    <Button onClick={(event) => { event.stopPropagation(); handleOnClick(game.id); }}>
                      Añadir
                    </Button>
                  ))}

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
                  {user && <th>Estado</th>}
                </tr>
              </CabezaTabla>
              <tbody>

                {games.map((game) => (

                  <Row key={game.id} onClick={() => handleClickGameDetails(game.id)}>
                    <Fila><img src={normalizeImage(game.image)} width={80} height={100} alt="nu" /></Fila>
                    <Fila><h2>{game.name}</h2></Fila>
                    <Fila><h2>{game.releaseDate}</h2></Fila>
                    {user && (checkGameInUserList(game.id) ? (
                      <Fila>
                        <ButtonGameInList>
                          En tu lista
                        </ButtonGameInList>
                      </Fila>
                    ) : (
                      <Fila>
                        <Button onClick={(event) => { event.stopPropagation(); handleOnClick(game.id); }}>
                          Añadir
                        </Button>
                      </Fila>
                    ))}
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
