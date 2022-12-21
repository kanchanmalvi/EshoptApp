import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const Sorting = () => {
  const product = useSelector(state => state.products);

  return (
    <View style={{backgroundColor: '#BDFFF3'}}>
      <View style={styles.textstyle}>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            margin: 10,
          }}>
          All Products
        </Text>
        <Text style={{color: 'orange', fontSize: 18}}>
          {`${product?.products?.length} Products Available`}
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BDFFF3',
   
  },
});

export default Sorting;
