import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Tab, Text, TabView, BottomSheet, Button, ListItem} from '@rneui/themed';
import {Card} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import FormatePrice from '../helpers/FormatePrice';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {clearWishList} from '../features/AddToCart/wishListSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const FavoriteScrn = () => {
  const [index, setIndex] = React.useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const wishlist = useSelector(state => state.wishList);

  const Navigation = useNavigation();

  const onPress = () => {
    setIsVisible(false);
  };
  const clearWishlist = () => {
    dispatch(clearWishList());
    setIsVisible(false);
  };

  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          backgroundColor: '#904e95',
          padding: 10,
          color: 'white',
          fontSize: 20,
        }}>
        WishList
      </Text>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: '#904e95',
          height: 2,
        }}>
        <Tab.Item
          title="Recent"
          titleStyle={{fontSize: 20}}
          icon={{name: 'heart', type: 'ionicon', color: '#904e95'}}
        />
      </Tab>

      {wishlist?.wishlistItem?.length === 0 ? (
        <View style={styles.emptywishlist}>
          <Text style={{fontSize: 20, color: 'black', marginBottom: 10}}>
            No Item In The Wishlist
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
                <AntDesign
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
        <ScrollView>
          {wishlist?.wishlistItem?.map((i, id) => {
            return (
              <View style={styles.cardflex} key={id}>
                <View>
                  <Image
                    source={{
                      uri: i?.image?.[0]?.url ? i?.image[0].url.trim() : '',
                    }}
                    style={{width: 60, height: 60, borderRadius: 30}}
                  />
                </View>
                <View>
                  <Text style={{textAlign: 'center'}}>{i.name}</Text>
                  <Text style={{textAlign: 'center'}}>
                    {<FormatePrice price={i?.price} />}
                  </Text>
                </View>

                <View>
                  <Text style={{}}>{i.company}</Text>
                </View>
                <View>
                  <Text style={{}}>
                    <Entypo
                      name="dots-three-vertical"
                      size={20}
                      onPress={() => setIsVisible(true)}
                    />
                  </Text>
                </View>
              </View>
            );
          })}

          <SafeAreaProvider>
            <BottomSheet  isVisible={isVisible}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title
                    style={{paddingTop: 20, fontSize: 17, color: 'black'}}
                    onPress={clearWishlist}>
                    <AntDesign
                      name="delete"
                      style={{fontSize: 18, marginTop: 10}}
                      color="red"
                    />{' '}
                    Clear Wishlist
                  </ListItem.Title>
                  <ListItem.Title
                    style={{paddingTop: 20, color: 'black'}}
                    onPress={() => Navigation.navigate('product')}>
                    <AntDesign
                      name="arrowleft"
                      style={{fontSize: 18, marginTop: 15}}
                      color="black"
                    />
                    Continue Shopping
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>

              <ListItem.Title
                style={{
                  backgroundColor: 'red',
                  padding: 15,
                  margin: 0,
                  width: '100%',
                  color: 'white',
                  fontSize: 20,
                }}
                onPress={onPress}>
                Cancel
              </ListItem.Title>
            </BottomSheet>
          </SafeAreaProvider>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cardflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
  },
  button: {
    margin: 10,
  },
  emptywishlist: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 200,
  },
  btntextContinue: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
});
export default FavoriteScrn;
