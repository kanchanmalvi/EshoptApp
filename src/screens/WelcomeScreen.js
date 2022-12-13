import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../Assets/eshoplogo.png')}
          style={{width: 300, height: 300}}
        />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Store</Text>
      </View>
      <View style={{}}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 20,
            marginVertical: 15,
          }}>
          Login As..!
        </Text>
      </View>
      <View style={styles.sectionHeading}>
        <Text
          style={styles.headingAdminLogin}
          onPress={() => Navigation.navigate('adminscreen')}>
          Admin
        </Text>
        <Text
          style={styles.headingUserLogin}
          onPress={() => Navigation.navigate('entrypoint')}>
          User
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ff7f50',
    textAlign: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  sectionHeading: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingAdminLogin: {
    fontSize: 20,
    backgroundColor: '#D1913C',
    width: 150,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: 'white',
  },
  headingUserLogin: {
    fontSize: 20,
    backgroundColor: '#FFD194',
    width: 150,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: 'white',
  },
});

export default WelcomeScreen;
