import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
const GetDimention = () => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    //Get device Height
    setHeight(Dimensions.get('window').height);
    //Get device Width
    setWidth(Dimensions.get('window').width);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          React Native Dimensions
          {'\n'}
          To Get Device Height Width in React Native
        </Text>
        <Text style={styles.textStyle}>
          Device height: {height}, width: {width}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});
export default GetDimention;
