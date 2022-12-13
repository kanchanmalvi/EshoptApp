import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Sidebar from './StackScreens';
import Navbar from '../screens/Navbar';
import HomePage from '../screens/HomePage';
import About from '../screens/About';
import Contact from '../screens/Contact';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import {useWindowDimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const DrawerSide = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#fe8c00',
        drawerActiveTintColor: 'white',
        drawerLabelStyle: {marginLeft: -20},
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="Homepage"
        component={Sidebar}
        options={{
          drawerIcon: ({focused, color}) => (
            <Ionicons name="md-home" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Explore Now"
        component={Navbar}
        options={{
          drawerIcon: ({focused, color}) => (
            <Ionicons name="md-search-circle-sharp" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={About}
        options={{
          drawerIcon: ({focused, color}) => (
            <Ionicons name="people-circle" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={Contact}
        options={{
          drawerIcon: ({focused, color}) => (
            <FontAwesome name="phone-square" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});
export default DrawerSide;
