import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useAuth0} from 'react-native-auth0';

const HomePage = () => {
  const Navigation = useNavigation();
  const {user} = useAuth0();
  return (
    <View style={styles.EntryPointstyle}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../Assets/homepage.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.shoptext}>Welcome to Eshop Store</Text>
          {user && (
            <Text
              style={styles.text}
              onPress={() => Navigation.navigate('navbar')}>
              {user.name}
            </Text>
          )}
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  EntryPointstyle: {
    height: '100%',
  },

  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  text: {
    color: '#fff0f5',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    left: 10,
  },

  shoptext: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    position: 'relative',
    bottom: 280,
  },
});
export default HomePage;
