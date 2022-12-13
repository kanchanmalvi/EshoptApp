import {
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
  View,
} from 'react-native';
import React from 'react';
import {Card, Button, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const About = () => {
  const Navigation = useNavigation();
  const win = Dimensions.get('window');

  const ratio = win.width / 541;
  return (
    <ScrollView>
      <View>
        <Image
          source={require('../../Assets/aboutus.jpg')}
          style={{width: win.width, height: 362 * ratio, padding: 10}}
          resizeMode="cover"
        />
      </View>
      <Card>
        <Card.Title>Some Information About </Card.Title>
        <Card.Title style={{}}>ESHOP STORE</Card.Title>
        <Text style={{marginBottom: 10}}>
          ESHOP STORE is an APP which is designed to allow owners and customers
          to sell or buy product online without going into the website. The APP
          can be download for free from any Android phones with a minimum
          version of 2.3. The APP gives the same feeling like buying something
          online by visiting the website. The features that are included on the
          website have been incorporated into this APP. This is built using the
          Android Studio, REACT NATIVE framework, which uses for building
          frontend part language and the backend of the eshop is Node which is
          the server side rendering language.
        </Text>
        <Button
          icon={
            <Icon
              name="sc-telegram"
              type="evilicon"
              color="#ffffff"
              iconStyle={{marginRight: 10}}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: '#66cdaa',
          }}
          title="EXPLORE NOW"
          onPress={() => Navigation.navigate('product')}
        />
      </Card>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default About;
