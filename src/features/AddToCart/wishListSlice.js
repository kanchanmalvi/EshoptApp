import {createSlice} from '@reduxjs/toolkit';

export const wishListSlice = createSlice({
  name: 'productItem',
  initialState: {
    wishlistItem: [],
  },

  reducers: {
    addtoWishList: (state, action) => {
      const existItem = state?.wishlistItem.findIndex(
        data => data?.id === action?.payload?.id,
      );

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
    removeWishlist: (state, action) => {
      const removeItem = state.wishlistItem.filter(
        item => item.id !== action.payload,
      );
      state.wishlistItem = removeItem;
    },
  },
});

export const {addtoWishList, clearWishList, removeWishlist} =
  wishListSlice.actions;
export default wishListSlice.reducer;
