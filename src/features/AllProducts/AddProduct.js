import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const addtestapi = createAsyncThunk(
  'addproduct/addproducts',
  async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );

      const products = await response.data;
      console.log(products, 'responsedata');
      return products;
    } catch (error) {
      console.log(error, 'error');
    }
  },
);

export const addProductSlice = createSlice({
  name: 'products',
  initialState: {
    addproduct: [],
   },

  reducers: {},

  extraReducers: builder => {
    builder.addCase(addtestapi.pending, (state, action) => {
      console.log('pending');
    });

    builder.addCase(addtestapi.fulfilled, (state, action) => {
      console.log('fulfilledxyz', state, action);
      state.addproduct = [...action.payload];
    });

    builder.addCase(addtestapi.rejected, (state, action) => {
      console.log('reject');
    });
  },
});

export const {} = addProductSlice.actions;
export default addProductSlice.reducer;
