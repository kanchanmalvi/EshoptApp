import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import DocumentPicker from 'react-native-document-picker';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';

const PostForm = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);
  const [newState, setNewState] = useState([]);
  const [showData, setShowData] = useState({});

  const Navigation = useNavigation();

  //document upload
  const pickImage = async () => {
    try {
      const response = await DocumentPicker?.pickSingle({
        type: [DocumentPicker.types.images],
      });
      console.log(response, 'rsposeImage');
      setImage(response);
    } catch (error) {
      console.log(error, 'catch error');
    }
  };

  //For Show The Product List  Firebase GET Method

  useEffect(() => {
    xyz();
  });

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

  //For Create The Product Form  Firebase POST Method
  const submit = () => {
    if (!name) {
      alert('Please fill the data');
    } else if (!brand) {
      alert('Please fill the data');
    } else if (!price) {
      alert('Please fill the data');
    } else if (!desc) {
      alert('Please fill the data');
    } else if (!image) {
      alert('Please fill the data');
    } else {
      try {
        database()
          .ref('/products/10')
          .push({
            value: {name, brand, price, desc, image},
          })
          .then(
            () => {
              console.log('data set shiw', name, brand, price, desc, image);
            },
            setName(''),
            setBrand(''),
            setDesc(''),
            setImage(null),
            setPrice(''),
          );

        Navigation.navigate('showproductlist', {
          newState,
        });
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'orange',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',

            margin: 20,
          }}>
          Add Product
        </Text>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          margin: 10,
        }}>
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
          Choose image
          <Text
            style={{
              fontSize: 12,
              color: 'black',
            }}>
            {image?.name}
          </Text>
        </Text>

        <Button
          title="Submit"
          onPress={submit}
          color="#70e1f5"
          style={styles.button}
        />
      </View>
    </View>
  );
};
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
    height: 50,
  },
});
export default PostForm;
