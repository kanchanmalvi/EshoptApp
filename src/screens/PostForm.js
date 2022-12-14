import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DocumentPicker from 'react-native-document-picker';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';

export default function PostForm() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState('');
  const [process, setProcess] = useState('');

  const [newState, setNewState] = useState([]);
  const [showData, setShowData] = useState({});
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // for async storage
  const [getEmailValue, setGetEmailValue] = useState('');
  const [getPassValue, setGetPassValue] = useState('');

  const Navigation = useNavigation();

  // user Logout
  const logout = () => {
    auth()
      .signOut()
      .then(
        () =>
          Navigation.navigate('login', {
            email: getEmailValue,
            password: getPassValue,
          }),
        AsyncStorage.removeItem('email').then(value => setGetEmailValue(value)),
        AsyncStorage.removeItem('password').then(value =>
          setGetPassValue(value),
        ),

        ToastAndroid.showWithGravity(
          'User Logout Successfully.',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        ),
      )
      .catch(error => {
        console.log(error, 'error 34');
      });
  };
  // user Details
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; //
  }, []);
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user, 'users');
    if (initializing) setInitializing(false);
  }

  //For Show The Product List  Firebase GET Method
  useEffect(() => {
    xyz();
  }, [newState]);

  const xyz = () => {
    try {
      database()
        .ref('/products')
        .once('value')
        .then(snapshot => {
          let tt = snapshot.val();
          tt = tt['10'];
          let temparr = [];
          console.log('User data: ', tt['10']);
          if (Object.entries(showData).length !== Object.entries(tt).length) {
            setShowData(tt);
            for (let [key, value] of Object.entries(tt)) {
              temparr.push(value);
            }
            setNewState(temparr);
          }
        });
    } catch (error) {
      console.log(error, 'check error 74');
    }
  };

  //document upload
  const pickImage = async () => {
    try {
      const response = await DocumentPicker?.pickSingle({
        type: [DocumentPicker.types.images],
      });

      console.log('seting images', response);
      setImage(response);
    } catch (error) {
      setImage(null);

      alert(
        DocumentPicker.isCancel(error)
          ? 'Canceled'
          : 'Unknown Error: ' + JSON.stringify(error),
      );
      console.log(error, 'catch error');
      setImageError(error.message);
    }
  };

  //For Create The Product Form  Firebase POST Method
  const submit = async () => {
    if (!name) {
      ToastAndroid.showWithGravity(
        'Please fill the data',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if (!brand) {
      ToastAndroid.showWithGravity(
        'Please fill the data',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if (!price) {
      ToastAndroid.showWithGravity(
        'Please fill the data',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if (!desc) {
      ToastAndroid.showWithGravity(
        'Please fill the data',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if (!image) {
      ToastAndroid.showWithGravity(
        'Please fill the data',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      try {
        if (Object.keys(image).length == 0)
          return alert('Please Select any image');
        console.log(image?.uri.replace('file://', ''));
        console.log(image?.name, 'file nae');
        const reference = storage().ref(`/product-images/${image?.name}`);
        const task = reference.putFile(image?.uri.replace('file://', ''));
        console.log(task, 'task');
        task.on('state_changed', taskSnapshot => {
          setProcess(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
        });
        task.then(() => {
          alert('Image uploaded to the bucket!');
          setProcess('');
        });
        setImage(null);
        const img = [
          'https://firebasestorage.googleapis.com/v0/b/newestoreprojectwithfirebase.appspot.com/o/2022-11-08%20(1).png?alt=media&token=99bd01c4-479c-4448-bdd9-67244ea79026',
        ];
        database()
          .ref('/products/10')
          .push({
            value: {name, brand, price, desc, img: image},
          })
          .then(
            () => {
              console.log('data set shiw', name, brand, price, desc, img);
            },
            setName(''),
            setBrand(''),
            setDesc(''),
            setImage(null),
            setPrice(''),
          );
        Navigation.navigate('showproductlist', {newState});
      } catch (error) {
        console.log(error, 'checking error');
      }
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        {user && (
          <Text style={{fontSize: 15, marginVertical: 10}}>
            Hello, {user?.email}
          </Text>
        )}
        <Text
          style={{
            fontSize: 15,
            backgroundColor: 'red',
            color: 'white',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={logout}>
          Logout
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#ffd194',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{textAlign: 'center', color: 'white', fontSize: 25}}
          onPress={() => Navigation.navigate('showproductlist', {newState})}>
          View List Of The Products
        </Text>
      </TouchableOpacity>

      <View
        style={{
          margin: 10,
        }}>
        <View>
          <Text style={{color: 'black', textAlign: 'center', fontSize: 20}}>
            Add New Product
          </Text>
        </View>
        <TextInput
          placeholder="Enter Name"
          value={name}
          onChangeText={e => setName(e)}
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Enter Brand"
          value={brand}
          onChangeText={e => setBrand(e)}
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Enter Price"
          value={price}
          onChangeText={e => setPrice(e)}
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Enter Description"
          value={desc}
          onChangeText={e => setDesc(e)}
          style={styles.TextInput}
        />
        <Text onPress={() => pickImage()} style={styles.TextInput}>
          Choose Image
          <Text
            style={{
              fontSize: 12,
              color: 'black',
            }}>
            {image?.name}
          </Text>
        </Text>

        <Text>{process}</Text>
        {imageError && (
          <View>
            <Text style={[imageError ? styles.display : styles.displayNone]}>
              {imageError}
            </Text>
          </View>
        )}
        <TouchableOpacity onPress={submit}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageDisplay: {
    height: 50,
    width: 50,
  },
  imageNotDisplay: {
    display: 'none',
  },
  TextInput: {
    fontSize: 15,
    borderColor: '#70e1f5',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#70e1f5',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  display: {
    color: 'red',
    fontSize: 15,
    marginBottom: 5,
  },
  displayNone: {
    color: 'red',
  },
});
