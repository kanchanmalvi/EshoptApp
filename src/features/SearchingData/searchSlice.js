import {createSlice} from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search_Filter',
  initialState: {
    products: ['g'],
    filteredUsers: [],
    search: '',
  },

  reducers: {
    productList: (state, action) => {
      // console.log(state, action, 'productList');
      state.products = action.payload;
      return {
        products: action.payload,
        filteredUsers: [...action.payload],
      };
    },
    searchByName: (state, action) => {
      console.log( state.products,typeof state.products, '13');
      const filteredUsers =
        state.products.map(e => {
        //  console.log( e, '123');
        });

      return {
        ...state,
        filteredUsers:
          action.payload.length > 0 ? filteredUsers : [...state.products],
      };
    },
  },
});
export const {searchByName, productList} = searchSlice.actions;
export default searchSlice.reducer;
