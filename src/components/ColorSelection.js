import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ColorSelection = ({product}) => {
  const {colors} = product;
  const [color, setColor] = useState(colors?.[0]);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
        }}>
        Color :
      </Text>
      {colors?.map((clr, id) => {
        return (
          <View key={id}>
            <Text
              style={[styles.colorStyle, {backgroundColor: clr}]}
              onPress={() => setColor(clr)}>
              {color === clr ? <Icon name="check" color="white" /> : null}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  colorStyle: {
    margin: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
    color: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
});

export default ColorSelection;
