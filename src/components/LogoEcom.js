import React from 'react';
import {StyleSheet, View, Text, Image,ScrollView} from 'react-native';

const LogoEcom = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image
          source={require('../../Assets/loginImage.png')}
          style={{margin: 20, width: 230, height: 230}}
        />
      </View>
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
