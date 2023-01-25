import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const Project1 = ({navigation}) => {
  const [rgba, setRgba] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.floor(Math.random() * 256);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };

  const back = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text
        style={styles.heading}
        onPress={() => {
          setRgba([...rgba, randomColor()]);
        }}>
        Generate Random Color
      </Text>

      <TouchableOpacity
        style={styles.test}
        // onPress={() => navigation.goBack()}
        onPress={back}>
        <Text style={styles.goBack}>Go Back</Text>
      </TouchableOpacity>

      <FlatList
        data={rgba}
        keyExtractor={key => key}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: item,
                margin: 10,
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}>
              <Text style={styles.textBox}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
  },
  textBox: {
    color: 'black',
    fontSize: 20,
  },

  test: {
    backgroundColor: 'black',
    margin: 40,
    padding: 10,
  },

  goBack: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Project1;



// let headers = {
//   Accept: '*/*',
//   'Content-Type': 'application/json',
//   Authorization: 'Bearer ' + token,
// }

// let configObject = {
//   headers: headers,
// }

// const submit = async (aa: any) => {
//   let body = {
//     barcode: parseInt(aa.product_barcode),
//     name: aa.product_name,
//     product_description: aa.product_description,
//     quantity: parseInt(aa.product_quantity),
//     category: aa.product_category,
//     unit: aa.product_unit,
//     price: parseInt(aa.product_price),
//   }
//   console.log(body, configObject, 'formdata')
//   try {
//     const response = await axios.post(
//       'http://192.168.1.21:8000/api/product',
//       body,
//       configObject,
//     )
//     // const myData = response.data
//     console.log(response, '26')
//   } catch (error) {
//     console.log(error, 'testing error')
//   }
// }