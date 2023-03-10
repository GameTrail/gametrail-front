import { useContext } from 'react';
import GameTrailContext from '@/contexts/GameTrailContext';

const useDecide = () => useContext(GameTrailContext);

export default useDecide;
