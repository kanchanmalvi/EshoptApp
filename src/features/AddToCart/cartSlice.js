import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartItem',
  initialState: {
    cartItem: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existItem = state.cartItem.findIndex(
        data => data?.id === action?.payload?.id,
      );

      if (existItem >= 0) {
        state.cartItem[existItem] = {
          ...state.cartItem[existItem],
          cartQuantity: state.cartItem[existItem]?.cartQuantity + 1,
        };
      } else {
        const aa = {...action.payload, cartQuantity: 1};
        state.cartItem.push(aa);
      }
    },

    // addToCart: (state, action) => {
    //   const {id, color, price, stock,image,name} = action?.payload;

    //   let a = {
    //     id,
    //     id: id + color,
    //     price: price,
    //     stock: stock,
    //     image: image?.[0]?.url,
    //     name:name
    //   };

    //   return {
    //     ...state,
    //     cartItem: [...state.cartItem, a],
    //   };
    // },

    decreaseCart: (state, action) => {
      let itemIndex = state.cartItem.findIndex(
        data => data.id === action.payload.id,
      );
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        null;
      } else {
        null;
      }
    },

    remove: (state, action) => {
      const removeItem = state.cartItem.filter(
        item => item.id !== action.payload,
      );
      state.cartItem = removeItem;
    },

    clearCart: (state, action) => {
      state.cartItem = [];
    },
    getTotal: (state, action) => {
      let {total, quantity} = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const {price, cartQuantity} = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      total = parseFloat(total.toFixed(2));
      state.totalQuantity = quantity;
      state.totalAmount = parseFloat(total.toFixed(2));
    },
  },

  extraReducers: {},
});

export const {addToCart, remove, clearCart, decreaseCart, getTotal} =
  cartSlice.actions;
export default cartSlice.reducer;

// state.totalQuantity += 1;
// (state.totalAmount =
//   parseInt(state.totalAmount) + parseInt(action.payload.product.price)),
//   state.cartItem.push(action.payload.product);
