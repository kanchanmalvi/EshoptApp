import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const LogoEcom = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../Assets/loginImage.png')}
        style={{width: 150, height: 150}}
      />
      <View>
        <Text style={styles.heading}>Eshop Store</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '##ff7f50',
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: '#ffd194',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default LogoEcom;
