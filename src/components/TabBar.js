import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DropdownComponent from '../components/DropdownComponent';
import Sorting from '../components/Sorting';

const TabBar = ({allProduct,setAllProduct,product}) => {
  return (
    <View style={{}}>
      <View style={styles.Dropdown}>
        <DropdownComponent allProduct={allProduct} setAllProduct={setAllProduct} product={product}/>
      </View>
      <View>
        <Sorting />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TabBar;
