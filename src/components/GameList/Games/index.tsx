import type { FC, ChangeEvent } from 'react';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import type { Game } from '@/models/Game/types';
import { normalizeImage } from '@/utils/normalizeImage';
import PaginationCard from './PaginationCard';
import {
  Container, Input, Row, Titulo, Titulo2, Cajas, Cuerpo, Cuerpo2, Fila, Mascara, Button, Buscador, CabezaTabla, Tabla, Boton,
} from './styles';

export type Props = {
  games: Game[];
  pages: number;
  searchQuery: string;
  handleUpdateSearchQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePagination: (page: number) => void;
};

const GameList: FC<Props> = ({
  games, pages, searchQuery, handleUpdateSearchQuery, handlePagination,
}) => {
  const [showDiv2, setShowDiv2] = useState(true);
  const [buttonText, setButtonText] = useState('Desactivado');
  const router = useRouter();

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

  return (
    <Container>
      <Buscador>
        <Input type="text" value={searchQuery} onChange={handleUpdateSearchQuery} placeholder="Buscar..." />
        <Titulo>Lista de juegos</Titulo>
        <Titulo2>Modo Lista</Titulo2>
        <Boton onClick={toggleDiv}>{buttonText}</Boton>
      </Buscador>
      {showDiv2 ? (
        <Cuerpo>
          {games.map((game) => (
            <Cajas key={game.id} onClick={() => handleClickGameDetails(game.id)}>
              <Mascara>
                <img src={normalizeImage(game.image)} width={450} height={600} alt="nu" />
              </Mascara>
              <h2>{game.name}</h2>
              <Button>
                Añadir
              </Button>
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
      )}
      <PaginationCard pages={pages} handlePagination={handlePagination} />
    </Container>
  );
};

export default GameList;
