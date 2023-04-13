export async function putGame(game: FormDataEntryValue, trailId: number, selectedGames: FormDataEntryValue[], token: string = '') {
  const gameData = {
    trail: trailId.toString(),
    game: game.toString(),
    priority: (selectedGames.indexOf(game) + 1),
    message: 'Pendiente de selección',
    status: 'PENDING',
  };

  try {
    return await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/gameInTrail', {
      method: 'POST',
      body: JSON.stringify(gameData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
  } catch (error) {
    throw new Error();
  }
}
