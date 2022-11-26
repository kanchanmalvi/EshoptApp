import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddToCart = ({product}) => {
  const {colors, stock} = product;
  const [color, setColor] = useState(colors[0]);

  // const [amount, setAmount] = useState(0);

  {
    /* Product add to cart*/
  }

  // const increaseValue = () => {
  //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };
  // const decreaseValue = () => {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  return (
    <View>
      <View style={styles.colorStyles}>
        <Text style={{color: '#778899', fontSize: 16, margin: 5}}>
          Colors :
        </Text>
        {colors.map((clr, index) => {
          return (
            <View key={index}>
              <Button
                buttonStyle={{
                  backgroundColor: clr,
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
                icon={
                  color === clr ? <Icon name="check" color="white" /> : null
                }
                onPress={() => setColor(clr)}>
                {clr}
              </Button>
            </View>
          );
        })}
      </View>

      {/* Product add to cart*/}

      {/* <ProductAddToCart /> */}
      {/* // amount={amount}
        // increaseValue={increaseValue}
        // decreaseValue={decreaseValue} */}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
  counterStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  cardStyle: {
    margin: 10,
    padding: 10,
  },
  clearDataBtn: {
    backgroundColor: 'red',
    padding: 10,
    margin: 20,
  },
  colorStyles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});

export default AddToCart;
