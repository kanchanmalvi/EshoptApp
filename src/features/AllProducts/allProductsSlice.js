import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const testapi = createAsyncThunk('products/getproducts', async url => {
  try {
    const response = await axios.get(`https://api.pujakaitem.com/api/${url}`);
    console.log(response.data, 'responsedata');
    const products = await response.data;

    return products;
  } catch (error) {
    console.log(error, 'error');
  }
});

export const allProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    sortingProduct: [],
    featured_value: 'Lowest',
  },

  reducers: {
    sorting: (state, action) => {
    //  console.log(state, action, 'newsorting');
      const featured_value = action.payload?.value;
    //  console.log(featured_value, 'featured_value');

      const aa = state.sortingProduct?.sort((a, b) => {
        if (featured_value === 'Lowest') {
          return a.price - b.price;
        } else if (featured_value === 'Highest') {
          return b.price - a.price;
        } else if (featured_value === 'a-z') {
          return a.name.localeCompare(b.name);
        } else if (featured_value === 'z-a') {
          return b.name.localeCompare(a.name);
        }
      });
      console.log(aa, 'aa');
    },
  },

  extraReducers: builder => {
    builder.addCase(testapi.pending, (state, action) => {
      console.log('pending');
    });

    builder.addCase(testapi.fulfilled, (state, action) => {
      console.log('fulfilledxyz', state, action);
      state.sortingProduct = [...action.payload];
      state.products = action.payload
    });

    builder.addCase(testapi.rejected, (state, action) => {
      console.log('reject');
    });
  },
});

export const {sorting} = allProductsSlice.actions;
export default allProductsSlice.reducer;
