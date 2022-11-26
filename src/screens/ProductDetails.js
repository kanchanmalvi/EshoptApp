//{/**/}
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FormatePrice from '../helpers/FormatePrice';
import StarRating from '../components/StarRating';
import Hr from 'react-native-hr-component';
import AddToCart from './AddToCart';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {detailApi} from '../features/ProductDetails/detailsSlice';
import {addToCart} from '../features/AddToCart/cartSlice';
// import ProductAddToCart from './ProductAddToCart';

const ProductDetails = ({route}) => {
  const dispatch = useDispatch();
  const Navigation = useNavigation();
  const prodetails = useSelector(state => state.productDetails);
  console.log(prodetails, 'prodetails');

  const id = route.params?.id;
  useEffect(() => {
    dispatch(detailApi(id));
  }, []);

  const {
    color,
    image,
    name,
    company,
    stars,
    reviews,
    description,
    stock,
    price,
  } = prodetails?.product;

  const addcart = p => {
    dispatch(addToCart(p));
    Navigation.navigate('shoppingcart', {id: id});
    ToastAndroid.showWithGravity(
      'ITEM ADDED TO THE CART',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.isArray(image) &&
          prodetails?.product?.image.map((e, i) => {
            return (
              <Image
                key={i}
                source={{uri: e?.url ? e.url.trim() : ''}}
                resizeMode="cover"
                style={{
                  width: 200,
                  height: 200,
                  margin: 10,
                
                  borderRadius: 2,
                }}
              />
            );
          })}
      </ScrollView>
      <Text style={styles.heading}>{company}</Text>
      <Text style={styles.heading}> Brand -{name}</Text>

      <StarRating starsrating={stars} reviews={reviews} />

      <Text
        style={{margin: 10, textAlign: 'left', color: '#696969', fontSize: 15}}>
        {description}
      </Text>
      <View style={styles.pricestockStyle}>
        <Text
          style={{
            color: '#5f9ea0',
            marginLeft: 10,
            fontSize: 18,
          }}>
          {<FormatePrice price={price} />} /-
        </Text>
      </View>

      <View>
        <Text style={styles.stockcolor}>
          {stock > 0 ? 'In Stock' : 'Not Available'}
        </Text>
      </View>

      <Hr lineColor="black" width={1} text="Select Color" />

      {stock > 0 && <AddToCart product={prodetails?.product} />}
      {/* {stock > 0 && <ProductAddToCart product={prodetails?.product} />} */}

      <View>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => addcart(prodetails)}>
          <Text style={styles.addToCart}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
    color: 'black',
  },
  checkoutBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  buyNowbtn: {
    backgroundColor: '#ffd700',
    padding: 10,
    margin: 10,
    color: 'black',
    borderRadius: 5,
  },
  addToCart: {
    backgroundColor: '#48d1cc',
    padding: 10,
    margin: 10,
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
  },
  customStylesHere: {
    fontWeight: 'bold',
    color: 'orange',
  },
  pricestockStyle: {
    margin: 10,
  },
  stockcolor: {
    color: 'green',
    fontSize: 18,
    marginLeft: 20,
  },
});
export default ProductDetails;
