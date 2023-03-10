import useDecide from './useGameTrail';

const useAuth = () => {
  const { user } = useDecide();
  const authenticated = user !== null;
  return { authenticated };
};

export default useAuth;
