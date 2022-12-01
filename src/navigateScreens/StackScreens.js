import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import About from '../components/About';
import FeaturedProductList from '../screens/FeaturedProductList';
import ProductDetails from '../screens/ProductDetails';
import AddProductCartDetails from '../screens/AddProductCartDetails';
import Contact from '../components/Contact';
import FavoriteScrn from '../screens/FavoriteScrn';
import EntryPoint from '../screens/EntryPoint';

const Stack = createNativeStackNavigator();

const Sidebar = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9AC4F8',
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
      initialRouteName="entrypoint">
      <Stack.Screen
        name="entrypoint"
        component={EntryPoint}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="homepage"
        component={HomePage}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="navbar"
        component={Navbar}
        options={{headerShown: false}}
      /> */}
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
      {/* <Stack.Screen
        name="about"
        component={About}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="contact"
        component={Contact}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="favoritescrn"
        component={FavoriteScrn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Sidebar;
