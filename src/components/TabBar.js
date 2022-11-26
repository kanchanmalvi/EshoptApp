import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import DropdownComponent from '../components/DropdownComponent';
// import Sorting from './Sorting';

const TabBar = () => {
  return (
    <View>
      <View style={styles.Dropdown}><DropdownComponent /></View>

      <View style={styles.sortingViewStyle}>{/* <Sorting /> */}</View>
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
