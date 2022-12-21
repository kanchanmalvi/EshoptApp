import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StackScreens from './src/navigateScreens/StackScreens';
import DrawerSide from './src/navigateScreens/DrawerSidebar';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
     <DrawerSide/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
