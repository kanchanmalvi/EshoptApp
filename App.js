import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useAuth0} from 'react-native-auth0';
import DrawerSide from './src/navigateScreens/DrawerSidebar';
import Footer from './src/components/Footer';
import EntryPoint from './src/screens/EntryPoint';

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
      {!user ? (
        <View onPress={onPress}>
          <EntryPoint />
        </View>
      ) : (
        <DrawerSide />
      )}

      {!user ? <View onPress={onPress}></View> : <Footer />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
