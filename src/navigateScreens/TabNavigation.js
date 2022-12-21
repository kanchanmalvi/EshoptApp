import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoriteScrn, AddProductCartDetails} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserProfile from '../components/UserProfile';
import NestingNavigation from './NestingNavigation';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const cart = useSelector(state => state.cart);
  const wishlist = useSelector(state => state.wishList);
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Explore Now"
        component={NestingNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Ionicons
                  name="home"
                  size={21}
                  color={focused ? '#A770EF' : '#808080'}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="favoritescrn"
        component={FavoriteScrn}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{position: 'relative'}}>
                <Ionicons
                  name="heart"
                  size={25}
                  color={focused ? '#A770EF' : '#808080'}
                />
                <View
                  style={[
                    wishlist?.wishlistItem?.length === 0
                      ? styles.none
                      : styles.flex,
                  ]}>
                  <Text style={styles.favoriteiconStyle}>
                    {wishlist?.wishlistItem?.length}
                  </Text>
                </View>
              </View>
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="shoppingcart"
        component={AddProductCartDetails}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{position: 'relative'}}>
                <FontAwesome
                  name="cart-plus"
                  size={25}
                  color={focused ? '#A770EF' : '#808080'}
                />
                <View
                  style={[
                    cart?.cartItem?.length === 0 ? styles.none : styles.flex,
                  ]}>
                  <Text style={styles.cartlength}>
                    {cart?.cartItem?.length}
                  </Text>
                </View>
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="userprofile"
        component={UserProfile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <FontAwesome
                  name="user-circle-o"
                  size={25}
                  color={focused ? '#A770EF' : '#808080'}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  footerIcon: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    height: 50,
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 23,
    color: '#708090',
  },
  favoriteiconStyle: {
    position: 'absolute',
    left: 16,
    bottom: 10,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
    borderRadius: 3,
    width: 20,
    height: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    padding: 2,
  },
  cartlength: {
    position: 'absolute',
    left: 16,
    bottom: 10,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#D39D38',
    borderRadius: 3,
    width: 20,
    height: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    padding: 2,
  },
  none: {
    display: 'none',
  },
  flex: {
    display: 'flex',
  },
});
export default TabNavigation;
