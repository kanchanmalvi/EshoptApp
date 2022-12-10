import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AdminScreen = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image
          source={require('../../Assets/adminSection.png')}
          style={{margin: 20, width: 200, height: 200}}
        />
      </View>
      <View>
        <Text style={styles.heading}>Welcome To Admin Section</Text>
        <TouchableOpacity onPress={() => Navigation.navigate('login')}>
          <Text style={styles.subheading}>
            Login <AntDesign name="arrowright" size={20} />
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
    backgroundColor: '##ff7f50',
    width: '100%',
    height: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: '#ffd194',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subheading: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#83a4d4',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
export default AdminScreen;
