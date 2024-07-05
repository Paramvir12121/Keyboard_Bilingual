import { useContext } from 'react';
import { Context } from '../App';

const useAuth = () => {
  const [signedIn] = useContext(Context);
  return signedIn;
};

export default useAuth;
