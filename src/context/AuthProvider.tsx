import { ReactNode, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext } from 'react';
import { auth, db } from 'firebaseConfig';
import { TUser } from '@app/features/auth/auth-api-slice';
import { getDoc, doc } from 'firebase/firestore';

export interface AuthProviderProps {
  children: ReactNode;
}

export interface IAuthContext {
  currentUser: Omit<TUser, 'password'> | null;
  isAuth: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  currentUser: null,
  isAuth: false,
});

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<TUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        try {
          if (firebaseUser?.uid) {
            const userDoc = await getDoc(
              doc(db, 'users', firebaseUser.uid)
            );
            const userData = userDoc.data() as TUser | null;
            if (userData) setCurrentUser(userData);
            setIsAuth(true);
          } else {
            setIsAuth(false);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const value = { currentUser, isAuth };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
