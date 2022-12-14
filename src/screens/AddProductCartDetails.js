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
import {Overlay} from 'react-native-elements';

const AddProductCartDetails = () => {
  const [visible, setVisible] = useState(false);
  const Navigation = useNavigation();

  const cart = useSelector(state => state.cart);

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
    setVisible(!visible);
    Navigation.navigate('ordersuccess');
    dispatch(clearCart());
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <ScrollView>
      <View style={styles.cartInfoView}>
        <Icon
          name="arrowleft"
          style={{...styles.lefticonStyle, paddingHorizontal: 10, zIndex: 100}}
          onPress={productDetailspage}
          size={25}
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}>
                  <Icon
                    name="arrowleft"
                    style={{fontSize: 18, color: 'white', marginRight: 10}}
                    color="black"
                  />
                  <Text style={{color: 'white', fontSize: 18, margin: 10}}>
                    Continue Shopping
                  </Text>
                </View>
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
                          uri: i?.image?.[0]?.url ? i?.image[0].url.trim() : '',
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
                          {i?.name}
                        </Text>
                        <Text
                          style={{
                            backgroundColor: i?.colors?.[0],
                            color: 'transparent',
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            marginTop: 4,
                          }}>
                          {i?.colors?.[0]}
                        </Text>
                      </View>
                      <View>
                        <Text style={{fontSize: 15}}>
                          {<FormatePrice price={i?.price} />}
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
                          style={{
                            fontSize: 18,
                            marginLeft: 5,
                            marginRight: 5,
                          }}>
                          {i?.cartQuantity}
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
                        {<FormatePrice price={i?.price * i?.cartQuantity} />}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Icon
                          name="delete"
                          style={styles.iconStyle}
                          onPress={() => removeproduct(i?.id)}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
              <TouchableOpacity
                style={styles.btntextContinue}
                onPress={() => Navigation.navigate('product')}>
                <Text style={{color: 'white', fontSize: 15, margin: 10}}>
                  Continue Shopping
                </Text>
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
                  onPress={toggleOverlay}
                />
              </View>
            </View>
          </View>
        )}
        {/* USER PROFILE MODAL/OVERLAY*/}
        <Overlay
          style={{height: '100%', padding: 10}}
          isVisible={visible}
          onBackdropPress={toggleOverlay}>
          <Text style={{fontSize: 20, color: 'gray', padding: 10}}>
            Do You Want To Place This Order
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              onPress={toggleOverlay}
              style={{
                fontSize: 20,
                color: 'white',
                margin: 10,
                backgroundColor: '#ff6347',
                padding: 10,
                textAlign: 'center',
                borderRadius: 5,
              }}>
              Cancel
            </Text>
            <Text
              onPress={placedOrder}
              style={{
                fontSize: 20,
                color: 'black',
                margin: 10,
                backgroundColor: '#ED8F03',
                padding: 10,
                textAlign: 'center',
                borderRadius: 5,
              }}>
              Proceed To Checkout
            </Text>
          </View>
        </Overlay>
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
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
    margin: 5,
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
  itemName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 18,
  },
});
export default AddProductCartDetails;

// icon color #9acd32
