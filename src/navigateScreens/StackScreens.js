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
import AdminAddPrdctForm from '../screens/AdminSection/AdminAddPrdctForm';
const Stack = createNativeStackNavigator();
const StackScreens = () => {
  return (
    <>
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
          name="startscreen"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="entrypoint"
          component={EntryPoint}
          options={{headerShown: false}}
        />
        {/* ADMIN SECTION */}
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
          name="showproductlist"
          component={ShowProductsList}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="postform"
          component={PostForm}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="adminaddfrom"
          component={AdminAddPrdctForm}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="adminscreen"
          component={AdminScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Explore Now"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackScreens;
