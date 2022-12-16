import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EntryPoint = () => {
  const Navigation = useNavigation();

  const onPress = () => {
    Navigation.navigate('startscreen');
  };

  useEffect(() => {
    setTimeout(() => {
      Navigation.navigate('startscreen');
    }, 2000);
  }, []);

  return (
    <View style={styles.EntryPointstyle}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../Assets/imgnew.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.text} onPress={onPress}>
            Eshop <Ionicons name="arrow-redo-sharp" size={30} />
          </Text>
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
    position: 'absolute',
    top: 10,
    left: 30,
  },
});
export default EntryPoint;
