import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {useAuth0} from 'react-native-auth0';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import HomePage from '../components/HomePage';

const EntryPoint = () => {
  const Navigation = useNavigation();
  const {authorize, user} = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
      Navigation.navigate('homepage');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.EntryPointstyle}>
      {!user ? (
        <View style={styles.container}>
          <ImageBackground
            source={require('../../Assets/logincover.jpg')}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.text} onPress={onPress}>
              Login <Icon name="arrowright" size={30} />
            </Text>
          </ImageBackground>
        </View>
      ) : (
        <HomePage />
      )}
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
    position: 'absolute',
    top: 10,
    left: 30,
  },
});
export default EntryPoint;
