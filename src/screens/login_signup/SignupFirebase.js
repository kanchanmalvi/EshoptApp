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
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Navigation = useNavigation();

  const signupBtn = () => {
    if (!name) {
      alert('Please fill the data');
    } else if (!email) {
      null;
    } else if (!password) {
      null;
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(credential => {
          database()
            .ref('user')
            .set({
              name: name,
              email: email,
              password: password,
            })
            .then(() => console.log('Data set.'));

          console.log(
            credential,
            'User account created & signed in!',
            name,
            password,
            email,
          );
          setTimeout(() => {
            setName(''), setEmail(''), setPassword('');
            Navigation.navigate('login');
            ToastAndroid.showWithGravity(
              'Create User Successfully.',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }, 1000);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <SignupImage />
      <View style={styles.loginContainer}>
        <View style={{marginVertical: 10}}>
          <TextInput
            placeholder="Enter the Name"
            errorStyle={{color: 'red'}}
            value={name}
            onChangeText={e => {
              setName(e);
            }}
            style={styles.input}
          />
        </View>

        <View style={{marginVertical: 10}}>
          <TextInput
            placeholder="Enter the Email"
            errorStyle={{color: 'red'}}
            value={email}
            onChangeText={e => {
              setEmail(e);
            }}
            style={styles.input}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <TextInput
            placeholder="Enter the Password"
            errorStyle={{color: 'red'}}
            value={password}
            onChangeText={e => {
              setPassword(e);
            }}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity onPress={signupBtn}>
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
