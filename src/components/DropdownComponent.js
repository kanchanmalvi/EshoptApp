import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch} from 'react-redux';
import {sorting} from '../features/AllProducts/allProductsSlice';

const data = [
  {label: 'Price (Lowest)', value: 'Lowest'},
  {label: 'Price (Highest)', value: 'Highest'},
  {label: 'Price (a-z)', value: 'a-z'},
  {label: 'Price (z-a)', value: 'z-a'},
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sorting(value));
  }, [value, dispatch]);

  return (
    <View style={styles.container}>
      <Dropdown
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '  Sort-by : Featured '}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={t => setValue(t)}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    width: 350,
  },
  placeholderStyle: {
    fontSize: 18,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },

  iconStyle: {
    color: 'black',
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
});
