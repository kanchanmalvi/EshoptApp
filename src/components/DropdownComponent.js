import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Modal, ScrollView} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch} from 'react-redux';
import {sorting} from '../features/AllProducts/allProductsSlice';
import CategoryFilter from './CategoryFilter';

const data = [
  {label: 'Price (Lowest)', value: 'Lowest'},
  {label: 'Price (Highest)', value: 'Highest'},
  {label: 'Price (a-z)', value: 'a-z'},
  {label: 'Price (z-a)', value: 'z-a'},
];

const DropdownComponent = ({allProduct, setAllProduct, product}) => {
  console.log('allProduct', allProduct);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sorting(value));
  }, [value, dispatch]);

  //CategoryWiseFilter

  const getCategoryData = (data, category) => {
    let newval = data.map(i => {
      return i[category];
    });
    return (newval = ['All', ...new Set(newval)]);
  };
  //CompanyWiseFilter
  const getCompanyData = (data, companies) => {
    let newval = data.map(i => {
      return i[companies];
    });
    return (newval = ['All', ...new Set(newval)]);
  };

  //CompanyWiseFilter
  const getColorsData = (data, newcolor) => {
    let newval = data.map(i => {
      return i[newcolor];
    });
    if (newcolor == 'colors') {
      return (newval = ['All', ...new Set([].concat(...newval))]);
    } else {
      return (newval = ['All', ...new Set(newval)]);
    }
  };
  const categoryData = getCategoryData(product?.sortingProduct, 'category');
  const company = getCompanyData(product?.sortingProduct, 'company');
  const colors = getColorsData(product?.sortingProduct, 'colors');

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '45%',
          backgroundColor: '#36D1DC',
          padding: 5,
          borderRadius: 5,
        }}>
        <Dropdown
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconcss}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? ' Sort-by..!' : ' Select Feature  '}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={t => setValue(t)}
        />
      </View>
      <View
        style={{
          width: '45%',
          backgroundColor: '#64b3f4',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{fontSize: 18, color: 'white', textAlign: 'center'}}
          onPress={() => setModalVisible(true)}>
          Filter
        </Text>
      </View>

      {/* category wise filter modal  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <CategoryFilter
                company={company}
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                allProduct={allProduct}
                setAllProduct={setAllProduct}
                product={product}
                categoryData={categoryData}
                colors={colors}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  placeholderStyle: {
    fontSize: 18,
    color: 'white',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },

  iconcss: {
    color: 'white',
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
  // for Modal style
  modalView: {
    backgroundColor: 'white',
    height: '100%',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  },
});
