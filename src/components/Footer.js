import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Overlay} from 'react-native-elements';
import UserProfile from './UserProfile';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const Navigation = useNavigation();

  const getfavorite = () => {
    Navigation.navigate('favoritescrn');
  };

  const homePage = () => {
    Navigation.navigate('homepage');
  };

  const shoppingcart = () => {
    Navigation.navigate('shoppingcart');
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const cart = useSelector(state => state.cart);
  const wishlist = useSelector(state => state.wishList);

  return (
    <View>
      <View style={styles.footerIcon}>
        <TouchableOpacity onPress={() => Navigation.navigate('adminscreen')}>
          <Image
            source={require('../../Assets/admin.png')}
            style={{width: 30, height: 30, padding: 10}}
          />
        </TouchableOpacity>

        <Text style={styles.texticonstyle}>
          <Icon name="home" style={styles.iconStyle} onPress={homePage} />
        </Text>
        <View style={{position: 'relative'}}>
          <MaterialIcons
            name="favorite"
            style={styles.iconStyle}
            onPress={getfavorite}
          />
          <View
            style={[
              wishlist?.wishlistItem?.length === 0 ? styles.none : styles.flex,
            ]}>
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
          <View
            style={[cart?.cartItem?.length === 0 ? styles.none : styles.flex]}>
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
    backgroundColor: '#D39D38',
    borderRadius: 3,
    width: 22,
    height: 22,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  none: {
    display: 'none',
  },
  flex: {
    display: 'flex',
  },
});
export default Footer;

//FOR CHECKING MOBILE WIDTH
//console.log(Dimensions.get('window').width);
