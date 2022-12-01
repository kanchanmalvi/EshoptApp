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


  useEffect(() => {
    dispatch(testapi());
  }, [dispatch]);

  const productDetails = id => {
    Navigation.navigate('productdetails', {id: id});
  };

  return (
    <ScrollView>
      <View>
        <Text style={{textAlign:"left", fontSize:25, fontWeight:"bold", color:"black", margin:10}}>Featured Product</Text>
      </View>

      {product?.products
        ?.filter(e => e.featured === true)
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
                  <Text style={{textAlign: 'center'}}>{data.company}</Text>

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
    </ScrollView>
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
});
export default FeaturedProductList;

// return <FeaturedProductdata data={data} key={id} />;
