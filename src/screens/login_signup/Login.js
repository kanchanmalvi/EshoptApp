import {
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import LogoEcom from '../../components/LogoEcom';
import CheckBox from '@react-native-community/checkbox';

const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async data => {};
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

          {errors.email && (
            <Text style={{color: 'red'}}>This is required.</Text>
          )}
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

          {errors.password && (
            <Text style={{color: 'red'}}>This is required.</Text>
          )}
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
          onPress={handleSubmit(onSubmit)}
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
