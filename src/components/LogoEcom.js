import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {
  Header,
  Header as HeaderRNE,
  HeaderProps,
  Icon,
  Input,
} from '@rneui/themed';

const LogoEcom = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image
          source={require('../../Assets/logo3.png')}
          style={{margin: 20, width: 100, height: 100}}
        />
      </View>
      <View>
        <Text style={styles.heading}> E-Comm Site App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '##ff7f50',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: '#ff7f50',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default LogoEcom;
