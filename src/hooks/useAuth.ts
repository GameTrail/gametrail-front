import useGameTrail from './useGameTrail';

const useAuth = () => {
  const { user } = useGameTrail();
  const authenticated = user !== null;
  return { authenticated };
};

export default useAuth;
