import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/components/HomePage';
import Navbar from './src/components/Navbar';
import Product from './src/components/Product';
import FeaturedProductList from './src/screens/FeaturedProductList';
import ProductDetails from './src/screens/ProductDetails';
import AddProductCartDetails from './src/screens/AddProductCartDetails';
import About from './src/components/About';
import Contact from './src/components/Contact';
import NotificationScrn from './src/screens/NotificationScrn';
import Footer from './src/components/Footer';
import EntryPoint from './src/screens/EntryPoint';
import {useAuth0} from 'react-native-auth0';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from './src/components/CustomSidebarMenu';

import DrawerSide from './src/sideScreens/DrawerSide';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const App = () => {
  const {authorize, user} = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="entrypoint">
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
          name="navbar"
          component={Navbar}
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
          name="about"
          component={About}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="contact"
          component={Contact}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="notificationscreen"
          component={NotificationScrn}
          options={{headerShown: false}}
        />

      
      </Stack.Navigator> */}

      <DrawerSide />

      {!user ? <View onPress={onPress}></View> : <Footer />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  },
});
export default App;
