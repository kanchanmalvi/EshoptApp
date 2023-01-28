import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ToastAndroid,
} from 'react-native';
import LogoEcom from '../../components/LogoEcom';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import Container, {Toast} from 'toastify-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginFirebase = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // for async storage
  const [getEmailValue, setGetEmailValue] = useState('');
  const [getPassValue, setGetPassValue] = useState('');

  const Navigation = useNavigation();

  //form submit
  const submit = () => {
    if (!email) {
      alert('Please fill the data');
    } else if (!password) {
      null;
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setTimeout(() => {
            setEmail(''), setPassword('');
            AsyncStorage.setItem('email', email);
            AsyncStorage.setItem('password', password);
            Navigation.navigate('adminaddfrom', {
              email: getEmailValue,
              password: getPassValue,
            });
            ToastAndroid.showWithGravity(
              'User Login Successfully.',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }, 1000);
          console.log('User account created & signed in!');
        })
        .catch(error => {
          ToastAndroid.showWithGravity(
            error.message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        });
    }
  };
  const getData = () => {
    AsyncStorage.getItem('email').then(value => setGetEmailValue(value));
    AsyncStorage.getItem('password').then(value => setGetPassValue(value));
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (getEmailValue && getPassValue) {
      Navigation.navigate('adminaddfrom', {
        email: getEmailValue,
        password: getPassValue,
      });
    }
  }, [getEmailValue, getPassValue]);
  console.log(getEmailValue, getPassValue, 'getData');
  //Google Authentication
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '317417769843-m862h2gt4hf31alpuagnhm0ed9h9g8sf.apps.googleusercontent.com',
    });
  });

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    console.log(GoogleSignin, 'GoogleSignin');
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken, 'idToken');
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log(googleCredential, 'googleCredential');

    return auth().signInWithCredential(googleCredential);
  }

  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <LogoEcom />
      <View style={styles.loginContainer}>
        <View style={{marginVertical: 5}}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter User Email"
            errorStyle={{color: 'red'}}
            value={email}
            onChangeText={e => {
              setEmail(e);
            }}
            style={styles.input}
          />
        </View>
        <View style={{marginVertical: 5}}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Enter User Password"
            errorStyle={{color: 'red'}}
            value={password}
            onChangeText={e => {
              setPassword(e);
            }}
            style={styles.input}
          />
          <View style={styles.termscondition}>
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
                tintColors={{true: '#70e1f5'}}
                style={{}}
              />
              <Text style={{marginTop: 5}}>Please Check To Go For Login</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={submit} disabled={!toggleCheckBox}>
          <Text
            style={[
              styles.loginBtn,
              {backgroundColor: toggleCheckBox ? '#70e1f5' : 'gray'},
            ]}>
            Login
          </Text>
        </TouchableOpacity>
        <Container position="top" />
        <View
          style={{
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text>
            <GoogleSigninButton
              style={{height: 50}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() =>
                onGoogleButtonPress().then(() =>
                  console.log('Signed in with Google!'),
                )
              }
            />
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotBtn}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.userexist}>
            Don't Have An Acoount ,
            <Text
              style={styles.signBtn}
              onPress={() => Navigation.navigate('signup')}>
              Sign up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    color: '#fff',
    padding: 10,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  forgotBtn: {
    color: 'red',
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
  },
  userexist: {
    textAlign: 'center',
    fontSize: 15,
    color: 'grey',
  },
  signBtn: {
    color: '#00c6ff',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#00c6ff',
  },
  loginContainer: {
    padding: 10,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 18,
    borderColor: '#70e1f5',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  termscondition: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  color: {
    color: 'red',
  },
  disabled: {
    display: 'none',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginFirebase;
