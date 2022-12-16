import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {testapi} from '../features/AllProducts/allProductsSlice';
import {useDispatch, useSelector} from 'react-redux';
import FormatePrice from '../helpers/FormatePrice';
import TabBar from '../components/TabBar';
import {useNavigation} from '@react-navigation/native';
import {SearchBar} from '@rneui/themed';

const ProductFlatlist = () => {
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const [allProduct, setAllProduct] = useState(product?.sortingProduct);
  const product = useSelector(state => state.products);
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    let url = 'products';
    dispatch(testapi(url));
  }, []);

  useEffect(() => {
    setAllProduct(product?.sortingProduct);
  }, [product]);

  const productDetails = id => {
    Navigation.navigate('productdetails', {id: id});
  };

  const pull = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  return (
    <View style={{flex: 1}}>
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
        <TabBar
          allProduct={allProduct}
          setAllProduct={setAllProduct}
          product={product}
        />
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pull()} />
        }>
        <FlatList
          data={allProduct?.filter(e =>
            e.name.toLowerCase().includes(search.toLowerCase()),
          )}
          refreshing={true}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => {
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
                      source={{uri: item?.image}}
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
                      {item?.name}
                    </Text>
                    <Text style={{textAlign: 'center'}}>{item?.company}</Text>

                    <Text style={{textAlign: 'center'}}>
                      {item?.description.slice(0, 48)}...
                    </Text>

                    <Text
                      style={{
                        color: '#A43931',
                        margin: 10,
                        textAlign: 'center',
                        fontSize: 20,
                      }}>
                      {<FormatePrice price={item?.price} />}
                    </Text>
                  </View>

                  <TouchableOpacity style={styles.btnStyle}>
                    <Text
                      onPress={() => productDetails(item?.id)}
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
          }}
        />
      </ScrollView>
    </View>
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
});
export default ProductFlatlist;
