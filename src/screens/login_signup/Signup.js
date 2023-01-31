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
import {useNavigation} from '@react-navigation/native';
import SignupImage from '../../components/SignupImage';
import axios from 'axios';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });
  const Navigation = useNavigation();

  const handleChange = (name, value) => {
    setUserInfo({...userInfo, [name]: value});
  };

  const onSubmit = async () => {
    const {name, email, phone, password, confirmPassword, gender} = userInfo;
    let body = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      confirmPassword: confirmPassword,
      gender: gender,
    };
    let headersObj = {
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    try {
      let url = 'http://10.0.2.2:5000/register';
      let res = await axios.post(url, body, headersObj);
      console.log(res, 'api response create');
      ToastAndroid.showWithGravity(
        'User Register Successfully.',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      Navigation.navigate('login');
      setUserInfo({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        gender: '',
      });
    } catch (error) {
      console.log(error, 'error');
    }
    console.log(userInfo, 'data');
  };

  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <SignupImage />
      <View style={styles.loginContainer}>
        <View style={{marginVertical: 10}}>
          <TextInput
            placeholder="Enter the Name"
            errorStyle={{color: 'red'}}
            value={userInfo?.name}
            name="name"
            onChangeText={text => handleChange('name', text)}
            style={styles.input}
          />
        </View>

        <View style={{marginVertical: 10}}>
          <TextInput
            placeholder="Enter the Email"
            name="email"
            errorStyle={{color: 'red'}}
            value={userInfo?.email}
            onChangeText={text => handleChange('email', text)}
            style={styles.input}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <TextInput
            placeholder="Enter the Password"
            errorStyle={{color: 'red'}}
            name="password"
            value={userInfo?.password}
            onChangeText={text => handleChange('password', text)}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <TextInput
            placeholder="Enter Confirm Password"
            errorStyle={{color: 'red'}}
            name="confirmPassword"
            value={userInfo?.confirmPassword}
            onChangeText={text => handleChange('confirmPassword', text)}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <TextInput
            placeholder="Enter Phone Number"
            errorStyle={{color: 'red'}}
            name="phone"
            value={userInfo?.phone}
            onChangeText={text => handleChange('phone', text)}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>
        <View style={{marginVertical: 10}}>
          <TextInput
            placeholder="Enter Your Gender"
            errorStyle={{color: 'red'}}
            name="gender"
            value={userInfo?.gender}
            onChangeText={text => handleChange('gender', text)}
            style={styles.input}
          />
        </View>

        <TouchableOpacity onPress={onSubmit}>
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
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#00c6ff',
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

//how to create registration form in react native using usestate hook with objects?
