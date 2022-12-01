import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const detailApi = createAsyncThunk(
  'productdetail/getsingleproducts',
  async id => {
    try {
      const response = await axios.get(
        `https://api.pujakaitem.com/api/products/${id}`,
      );
      const product = await response.data;

      return product;
    } catch (error) {
      console.log(error, 'error');
    }
  },
);

export const detailProductsSlice = createSlice({
  name: 'productDetails',
  initialState: {
    product: {},
  },
  reducers: {
    singleproductdetails: (state, action) => {
   
      state.product = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(detailApi.pending, (state, action) => {
      console.log('pending');
    });

    builder.addCase(detailApi.fulfilled, (state, action) => {
      state.product = action.payload;
      console.log('successfully fetch d');
    });

    builder.addCase(detailApi.rejected, (state, action) => {
      console.log('reject');
    });
  },
});

export const {singleproductdetails} = detailProductsSlice.actions;
export default detailProductsSlice.reducer;
