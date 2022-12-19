import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import FormatePrice from '../helpers/FormatePrice';
import {Button} from '@rneui/themed';

const CategoryFilter = ({
  company,
  setModalVisible,
  modalVisible,
  product,
  setAllProduct,
  categoryData,
  colors,
  price,
}) => {
  // const [inputRange, setInputRange] = useState(price);
  const categoryWise = value => {
    let arr = [];
    let temp = product?.sortingProduct;
    if (value != 'All') {
      arr = temp?.filter(i => i?.category === value);
    } else {
      arr = temp;
    }
    setAllProduct(arr);
    setModalVisible(!modalVisible);
  };

  const companyWise = value => {
    let arr = [];
    let temp = product?.sortingProduct;
    if (value != 'All') {
      arr = temp?.filter(i => i?.company === value);
    } else {
      arr = temp;
    }
    setAllProduct(arr);
    setModalVisible(!modalVisible);
  };

  const colorWise = value => {
    let arr = [];
    let temp = product?.sortingProduct;
    if (value != 'All') {
      arr = temp?.filter(i => i.colors.includes(value));
    } else {
      arr = temp;
    }
    setAllProduct(arr);
    setModalVisible(!modalVisible);
  };

  const priceWise = () => {
    let arr = [];
    let temp = product?.sortingProduct;
    if (price === 0) {
      arr = temp.filter(curElem => curElem.price == price);
    } else {
      arr = temp.filter(curElem => curElem.price <= price);
    }
    setAllProduct(arr);
    setModalVisible(!modalVisible);
  };

  const filterdata = value => {
    let arr = [];
    let temp = product?.sortingProduct;
    if (value === 'All') {
      arr = temp?.filter(i => i?.company === value);
    } else {
      arr = temp;
    }
    setAllProduct(arr);
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
      {/* Colors */}
      <View>
        <View>
          <Text style={styles.modalText}>Filtered By Color </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {colors.map((i, id) => {
            if (i == 'All') {
              return (
                <View key={id}>
                  <Text
                    style={{
                      fontSize: 22,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'black',
                      marginTop: 10,
                    }}
                    onPress={() => colorWise(i)}>
                    All -
                  </Text>
                </View>
              );
            }
            return (
              <View key={id}>
                <Text
                  style={[styles.colorStyle, {backgroundColor: i}]}
                  onPress={() => colorWise(i)}>
                  {i}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View>
        <Text style={styles.modalText}>Filtered By Price </Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>
            <FormatePrice price={price} />
          </Text>
          <Text>
            <Slider
              style={{width: 200, height: 50}}
              maximumValue={1000}
              minimumValue={0}
              
            />
          </Text>
        </View>
      </View>

      <View style={{margin: 10}}>
        <Button color="error" onPress={filterdata}>
          Clear Filter
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  categorybtn: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
    color: 'black',
  },
  colorstyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
  },
  colorStyle: {
    margin: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
    color: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
});
export default CategoryFilter;
