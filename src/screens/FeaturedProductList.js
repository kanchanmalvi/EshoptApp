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

const FeaturedProductList = () => {
  const dispatch = useDispatch();
  const Navigation = useNavigation();

  const product = useSelector(state => state.products);
  console.log(product, 'productsgjyrgeyjfg20');

  useEffect(() => {
    dispatch(testapi());
  }, [dispatch]);

  const productDetails = id => {
    Navigation.navigate('productdetails', {id: id});
  };

  return (
    <View>
      {product?.products
        ?.filter(e => e.featured === true)  
        .map((data, id) => {
          return (
            <View style={styles.productImageContent}>
              <View
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#9e9e9e38',
                }}>
                <Image
                  source={{uri: data.image}}
                  style={{width: 150, height: 150, margin: 10}}
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
                <Text style={{textAlign: 'center'}}>{data.company}</Text>

                <Text style={{textAlign: 'center'}}>
                  {data.description.slice(0, 28)}...
                </Text>

                <Text
                  style={{
                    color: '#5f9ea0',
                    margin: 10,
                    textAlign: 'center',
                  }}>
                  {<FormatePrice price={data.price} />}
                </Text>
                <TouchableOpacity style={styles.btnStyle}>
                  <Text
                    onPress={() => productDetails(data.id)}
                    style={{
                      textAlign: 'center',
                      fontSize: 15,
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
  );
};

const styles = StyleSheet.create({
  productImageContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    margin: 10,
    borderWidth: 1,
    borderColor: '#9e9e9e38',
    borderRadius: 5,
  },
  btnStyle: {
    backgroundColor: '#48d1cc',
    margin: 10,
    padding: 10,
  },
});
export default FeaturedProductList;

// return <FeaturedProductdata data={data} key={id} />;
