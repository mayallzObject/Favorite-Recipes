import { UserCredential } from 'firebase/auth';
import { createSlice } from '@reduxjs/toolkit';

export type AuthUserState = {
  userId: UserCredential['user']['uid'] | null;
};

const initialState: AuthUserState = {
  userId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }: { payload: AuthUserState }) => {
      state.userId = payload.userId;
    },
    removeAuth: (state) => {
      state.userId = null;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     authApiSlice.endpoints.login.matchFulfilled,
  //     (state, { payload }) => {
  //       state.userId = payload.userId;
  //       state.isAuthenticated = payload.isAuthenticated;

  //       AsyncStorage.setItem(
  //         'userId',
  //         JSON.stringify(payload.userId)
  //       ).catch((error) => {
  //         console.error('Error saving user to AsyncStorage:', error);
  //       });
  //     }
  //   );
  //   builder.addMatcher(
  //     authApiSlice.endpoints.logout.matchFulfilled,
  //     (state) => {
  //       state.userId = null;
  //       state.isAuthenticated = false;

  //       AsyncStorage.removeItem('userId').catch((error) => {
  //         console.error(
  //           'Error removing user from AsyncStorage:',
  //           error
  //         );
  //       });
  //     }
  //   );
  // },
});

export const { setAuth, removeAuth } = authSlice.actions;

export default authSlice.reducer;
