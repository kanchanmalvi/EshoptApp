import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StackScreens from './src/navigateScreens/StackScreens';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
