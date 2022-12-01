import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const Sorting = () => {
  const product = useSelector(state => state.products);

  return (
    <View>
      <View style={{margin: 10}}>
        <Text style={styles.textstyle}>
          {`${product?.products?.length} Products Available`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 17,
    color: 'black',
    padding: 10,
  },
});

export default Sorting;
