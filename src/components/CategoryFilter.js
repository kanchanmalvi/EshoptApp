import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const CategoryFilter = ({
  company,
  setModalVisible,
  modalVisible,
  product,
  setAllProduct,
  categoryData,
}) => {
  const categoryWise = value => {
    if (categoryData) {
      const arr = product?.sortingProduct?.filter(i => {
        console.log(i?.category, categoryData, 'category');
        return i?.category === value;
      });
      setAllProduct(arr);
    }
    setModalVisible(!modalVisible);
  };

  const companyWise = value => {
    if (company) {
      const arr = product?.sortingProduct?.filter(i => {
        console.log(i?.category, company, 'category');
        return i?.company === value;
      });
      setAllProduct(arr);
    }
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      {/* category */}
      <View>
        <Text style={styles.modalText}>Filtered By Category</Text>
        {categoryData?.map((i, id) => {
          return (
            <View key={id}>
              <TouchableOpacity
                style={styles.categorybtn}
                value={i}
                onPress={() => categoryWise(i)}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 20,
                  }}>
                  {i}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      {/* Company */}
      <View>
        <Text style={styles.modalText}>Filtered By Company </Text>
        {company.map((i, id) => {
          return (
            <View key={id}>
              <TouchableOpacity
                style={styles.categorybtn}
                value={i}
                onPress={() => companyWise(i)}>
                <Text
                  style={{textAlign: 'center', color: 'black', fontSize: 20}}>
                  {i}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  categorybtn: {
    margin: 5,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
    color: 'black',
  },
});
export default CategoryFilter;
