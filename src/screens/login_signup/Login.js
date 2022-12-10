import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import LogoEcom from '../../components/LogoEcom';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const Navigation = useNavigation();

  const submit = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setEmail(''), setPassword('');
        Navigation.navigate('postform');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '317417769843-m862h2gt4hf31alpuagnhm0ed9h9g8sf.apps.googleusercontent.com',
    });
  });

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    console.log(GoogleSignin, 'GoogleSignin');
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken, 'idToken');
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log(googleCredential, 'googleCredential');
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <LogoEcom />
      <View style={styles.loginContainer}>
        <View style={{}}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter User Email"
            errorStyle={{color: 'red'}}
            value={email}
            onChangeText={e => {
              setEmail(e);
              setEmailError('');
            }}
            style={styles.input}
          />
        </View>
        <Text style={{marginHorizontal: 10, color: 'red'}}>{emailError}</Text>
        <View style={{}}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Enter User Password"
            errorStyle={{color: 'red'}}
            value={password}
            onChangeText={e => {
              setPassword(e);
              setPasswordError('');
            }}
            style={styles.input}
          />
          <Text style={{marginHorizontal: 10, margin: 2, color: 'red'}}>
            {passwordError}
          </Text>
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
        <TouchableOpacity style={{}}>
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
});

export default Login;
