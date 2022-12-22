import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useAuth0} from 'react-native-auth0';
import LinearGradient from 'react-native-linear-gradient';

const CustomSidebarMenu = props => {
  const {clearSession, user} = useAuth0();
  const onPress = async () => {
    try {
      await clearSession();
      Navigation.navigate('welcomescreen');
      Alert.alert(`😔 ${user.name} is Logout.`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{flex: 1}}>
   
        <LinearGradient
          colors={['#74ebd5', '#ACB6E5']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <Image
            source={require('../../Assets/eshoplogo.png')}
            style={{
              height: 100,
              width: 200,
              resizeMode: 'center',
              alignSelf: 'center',
              backgroundColor: 'white',
              borderRadius: 5,
              margin: 10,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: '900',
              color: 'white',
              marginBottom: 15,
            }}>
            {user?.given_name}
          </Text>
        </LinearGradient>
    

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          padding: 20,
        }}>
        <AntDesign
          name="logout"
          size={15}
          color="white"
          style={{fontWeight: 'bold', position: 'relative', top: 6, right: 10}}
        />

        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}
          onPress={onPress}>
          Logout
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CustomSidebarMenu;
