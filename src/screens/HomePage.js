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
          <Text style={styles.shoptext}>Welcome To</Text>
          <Text style={styles.shopMaintext}>Eshop Store</Text>
          {user && (
            <Text
              style={styles.text}
              onPress={() => Navigation.navigate('Explore Now')}>
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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    top: 200,
  },

  shoptext: {
    color: 'white',
    fontSize: 35,
    textAlign: 'left',
    position: 'relative',
    bottom: 260,
    margin: 10,
  },
  shopMaintext: {
    color: 'white',
    fontSize: 35,
    textAlign: 'right',
    position: 'relative',
    bottom: 280,
    margin: 10,
  },
});
export default HomePage;
