import {StyleSheet, Text, View, Image, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Hr from 'react-native-hr-component';
import {TouchableOpacity} from 'react-native';
import {Button} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  remove,
} from '../features/AddToCart/cartSlice';
import FormatePrice from '../helpers/FormatePrice';
import {useNavigation} from '@react-navigation/native';

const AddProductCartDetails = () => {
  const Navigation = useNavigation();

  const cart = useSelector(state => state.cart);
  console.log(cart, 'cart');

  const dispatch = useDispatch();

  const removeproduct = item => {
    dispatch(remove(item));
  };
  const productDetailspage = () => {
    Navigation.navigate('product');
  };

  const decreaseCartIcon = item => {
    dispatch(decreaseCart(item));
  };
  const addToCarticon = item => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const placedOrder = () => {
    alert('Order Placed Successfully');
    Navigation.navigate('product');
  };
  return (
    <ScrollView>
      <View style={styles.cartInfoView}>
        <Icon
          name="arrowleft"
          style={styles.lefticonStyle}
          onPress={productDetailspage}
        />

        <Text style={styles.cartInfo}>Cart Info</Text>
      </View>

      <View>
        {cart?.cartItem?.length === 0 ? (
          <View style={styles.emptyCart}>
            <Text style={{fontSize: 20, color: 'black', marginBottom: 10}}>
              No Item In The Cart
            </Text>
            <View>
              <TouchableOpacity
                style={styles.btntextContinue}
                onPress={() => Navigation.navigate('product')}>
                <Text style={{color: 'white'}}>
                  <Icon name="arrowleft" style={{fontSize: 15}} />
                  Continue Shopping
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.xyz}>
              {cart?.cartItem?.map((i, id) => {
                return (
                  <View
                    key={id}
                    style={[styles.cartInfoViewstyle, styles.viewStyle]}>
                    <View>
                      <Image
                        source={{
                          uri: i?.image[0].url ? i.image[0].url.trim() : '',
                        }}
                        style={{width: 90, height: 90}}
                      />
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            width: 80,
                          }}>
                          {i.name}
                        </Text>
                        <Text
                          style={{
                            backgroundColor: i.colors[0],
                            color: 'transparent',
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            marginTop: 4,
                          }}>
                          {i.colors[0]}
                        </Text>
                      </View>
                      <View>
                        <Text style={{fontSize: 15}}>
                          {<FormatePrice price={i.price} />}
                        </Text>
                      </View>
                    </View>

                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                          padding: 2,
                          borderRadius: 4,
                          display: 'flex',
                          alignItems: 'center',
                        }}>
                        <View>
                          <TouchableOpacity onPress={() => decreaseCartIcon(i)}>
                            <Icon name="minussquare" size={30} color="gray" />
                          </TouchableOpacity>
                        </View>
                        <Text
                          style={{fontSize: 18, marginLeft: 5, marginRight: 5}}>
                          {i.cartQuantity}
                        </Text>
                        <View>
                          <TouchableOpacity onPress={() => addToCarticon(i)}>
                            <Icon name="plussquare" size={30} color="gray" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>

                    <View>
                      <Text
                        style={{
                          fontSize: 19,
                          color: '#708090',
                          fontWeight: 'bold',
                        }}>
                        {<FormatePrice price={i.price * i.cartQuantity} />}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Icon
                          name="delete"
                          style={styles.iconStyle}
                          onPress={() => removeproduct(i.id)}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
              <TouchableOpacity
                style={styles.btntextContinue}
                onPress={() => Navigation.navigate('product')}>
                <Text style={{color: 'white'}}> Continue Shopping</Text>
              </TouchableOpacity>
            </View>

            <View style={{margin: 10}}>
              <Hr lineColor="#d3d3d3" width={1} text="Cart Details" />
            </View>
            <View style={styles.pricedetail}>
              <View style={{}}>
                <Text style={{fontSize: 20, textAlign: 'center'}}>
                  Price Details
                </Text>
              </View>
              <View style={styles.btnStyle}>
                <Text style={{fontSize: 15, position: 'relative', right: 5}}>
                  Total items
                </Text>
                <Text style={{textAlign: 'right'}}>{cart?.totalQuantity}</Text>
              </View>

              <View style={styles.btnStyle}>
                <Text style={{fontSize: 15}}>Shipping</Text>
                <Text style>Free</Text>
              </View>

              <View style={styles.btnStyle}>
                <Text style={{fontSize: 15}}>Subtotal</Text>
                <Text
                  style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
                  <FormatePrice price={cart?.totalAmount} />
                </Text>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  style={styles.btntextClear}
                  onPress={() => dispatch(clearCart())}>
                  <Text style={{color: 'white'}}> Clear Cart</Text>
                </TouchableOpacity>
                <Button
                  title="Place order"
                  containerStyle={{
                    height: 40,
                  }}
                  buttonStyle={{backgroundColor: '#ED8F03', borderRadius: 5}}
                  titleStyle={{
                    color: 'black',
                  }}
                  onPress={placedOrder}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
    paddingBottom: 16,
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  iconStyle: {
    fontSize: 25,
    color: 'red',
  },
  lefticonStyle: {
    fontSize: 25,
    color: 'white',
    position: 'absolute',
    top: 22,
    left: 10,
  },

  cartInfo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Heebo-Regular',
  },
  cartInfoView: {
    backgroundColor: '#f4a460',
    marginBottom: 10,
    padding: 20,
  },
  cartInfoViewstyle: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  btntextContinue: {
    backgroundColor: '#4C4646',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  btntextClear: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
  },
  pricedetail: {
    backgroundColor: 'white',
    padding: 10,
  },
  placebtncolor: {
    backgroundColor: 'white',
  },
  emptyCart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 200,
  },
});
export default AddProductCartDetails;

// icon color #9acd32
