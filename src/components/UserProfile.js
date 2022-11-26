import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth0} from 'react-native-auth0';

const UserProfile = ({closeOverlay}) => {
  const {user, clearSession} = useAuth0();

  const Navigation = useNavigation();

  const onPress = async () => {
    try {
      await clearSession();
      Navigation.navigate('entrypoint');
      Alert.alert(`😔 ${user.name} is Logout. `);
      closeOverlay(false);
    } catch (e) {
      console.log(e);
    }
  };

  const ContinueShop = () => {
    Navigation.navigate('homepage');
    closeOverlay(false);
  };

  return (
    <View>
      <LinearGradient
        colors={['#22c1c3', '#fdbb2d']}
        style={styles.linearGradient}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <Image source={{uri: user?.picture}} style={styles.userImage} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Hey, {user?.name}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 5,
            color: '#FFFAFA',
            fontSize: 16,
          }}>
          {user?.email}
        </Text>
        <LinearGradient
          colors={['#642B73', '#C6426E']}
          style={{marginTop: 10, borderRadius: 5}}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <TouchableOpacity
            style={styles.btntextContinue}
            onPress={ContinueShop}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              <Icon name="ios-arrow-undo-outline" size={18} /> Back To Home
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </LinearGradient>

      <View style={{margin: 20}}>
        <View style={{marginBottom: 20}}>
          <Text style={styles.acountInfo}>Account Info</Text>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.infoText}>NAME : {user?.name}</Text>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.infoText}>GIVENNAME : {user?.given_name}</Text>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.infoText}>EMAIL : {user?.email}</Text>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.infoText}>USERNAME :{user?.nickname}</Text>
        </View>
      </View>
      <View>
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
    </View>
  );
};
const styles = StyleSheet.create({
  userImage: {
    height: 170,
    width: 170,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,

    padding: 10,
    width: 350,
    display: 'flex',
  },
  btntextContinue: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  acountInfo: {
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoView: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  infoText: {
    marginBottom: 10,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
  },
});
export default UserProfile;

// const userlogout =()=>{
// AsyncStorage.removeItem('Email');
// AsyncStorage.removeItem('Password');
//  alert('user logout');
//  Navigation.navigate('login');
// }
