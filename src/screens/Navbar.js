import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Button, Card} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {testapi} from '../features/AllProducts/allProductsSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const Navigation = useNavigation();
  // useEffect(() => {
  //   let url = 'products';
  //   dispatch(testapi(url));
  // }, [dispatch]);

  const onPress = async () => {
    Navigation.toggleDrawer();
  };

  const win = Dimensions.get('window');

  const ratio = win.width / 541;

  return (
    <ScrollView>
      <View style={styles.baseStyle}>
        <Text style={styles.innerText}> 😍 Good To See You</Text>
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="bars"
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'black',
              padding: 10,
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          source={require('../../Assets/black.webp')}
          style={{width: win.width, height: 362 * ratio}}
          resizeMode="cover"
        />

        <Image
          source={require('../../Assets/cart.jpg')}
          style={{width: win.width, height: 362 * ratio}}
          resizeMode="cover"
        />
        <Image
          source={require('../../Assets/megasale.webp')}
          style={{width: win.width, height: 362 * ratio}}
          resizeMode="cover"
        />
      </ScrollView>

      <Card style={styles.allProductStyles} title="All Products">
        <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 20}}>
          See All Product
        </Text>
        <Button
          icon={
            <Icon
              name="caretright"
              color="#ffffff"
              style={{position: 'relative', right: 10, top: 1}}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: '#20b2aa',
          }}
          title="VIEW NOW"
          onPress={() => Navigation.navigate('product')}
        />
      </Card>

      <View style={styles.featureProductStyles}>
        <Card style={styles.allProductStyles} title="All Products">
          <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 20}}>
            Feature Products
          </Text>
          <View>
            <Button
              icon={
                <Icon
                  name="caretright"
                  color="white"
                  style={{position: 'relative', right: 10, top: 1}}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#ffa07a',
              }}
              title="VIEW NOW"
              onPress={() => Navigation.navigate('featuredproducts')}
            />
          </View>
        </Card>
        {/* <Text onPress={() => pickImage()}>choose Image</Text> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navbarStyles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    margin: 10,
  },
  baseStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 10,
  },
  textStyles: {
    color: '#48d1cc',
    fontSize: 20,
  },

  innerText: {
    color: '#fd746c',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
  },
  innerTextgiven: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
  },

  allProductStyles: {},
  featureProductStyles: {},
});

export default Navbar;

// const logoutUser = () => {
//   AsyncStorage.removeItem('Email');
//   AsyncStorage.removeItem('Password');
//   alert('user logout');
//   navigation.navigate('login');
// };
