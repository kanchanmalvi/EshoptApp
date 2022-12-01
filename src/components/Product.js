import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {testapi} from '../features/AllProducts/allProductsSlice';
import {useDispatch, useSelector} from 'react-redux';
import FormatePrice from '../helpers/FormatePrice';
import TabBar from './TabBar';
import {useNavigation} from '@react-navigation/native';
import {SearchBar} from '@rneui/themed';

const Product = () => {
  const Navigation = useNavigation();
  const product = useSelector(state => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    let url = 'products';
    dispatch(testapi(url));
  }, [dispatch]);

  const productDetails = id => {
    Navigation.navigate('productdetails', {id: id});
  };

  const [search, setSearch] = useState('');

  return (
    <ScrollView>
      <View>
        {product.sortingProduct?.length === 0 ? (
          <View style={styles.loader}>
            <Text>
              <ActivityIndicator />
            </Text>
          </View>
        ) : (
          <View>
            <View style={styles.aa}>
              <SearchBar
                style={{color: 'white', fontSize: 16}}
                placeholder="Search "
                type="text"
                name="text"
                value={search}
                onChangeText={t => setSearch(t)}
              />
            </View>
            <View>
              <TabBar />
            </View>
            <View>
              {product.sortingProduct
                ?.filter(e =>
                  e.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((data, id) => {
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
                            source={{uri: data.image}}
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
                            {data.name}
                          </Text>
                          <Text style={{textAlign: 'center'}}>
                            {data.company}
                          </Text>

                          <Text style={{textAlign: 'center'}}>
                            {data.description.slice(0, 48)}...
                          </Text>

                          <Text
                            style={{
                              color: '#5f9ea0',
                              margin: 10,
                              textAlign: 'center',
                            }}>
                            {<FormatePrice price={data.price} />}
                          </Text>
                        </View>

                        <TouchableOpacity style={styles.btnStyle}>
                          <Text
                            onPress={() => productDetails(data.id)}
                            style={{
                              textAlign: 'center',
                              fontSize: 18,
                              color: 'white',
                            }}>
                            View Details
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productImageContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',

    borderWidth: 0.5,
    borderColor: '#556b2f',
  },
  btnStyle: {
    // backgroundColor: '#48d1cc',
    backgroundColor: '#E0D72E',
    margin: 10,
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  SearchIconStyleView: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
  },
  SearchIconStyle: {
    margin: 10,
    color: 'white',
    borderRightWidth: 2,
    borderColor: 'white',
    padding: 5,
  },
  // for Modal style

  modalView: {
    backgroundColor: 'white',
    height: '100%',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  },
});
export default Product;
