import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../src/features/counterSlice';
import allProductsReducer from '../src/features/AllProducts/allProductsSlice';
import detailProductsReducer from '../src/features/ProductDetails/detailsSlice';
import cartReducer from '../src/features/AddToCart/cartSlice';
import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import searchReducer from '../src/features/SearchingData/searchSlice';
import wishListReducer from '../src/features/AddToCart/wishListSlice';
import addProductReducer from '../src/features/AllProducts/AddProduct';
import LoginTokenReducer from '../src/features/AuthToken/LoginTokenSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  products: allProductsReducer,
  cart: cartReducer,
  counter: counterReducer,
  productDetails: detailProductsReducer,
  wishList: wishListReducer,
  addProduct: addProductReducer,
  authtoken: LoginTokenReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
