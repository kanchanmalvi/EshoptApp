import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useAuth0} from 'react-native-auth0';

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
      <View style={{backgroundColor: '#fe8c00'}}>
        <Image
          source={require('../../Assets/eshoplogo.png')}
          style={{
            height: 150,
            width: 150,
            resizeMode: 'center',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 80,
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
      </View>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          backgroundColor: '#FF2E2E',
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

export default CustomSidebarMenu;

const styles = StyleSheet.create({});
