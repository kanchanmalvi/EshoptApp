import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: null,
  token: null,
};

const LoginTokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log(action.payload, 'token slice');
      state.email = action.payload;
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    removeToken: state => {
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const {setToken, removeToken} = LoginTokenSlice.actions;

export default LoginTokenSlice.reducer;
