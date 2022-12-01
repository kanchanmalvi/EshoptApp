import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Overlay} from 'react-native-elements';
import UserProfile from './UserProfile';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();

  const getfavorite = () => {
    navigation.navigate('favoritescrn');
  };

  const homePage = () => {
    navigation.navigate('homepage');
  };

  const shoppingcart = () => {
    navigation.navigate('shoppingcart');
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const cart = useSelector(state => state.cart);

  const wishlist = useSelector(state => state.wishList);
  console.log(wishlist, 'wishlist');

  return (
    <View>
      <View style={styles.footerIcon}>
        <Text style={styles.texticonstyle}>
          <Icon name="home" style={styles.iconStyle} onPress={homePage} />
        </Text>
        <View style={{position: 'relative'}}>
          <MaterialIcons
            name="favorite"
            style={styles.iconStyle}
            onPress={getfavorite}
          />
          <View style={{}}>
            <Text style={styles.favoriteiconStyle}>
              {wishlist?.wishlistItem?.length}
            </Text>
          </View>
        </View>

        <View style={{position: 'relative'}}>
          <Icon 
            name="cart-plus"
            style={styles.iconStyle}
            onPress={shoppingcart}
          />
          <View style={{}}>
            <Text style={styles.cartlength}>{cart?.cartItem?.length}</Text>
          </View>
        </View>

        <Text style={styles.texticonstyle}>
          <Icon name="user" style={styles.iconStyle} onPress={toggleOverlay} />
        </Text>
      </View>

      {/* USER PROFILE MODAL/OVERLAY*/}
      <Overlay
        style={{height: '100%'}}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <UserProfile closeOverlay={setVisible} />
      </Overlay>
    </View>
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
    width: 22,
    height: 22,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
  },
  cartlength: {
    position: 'absolute',
    left: 16,
    bottom: 10,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#005c97',
    borderRadius: 3,
    width: 22,
    height: 22,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
export default Footer;

//FOR CHECKING MOBILE WIDTH
//console.log(Dimensions.get('window').width);
