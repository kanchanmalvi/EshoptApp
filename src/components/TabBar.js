import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import DropdownComponent from '../components/DropdownComponent';
// import Sorting from './Sorting';

const TabBar = () => {
  return (
    <View>
      <View style={styles.Dropdown}>
        <DropdownComponent />
      </View>

      <View>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            margin: 10,
          }}>
          All Products
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  Dropdown: {
    backgroundColor: 'gray',
    color: 'black',
    padding: 10,
    margin: 10,
  },
});

export default TabBar;
