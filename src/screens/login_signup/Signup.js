import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import SignupImage from '../../components/SignupImage';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // for async storage
  const [getEmailValue, setGetEmailValue] = useState('');
  const [getPassValue, setGetPassValue] = useState('');

  const Navigation = useNavigation();

  const signupBtn = () => {};

  const getData = () => {
    AsyncStorage.getItem('Email').then(value => setGetEmailValue(value));
    AsyncStorage.getItem('Password').then(value => setGetPassValue(value));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (getEmailValue && getPassValue) {
      Navigation.navigate('homepage', {
        email: getEmailValue,
        password: getPassValue,
      });
    }
  }, [getEmailValue, getPassValue]);
  console.log(getEmailValue, getPassValue, 'getData');
  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <SignupImage />
      <View style={styles.loginContainer}>
        <View style={{}}>
          <TextInput
            placeholder="Enter User Name"
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
            placeholder="Enter User Password"
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
            placeholder="Enter User Confirm Password"
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
        </View>

        <TouchableOpacity>
          <Text style={styles.loginBtn}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.userexist}>
            Already Have An Account,
            <Text
              style={styles.signBtn}
              onPress={() => Navigation.navigate('login')}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: '#70e1f5',
    color: '#fff',
    padding: 10,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
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
    paddingLeft: 10,
  },
  loginContainer: {
    padding: 10,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 15,
    borderColor: '#70e1f5',
    borderWidth: 1,
    marginHorizontal: 10,
  },
});

export default Signup;
