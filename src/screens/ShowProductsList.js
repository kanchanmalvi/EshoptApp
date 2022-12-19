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
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';

const ShowProductsList = () => {
  const route = useRoute();
  const Navigation = useNavigation();

  //update

  const update = () => {
    Navigation.navigate('postform');
  };

  const deleteData = () => {
    try {
      database().ref('/products/10').remove();
    } catch (error) {
      console.log(error, 'check error 74');
    }
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Text style={styles.heading}>ShowProductsList</Text>

      {route?.params?.newState?.length === 0 ? (
        <View style={styles.emptyList}>
          <Text style={{fontSize: 20, color: 'red', marginBottom: 10}}>
            No Product In The List
          </Text>
          <View
            style={{
              backgroundColor: '#9acd32',
              padding: 5,
              borderRadius: 5,
            }}>
            <TouchableOpacity onPress={() => Navigation.navigate('postform')}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                <Icon
                  name="arrowleft"
                  style={{fontSize: 20, color: 'white'}}
                  color="black"
                />
                <Text style={{color: 'white', fontSize: 18, margin: 10}}>
                  Add Product
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <FlatList
          data={route?.params?.newState}
          keyExtractor={item => item.key}
          renderItem={({item}, id) => {
            console.log(item, 'item list');
            return (
              <View style={styles.productImageContent}>
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
                      source={{uri: item?.value?.image?.uri}}
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
                      {item?.value?.name}
                    </Text>
                    <Text style={{textAlign: 'center'}}>
                      {item?.item?.value?.brand}
                    </Text>

                    <Text style={{textAlign: 'center'}}>
                      {item?.value?.desc}
                    </Text>

                    <Text
                      style={{
                        color: '#A43931',
                        margin: 10,
                        textAlign: 'center',
                        fontSize: 20,
                      }}>
                      {<FormatePrice price={item?.value?.price} />}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={styles.updatebtnStyle}
                    onPress={update}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 18,
                        color: 'white',
                      }}>
                      Update Product
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.dltbtnStyle}
                    onPress={() => deleteData(item.key)}>
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
      )}
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
  emptyList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
export default ShowProductsList;
