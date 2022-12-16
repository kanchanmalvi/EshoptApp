import {
  StyleSheet,
  Text,
  View,

} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth0} from 'react-native-auth0';
import DrawerSide from './src/navigateScreens/DrawerSidebar';
import Footer from './src/components/Footer';
import EntryPoint from './src/screens/EntryPoint';
import StackScreens from './src/navigateScreens/StackScreens';
import {WelcomeScreen} from './src/screens';

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
      <DrawerSide />

      {/* <Footer/> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;

// {!user ? (
//   <View onPress={onPress}>
//     <EntryPoint />
//   </View>
// ) : (
//   <DrawerSide />
// )}
