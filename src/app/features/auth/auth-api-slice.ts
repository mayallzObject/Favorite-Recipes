import {
  createApi,
  fakeBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from 'firebaseConfig';
import NetInfo from '@react-native-community/netinfo';

interface SignUpReqBody {
  username: string;
  email: string;
  password: string;
}

interface LoginReqBody {
  email: string;
  password: string;
}

interface UserData {
  username: string;
  email: string;
  password: string;
}

export interface TUser {
  id: string;
  username: string;
  password: string;
  email: string;
}

type Login = {
  response?: string;
};

export const authApiSlice = createApi({
  reducerPath: 'authApiSlice',
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    signUpAndCreateNewUser: build.mutation<UserData, SignUpReqBody>({
      async queryFn({ username, email, password }) {
        try {
          const isConnected = await checkNetworkConnection();
          if (!isConnected) {
            throw new Error('No internet connection.');
          }
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const userData: UserData = { username, email, password };
          await setDoc(doc(db, 'users', result.user.uid), userData);
          return { data: userData };
        } catch (error) {
          throw handleError(error);
        }
      },
    }),
    login: build.mutation<
      Login['response'] | undefined,
      LoginReqBody
    >({
      async queryFn({ email, password }) {
        try {
          const isConnected = await checkNetworkConnection();
          if (!isConnected) {
            throw new Error('No internet connection.');
          }
          const userCredentials = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const { uid, email: userEmail } = userCredentials.user;
          const userData = { uid, email: userEmail };
          const serializedUserData = JSON.stringify(userData);

          return { data: serializedUserData || '' };
        } catch (error) {
          throw handleError(error);
        }
      },
    }),
    logout: build.mutation<unknown, void>({
      async queryFn() {
        try {
          const isConnected = await checkNetworkConnection();
          if (!isConnected) {
            throw new Error('No internet connection.');
          }

          await signOut(auth);
          return { data: {} };
        } catch (error) {
          throw handleError(error);
        }
      },
    }),
    fetchUserDetails: build.query<TUser, { uid: string }>({
      async queryFn({ uid }) {
        try {
          const isConnected = await checkNetworkConnection();
          if (!isConnected) {
            throw new Error('No internet connection.');
          }
          const userDoc = await getDoc(doc(db, 'users', uid));
          const userData = userDoc.data() as TUser;
          return { data: userData };
        } catch (error) {
          throw handleError(error);
        }
      },
    }),
  }),
});

// Export hooks for usage in components
export const {
  useSignUpAndCreateNewUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useFetchUserDetailsQuery,
} = authApiSlice;

// Custom error handler function
const handleError = (error: any) => {
  let errorMessage = 'An error occurred during the API request.';
  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  }
  console.error('API error:', error);
  return new Error(errorMessage);
};

// Check network connection
const checkNetworkConnection = async () => {
  try {
    const state = await NetInfo.fetch();
    return state.isConnected;
  } catch (error) {
    console.error('Error checking network connection:', error);
    return false;
  }
};
