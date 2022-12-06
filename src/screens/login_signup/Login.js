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
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '',
    });
  }, []);

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    console.log(GoogleSignin, 'GoogleSignin');

    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken, 'idToken');

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log(googleCredential, 'googleCredential');

    return auth().signInWithCredential(googleCredential);
  }

  const Navigation = useNavigation();
  auth().signInWithEmailAndPassword('johndoe@gmail.com', 'helloworld123');
  const createUser = (email, password) => {
    try {
      auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

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

          <TouchableOpacity style={{}}>
            <Text style={styles.forgotBtn}>Forgot Password</Text>
          </TouchableOpacity>

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
        <TouchableOpacity
          onPress={() => createUser(email, password)}
          disabled={!toggleCheckBox}>
          <Text
            style={[
              styles.loginBtn,
              {backgroundColor: toggleCheckBox ? '#70e1f5' : 'gray'},
            ]}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{width: '100%'}}>
          <Text>
            <GoogleSigninButton
              style={{margin: 20, height: 50, width: 300}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
            />
          </Text>
        </View>

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
    textAlign: 'right',
    fontSize: 15,
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
