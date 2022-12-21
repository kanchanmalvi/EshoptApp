import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {testapi} from '../features/AllProducts/allProductsSlice';
import {useDispatch, useSelector} from 'react-redux';
import FormatePrice from '../helpers/FormatePrice';
import TabBar from '../components/TabBar';
import {useNavigation} from '@react-navigation/native';
import {SearchBar} from '@rneui/themed';
import MasonryList from '@react-native-seoul/masonry-list';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductFlatlist = () => {
  // const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const [allProduct, setAllProduct] = useState(product?.sortingProduct);
  const product = useSelector(state => state.products);
  const prodetails = useSelector(state => state.productDetails);
  console.log(product, 'starts');
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

  // const pull = () => {
  //   setRefresh(true);

  //   setTimeout(() => {
  //     setRefresh(false);
  //   }, 2000);
  // };

  const {stars} = prodetails?.product;

  const ratingStar = Array.from({length: 5}, (elem, index) => {
    let number = index + 0.5;

    return (
      <View key={index}>
        <Text>
          {stars >= index + 1 ? (
            <Icon name="star" style={styles.iconStyle} />
          ) : stars >= number ? (
            <Icon name="star-half" style={styles.iconStyle} />
          ) : (
            <Icon name="star-outline" style={styles.iconStyle} />
          )}
        </Text>
      </View>
    );
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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

      <ScrollView style={{marginTop: 5}}>
        <MasonryList
          data={allProduct?.filter(e =>
            e.name.toLowerCase().includes(search.toLowerCase()),
          )}
          numColumns={2}
          refreshing={false}
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
                  }}>
                  <View style={{}}>
                    <TouchableOpacity onPress={() => productDetails(item?.id)}>
                      <Image
                        source={{uri: item?.image}}
                        style={{
                          width: 150,
                          height: 200,
                          margin: 10,
                          borderRadius: 10,
                        }}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={{width: '50%'}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        marginTop: 5,
                      }}>
                      {item?.name}
                    </Text>
                    <Text style={{textAlign: 'center'}}>{item?.company}</Text>
                    <Text
                      style={{
                        color: '#5f9ea0',
                        margin: 10,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize:12
                      }}>
                      {<FormatePrice price={item?.price} />}
                    </Text>

                    <Text style={{textAlign: 'center', fontSize: 20}}>
                      {ratingStar}
                    </Text>
                  </View>
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
  iconStyle: {
    fontSize: 18,
    color: '#dfb726d1',
  },
});
export default ProductFlatlist;
