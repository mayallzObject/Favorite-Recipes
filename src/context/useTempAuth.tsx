import { useContext } from 'react';
import { AuthContext, IAuthContext } from './AuthProvider';

export const useTempAuth = (): IAuthContext => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      'useAuthContext must be used within an AuthProvider'
    );
  }

  return authContext;
};
