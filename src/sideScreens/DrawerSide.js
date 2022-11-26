import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Sidebar from './Sidebar';
import Navbar from '../components/Navbar';

const Drawer = createDrawerNavigator();

const DrawerSide = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="sidebar"
        component={Sidebar}
        options={{headerShown: false}}
      />
        <Drawer.Screen
        name="navbar"
        component={Navbar}
        options={{headerShown: true}}
      />

    </Drawer.Navigator>
  );
};

export default DrawerSide;

const styles = StyleSheet.create({});
