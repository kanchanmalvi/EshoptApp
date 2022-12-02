import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';

const SignupImage = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image
          source={require('../../Assets/sign.png')}
          style={{width: 200, height: 200}}
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
export default SignupImage;
