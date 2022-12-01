import React, {useState} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Tab, Text, TabView, BottomSheet, Button, ListItem} from '@rneui/themed';
import {Card} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import FormatePrice from '../helpers/FormatePrice';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {clearWishList} from '../features/AddToCart/wishListSlice';

const FavoriteScrn = () => {
  const [index, setIndex] = React.useState(0);

  const [isVisible, setIsVisible] = useState(false);

  const wishlist = useSelector(state => state.wishList);
  console.log(wishlist, 'wishLisTDATA');

  const onPress = () => {
    setIsVisible(false);
  };
  const clearWishlist = () => {
    dispatch(clearWishList());
    setIsVisible(false);
  };

  const dispatch = useDispatch();
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
          <BottomSheet modalProps={{}} isVisible={isVisible}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title
                  style={{paddingTop: 20}}
                  onPress={clearWishlist}>
                  Clear Wishlist
                </ListItem.Title>
                <ListItem.Title style={{paddingTop: 20}}>
                  Add To Cart
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
              }}
              onPress={onPress}>
              Cancel
            </ListItem.Title>
          </BottomSheet>
        </SafeAreaProvider>
      </ScrollView>
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
});
export default FavoriteScrn;
