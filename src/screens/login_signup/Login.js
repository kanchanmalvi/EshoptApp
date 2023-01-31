import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  TextInput,
  Text,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import React, {useState, useEffect} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import LogoEcom from '../../components/LogoEcom';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {setToken} from '../../features/AuthToken/LoginTokenSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const Navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  async function toLocalstore(res) {
    try {
      await AsyncStorage.setItem('token', JSON.stringify(res.data));
      console.log('success Token');
    } catch (error) {
      console.log(error, 'token error');
    }
  }

  function toNavigation() {
    Navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'adminaddfrom'}],
      }),
    );
  }
  const onsubmit = async data => {
    try {
      let url = 'http://10.0.2.2:5000/login';
      let body = {
        email: data.email,
        password: data.password,
      };
      const res = await axios.post(url, body, null, 'login');
      console.log(res, 'api response');
      reset();
      await updateRedux(res.data.data);
      await toLocalstore(res.data);
      Navigation.navigate('adminaddfrom');
    } catch (error) {
      alert('Invalid Credientials');
      console.log(error, 'error');
    }
  };

  const asyncData = async () => {
    try {
      let getValue = await AsyncStorage.getItem('token');
      console.log(getValue, 'success GetMsg');
      if (getValue != null) {
        updateRedux(getValue);
        toNavigation();
      } else {
        return false;
      }
    } catch (error) {
      console.log(error, 'token error');
      return false;
    }
  };
  useEffect(() => {
    asyncData();
  }, []);

  const updateRedux = async data => {
    if (typeof data == 'string') {
      data = JSON.parse(data);
    }
    dispatch(setToken(data));
  };

  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <LogoEcom />
      <View style={styles.loginContainer}>
        <View style={{marginVertical: 5}}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter User Email"
                errorStyle={{color: 'red'}}
                style={styles.input}
              />
            )}
            name="email"
          />

          <View style={{marginHorizontal: 10}}>
            {errors.email && (
              <Text style={{color: 'red'}}>This is required.</Text>
            )}
          </View>
        </View>

        <View style={{marginVertical: 5}}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter User Password"
                errorStyle={{color: 'red'}}
                style={styles.input}
                secureTextEntry={true}
              />
            )}
            name="password"
          />
          <View style={{marginHorizontal: 10}}>
            {errors.password && (
              <Text style={{color: 'red'}}>This is required.</Text>
            )}
          </View>

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
          onPress={handleSubmit(onsubmit)}
          disabled={!toggleCheckBox}>
          <Text
            style={[
              styles.loginBtn,
              {backgroundColor: toggleCheckBox ? '#70e1f5' : 'gray'},
            ]}>
            Login
          </Text>
        </TouchableOpacity>
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

export default Login;

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

//how to store token in redux toolkit using AsyncStorage in react native?

//Error while saving the token Error: [AsyncStorage] Passing null/undefined as value is not supported. If you want to remove value, Use .removeItem method instead.Passed value: undefined Passed key: token?
