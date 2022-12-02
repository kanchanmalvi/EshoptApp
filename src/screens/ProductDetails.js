//{/**/}
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FormatePrice from '../helpers/FormatePrice';
import StarRating from '../components/StarRating';
import Hr from 'react-native-hr-component';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {detailApi} from '../features/ProductDetails/detailsSlice';
import {addToCart} from '../features/AddToCart/cartSlice';
import {addtoWishList} from '../features/AddToCart/wishListSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductDetails = ({route}) => {
  const dispatch = useDispatch();
  const Navigation = useNavigation();
  const prodetails = useSelector(state => state.productDetails);

  const id = route.params?.id;
  useEffect(() => {
    dispatch(detailApi(id));
  }, []);

  const {
    colors,
    image,
    name,
    company,
    stars,
    reviews,
    description,
    stock,
    price,
  } = prodetails?.product;

  const [color, setColor] = useState(colors?.[0]);

  console.log(color, 'color');
  const addcart = p => {
    dispatch(addToCart(p?.product, color, id, price));
    Navigation.navigate('shoppingcart', {id: id});
    ToastAndroid.showWithGravity(
      'ITEM ADDED TO THE CART',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const addwishlist = p => {
    dispatch(addtoWishList(p?.product));
    Navigation.navigate('favoritescrn', {id: id});
    ToastAndroid.showWithGravity(
      'ITEM ADDED TO THE WISHLIST',
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

      <View style={{justifyContent: 'space-evenly'}}>
        <Text
          style={{alignSelf: 'auto', margin: 10, fontSize: 15, lineHeight: 23}}>
          {description}
        </Text>
      </View>

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
        <Text
          style={[styles.stockcolor, stock > 0 ? styles.green : styles.red]}>
          {stock > 0 ? 'In Stock' : 'Not Available'}
        </Text>
      </View>

      <Hr lineColor="black" width={1} text="Select Color" />

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
          }}>
          Color :
        </Text>
        {colors?.map((clr, id) => {
          return (
            <View key={id}>
              <Text
                style={[styles.colorStyle, {backgroundColor: clr}]}
                onPress={() => setColor(clr)}>
                {color === clr ? <Icon name="check" color="white" /> : null}
              </Text>
            </View>
          );
        })}
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => addcart(prodetails)}>
          <Text style={styles.addToCart}>Add To Cart</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => addwishlist(prodetails)}>
          <Text style={styles.wishList}>WishList</Text>
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
    backgroundColor: '#9acd32',
    padding: 10,
    margin: 10,
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wishList: {
    backgroundColor: '#ffd700',
    padding: 10,
    margin: 10,
    color: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  customStylesHere: {
    fontWeight: 'bold',
    color: 'orange',
  },
  pricestockStyle: {
    margin: 10,
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  stockcolor: {
    fontSize: 18,
    marginLeft: 20,
  },
  colorStyle: {
    margin: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
    color: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
});
export default ProductDetails;

// const addwishlist = p => {
//.log(p, 'addtowishlist');
// console.log();
// dispatch(addtoWishList(p?.product));
// Navigation.navigate('favoritescrn', {id: id});
// ToastAndroid.showWithGravity(
//  'ITEM ADDED TO THE WISHLIST',
//  ToastAndroid.SHORT,
//  ToastAndroid.CENTER,
// );
//};
// backgroundColor: '#48d1cc',
