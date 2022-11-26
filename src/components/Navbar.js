import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Button, Card} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {useAuth0} from 'react-native-auth0';
import Icon from 'react-native-vector-icons/AntDesign';

const Navbar = () => {
  const Navigation = useNavigation();
  const {clearSession, user} = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
      Navigation.navigate('entrypoint');
      Alert.alert(`😔 ${user.name} is Logout.`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView>
      <View style={styles.baseStyle}>
        <View style={styles.baseText}>
          <Text style={styles.innerText}> 😍 Good To See You</Text>
          <Text style={styles.innerTextgiven}>{user?.given_name}</Text>
        </View>
        <TouchableOpacity>
          <Button
            buttonStyle={{
              backgroundColor: 'red',
            }}
            style={[styles.textStyles, styles.btn]}
            title="Logout"
            color="error"
            onPress={onPress}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.navbarStyles}>
        <TouchableOpacity onPress={() => Navigation.navigate('homepage')}>
          <Text style={styles.textStyles}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate('about')}>
          <Text style={styles.textStyles}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate('contact')}>
          <Text style={styles.textStyles}>Contact</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal>
        <Image
          source={require('../../Assets/black.webp')}
          style={{width: 370, height: 500, margin: 10}}
        />

        <Image
          source={require('../../Assets/cart.jpg')}
          style={{width: 370, height: 500, margin: 10}}
        />
        <Image
          source={require('../../Assets/megasale.webp')}
          style={{width: 370, height: 500, margin: 10}}
        />
      </ScrollView>

      <Card style={styles.allProductStyles} title="All Products">
        <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 20}}>
          See All Product
        </Text>
        <Button
          icon={<Icon name="caretright" color="#ffffff" />}
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
          <Button
            icon={<Icon name="caretright" color="#ffffff" />}
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
        </Card>
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
    color: 'black',
    fontSize: 25,
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
