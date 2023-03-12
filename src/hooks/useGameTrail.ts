import { useContext } from 'react';
import GameTrailContext from '@/contexts/GameTrailContext';

const useGameTrail = () => useContext(GameTrailContext);

export default useGameTrail;
