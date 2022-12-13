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
} from '../screens';

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
      initialRouteName="welcomescreen">
      <Stack.Screen
        name="welcomescreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
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
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
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
      <Stack.Screen
        name="showproductlist"
        component={ShowProductsList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="postform"
        component={PostForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="favoritescrn"
        component={FavoriteScrn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="adminscreen"
        component={AdminScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Sidebar;
