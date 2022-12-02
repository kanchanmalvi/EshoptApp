import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
} from 'react-native';
//import {Header as HeaderRNE, Input} from '@rneui/themed';
import LogoEcom from '../../components/LogoEcom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // for async storage
  const [getEmailValue, setGetEmailValue] = useState('');
  const [getPassValue, setGetPassValue] = useState('');

  const Navigation = useNavigation();

  const loginBtn = () => {
    let passwordValidation =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // let emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let emailValidation = /\S+@+\S+\.\S/;
    if (!email === 'kanchan@gmail.com') {
      setEmailError('Please fill details');
    } else if (!emailValidation.test(email)) {
      setEmailError('Invalid Credential');
    } else if (!password === 'Kanchan@123') {
      setPasswordError('Please fill details');
    } else if (!passwordValidation.test(password)) {
      setPasswordError('Invalid Credential');
    } else if (email && password) {
      AsyncStorage.setItem('Email', email);
      AsyncStorage.setItem('Password', password);
      Navigation.navigate('homepage', {
        email: getEmailValue,
        password: getPassValue,
      });
      setEmail('');
      setPassword('');
      Alert.alert('Login Successfully');
      Navigation.navigate('homepage');
    } else {
    }
  };

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
      <LogoEcom />
      <View style={styles.loginContainer}>
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
        </View>

        <TouchableOpacity onPress={loginBtn}>
          <Text style={styles.loginBtn}>Login</Text>
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
});

export default Login;
