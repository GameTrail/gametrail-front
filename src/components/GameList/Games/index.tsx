import type { FC, ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import type { Game } from '@/models/Game/types';
import type { GameInList, UserInDetails } from '@/models/GameInUserList/types';
import { GameListState } from '@/models/GameList/types';
import { getUserCookie } from '@/utils/login';
import { normalizeImage } from '@/utils/normalizeImage';
import PaginationCard from '../../PaginationCard';
import {
  Container, Input, Row, Titulo, Titulo2, Cajas, Cuerpo, Cuerpo2, Fila, Mascara, Button, Buscador, CabezaTabla, Tabla, Boton, TitlesContainer, GameName, ButtonGameInList,
} from './styles';

export type Props = {
  games: Game[];
  pages: number;
  currentPage: number;
  searchQuery: string;
  handleUpdateSearchQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePagination: (page: number) => void;
};

const GameList: FC<Props> = ({
  games, pages, currentPage, searchQuery, handleUpdateSearchQuery, handlePagination,
}) => {
  const [showDiv2, setShowDiv2] = useState(true);
  const [buttonText, setButtonText] = useState('Desactivado');
  const router = useRouter();
  const user = getUserCookie();
  const [userGames, setUserGames] = useState<GameInList[]>([]);

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

  const handleOnClick = async (gameId: number) => {
    if (user) {
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
            Authorization: `Token ${user.token}`,
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
    if (user) getUserGames(user.id);
  }, [user]);

  return (
    <Container>
      <Buscador>
        <Titulo>Lista de juegos</Titulo>
        <Input type="text" value={searchQuery} onChange={handleUpdateSearchQuery} placeholder="Buscar..." />
        <TitlesContainer>
          <Titulo2>Modo Lista</Titulo2>
          <Boton onClick={toggleDiv}>{buttonText}</Boton>
        </TitlesContainer>
      </Buscador>
      {showDiv2 ? (
        <Cuerpo>
          {games?.map((game) => (
            <Cajas key={game?.id} onClick={() => handleClickGameDetails(game?.id)}>
              <Mascara>
                <img src={normalizeImage(game?.image)} width={450} height={600} alt="nu" />
              </Mascara>
              <GameName>{game?.name}</GameName>
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
          ))}
        </Cuerpo>
      ) : (
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
              {games?.map((game) => (
                <Row key={game?.id} onClick={() => handleClickGameDetails(game?.id)}>
                  <Fila><img src={normalizeImage(game?.image)} width={80} height={100} alt="nu" /></Fila>
                  <Fila><h2>{game?.name}</h2></Fila>
                  <Fila><h2>{game?.releaseDate}</h2></Fila>
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
      )}
      <PaginationCard pages={pages} currentPage={currentPage} handlePagination={handlePagination} />
    </Container>
  );
};

export default GameList;
