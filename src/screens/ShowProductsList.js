import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import FormatePrice from '../helpers/FormatePrice';

const ShowProductsList = () => {
  const route = useRoute();
  return (
    <View style={{backgroundColor: 'white'}}>
      <Text style={styles.heading}>ShowProductsList</Text>

      <FlatList
        data={route?.params?.newState}
        renderItem={(item, id) => {
          return (
            <View style={styles.productImageContent} key={id}>
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 3,
                  }}>
                  <Image
                    source={{uri: item?.item?.value?.image?.uri}}
                    style={{width: 250, height: 200, margin: 10}}
                  />
                </View>

                <View style={{width: '50%'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      color: 'black',
                      marginTop: 5,
                    }}>
                    {item?.item?.value?.name}
                  </Text>
                  <Text style={{textAlign: 'center'}}>
                    {item?.item?.value?.brand}
                  </Text>

                  <Text style={{textAlign: 'center'}}>
                    {item?.item?.value?.desc}
                  </Text>

                  <Text
                    style={{
                      color: '#A43931',
                      margin: 10,
                      textAlign: 'center',
                      fontSize: 20,
                    }}>
                    {<FormatePrice price={item?.item?.value?.price} />}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity style={styles.updatebtnStyle}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: 'white',
                    }}>
                    Update Product
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.dltbtnStyle}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: 'white',
                    }}>
                    Delete Product
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  productImageContent: {
    borderWidth: 0.5,
    borderColor: '#556b2f',
  },
  updatebtnStyle: {
    backgroundColor: '#E0D72E',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  dltbtnStyle: {
    backgroundColor: 'red',
    margin: 10,
    padding: 10,

    borderRadius: 5,
  },
  heading: {
    textAlign: 'center',
    height: 50,
    fontSize: 18,
    padding: 10,
  },
});
export default ShowProductsList;
