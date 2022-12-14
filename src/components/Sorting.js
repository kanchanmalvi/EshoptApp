import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const Sorting = () => {
  const product = useSelector(state => state.products);

  return (
    <View>
      <View style={styles.textstyle}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            margin: 10,
          }}>
          All Products
        </Text>
        <Text style={{color:"orange", fontSize:18}}>
          {`${product?.sortingProduct?.length} Products Available`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textstyle: {
  
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    alignItems:"center"
  },
});

export default Sorting;
