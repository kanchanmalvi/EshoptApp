import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from '../screens/Product';
import {
  HomePage,
  FeaturedProductList,
  ProductDetails,
  AddProductCartDetails,
  FavoriteScrn,
  EntryPoint,
  OrderSuccess,
  Login,
  Signup,
  PostForm,
  ShowProductsList,
  AdminScreen,
  WelcomeScreen,
  Navbar,
  StartScreen,
} from '../screens';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const NestingNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="welcomescreen">
      {/* USER SECTION */}
      <Stack.Screen
        name="Explore Now"
        component={Navbar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ordersuccess"
        component={OrderSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="product"
        component={Product}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="featuredproducts"
        component={FeaturedProductList}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="productdetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="shoppingcart"
        component={AddProductCartDetails}
        options={{headerShown: false}}
      />

     
    </Stack.Navigator>
  );
};

export default NestingNavigation;
