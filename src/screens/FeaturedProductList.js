import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {testapi} from '../features/AllProducts/allProductsSlice';
import {useDispatch, useSelector} from 'react-redux';
import FormatePrice from '../helpers/FormatePrice';
import {useNavigation} from '@react-navigation/native';
import MasonryList from '@react-native-seoul/masonry-list';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FeaturedProductList = () => {
  const dispatch = useDispatch();
  const Navigation = useNavigation();

  const product = useSelector(state => state.products);
  const prodetails = useSelector(state => state.productDetails);
  useEffect(() => {
    dispatch(testapi());
  }, [dispatch]);

  const productDetails = id => {
    Navigation.navigate('productdetails', {id: id});
  };

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
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: '#0575E6',
            margin: 10,
          }}>
          Featured Product
        </Text>
      </View>

      <ScrollView>
        <MasonryList
          data={product?.products?.filter(e => e.featured === true)}
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
                    backgroundColor: 'white',
                  }}>
                  <View>
                    <TouchableOpacity onPress={() => productDetails(item.id)}>
                      <Image
                        source={{uri: item.image}}
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
                      {item.name}
                    </Text>
                    <Text style={{textAlign: 'center'}}>{item.company}</Text>

                    <Text
                      style={{
                        color: '#5f9ea0',
                        margin: 10,
                        textAlign: 'center',
                      }}>
                      {<FormatePrice price={item.price} />}
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
  productImageContent: {},
  btnStyle: {
    backgroundColor: '#48d1cc',
    margin: 10,
    padding: 10,
  },

  btnStyle: {
    // backgroundColor: '#48d1cc',
    backgroundColor: '#E0D72E',
    margin: 10,
    padding: 10,
    width: '80%',
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
  iconStyle: {
    fontSize: 18,
    color: '#dfb726d1',
  },
});
export default FeaturedProductList;

// return <FeaturedProductdata data={data} key={id} />;
