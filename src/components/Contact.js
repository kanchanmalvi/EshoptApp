import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Card, Button, Icon} from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';

const Contact = () => {
  const Navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '50%',
    width: '100%',

    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Contact;
