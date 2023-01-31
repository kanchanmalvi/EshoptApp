import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const AdminScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const Navigation = useNavigation();
  const token = useSelector(state => state?.authtoken?.token?.token);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user, 'users');
    if (initializing) setInitializing(false);
  }
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image
          source={require('../../Assets/adminSection.png')}
          style={{width: 200, height: 200}}
        />
      </View>
      <View>
        <Text style={styles.heading}>Welcome To Admin Section</Text>
        <TouchableOpacity onPress={() => Navigation.navigate('login')}>
          <Text style={styles.subheading}>
            {token == true ? 'Login' : ' Explore Here'}
            <AntDesign name="arrowright" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7f50',
    width: '100%',
    height: '100%',
  },
  heading: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  subheading: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#ffd700',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  },
});
export default AdminScreen;
