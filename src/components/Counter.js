import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../features/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <View>
        <Button title="Increment value" onPress={() => dispatch(increment())} />

        <Text>{count}</Text>
        <Button title="Decrement value" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
