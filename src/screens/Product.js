import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {testapi} from '../features/AllProducts/allProductsSlice';
import {useDispatch, useSelector} from 'react-redux';
import FormatePrice from '../helpers/FormatePrice';
import TabBar from '../components/TabBar';
import {useNavigation} from '@react-navigation/native';
import {SearchBar} from '@rneui/themed';
import CategoryFilter from '../components/CategoryFilter';

const Product = () => {
  const Navigation = useNavigation();
  const product = useSelector(state => state.products);
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [allProduct, setAllProduct] = useState(product?.sortingProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    let url = 'products';
    dispatch(testapi(url));
  }, [dispatch]);

  const productDetails = id => {
    Navigation.navigate('productdetails', {id: id});
  };

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
  const categoryData = getCategoryData(product?.sortingProduct, 'category');
  const company = getCompanyData(product?.sortingProduct, 'company');

  return (
    <ScrollView>
      <View>
        {product?.sortingProduct?.length === 0 ? (
          <View style={styles.loader}>
            <Text>
              <ActivityIndicator />
            </Text>
          </View>
        ) : (
          <View>
            <View style={styles.aa}>
              <SearchBar
                style={{color: 'white', fontSize: 16}}
                placeholder="Search "
                type="text"
                name="text"
                value={search}
                onChangeText={t => setSearch(t)}
              />
            </View>
            <View>
              <TabBar />
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  margin: 10,
                  marginBottom: 10,
                  color: 'black',
                }}
                onPress={() => setModalVisible(true)}>
                Category wise filter
              </Text>
            </View>

            <View>
              {allProduct
                ?.filter(e =>
                  e.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((data, id) => {
                  return (
                    <View style={styles.productImageContent} key={id}>
                      <View
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'white',
                          marginBottom: 10,
                        }}>
                        <View
                          style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 3,
                          }}>
                          <Image
                            source={{uri: data.image}}
                            style={{width: 250, height: 200, margin: 10}}
                          />
                        </View>

                        <View style={{width: '50%'}}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 20,
                              color: 'black',
                              marginTop: 5,
                            }}>
                            {data.name}
                          </Text>
                          <Text style={{textAlign: 'center'}}>
                            {data.company}
                          </Text>

                          <Text style={{textAlign: 'center'}}>
                            {data.description.slice(0, 48)}...
                          </Text>

                          <Text
                            style={{
                              color: '#A43931',
                              margin: 10,
                              textAlign: 'center',
                              fontSize: 20,
                            }}>
                            {<FormatePrice price={data.price} />}
                          </Text>
                        </View>

                        <TouchableOpacity style={styles.btnStyle}>
                          <Text
                            onPress={() => productDetails(data.id)}
                            style={{
                              textAlign: 'center',
                              fontSize: 18,
                              color: 'white',
                            }}>
                            View Details
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
            </View>
          </View>
        )}
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
            <CategoryFilter
              company={company}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
              allProduct={allProduct}
              setAllProduct={setAllProduct}
              product={product}
              categoryData={categoryData}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productImageContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',

    borderWidth: 0.5,
    borderColor: '#556b2f',
  },
  btnStyle: {
    backgroundColor: '#E0D72E',
    margin: 10,
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  SearchIconStyleView: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
  },
  SearchIconStyle: {
    margin: 10,
    color: 'white',
    borderRightWidth: 2,
    borderColor: 'white',
    padding: 5,
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
export default Product;

// backgroundColor: '#48d1cc',
