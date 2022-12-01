import {createSlice} from '@reduxjs/toolkit';

export const wishListSlice = createSlice({
  name: 'productItem',
  initialState: {
    wishlistItem: [],
  },

  reducers: {
    addtoWishList: (state, action) => {
      console.log(action?.payload, 'wishlist');

      const existItem = state?.wishlistItem.findIndex(
        data => data?.id === action?.payload?.id,
      );
      console.log(existItem, 'existItem');

      if (existItem >= 0) {
        state.wishlistItem[existItem] = {
          ...state.wishlistItem[existItem],
          cartQuantity: state.wishlistItem[existItem]?.cartQuantity + 1,
        };
      } else {
        const aa = {...action.payload, cartQuantity: 1};
        state.wishlistItem.push(aa);
      }
    },
    clearWishList: (state, action) => {
      state.wishlistItem = [];
    },
  },
});

export const {addtoWishList, clearWishList} = wishListSlice.actions;
export default wishListSlice.reducer;
