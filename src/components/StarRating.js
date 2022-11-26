import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StarRating = ({starsrating, reviews}) => {
  const ratingStar = Array.from({length: 5}, (elem, index) => {
    let number = index + 0.5;

    return (
      <View key={index}>
        <Text>
          {starsrating >= index + 1 ? (
            <Icon name="star" style={styles.iconStyle} />
          ) : starsrating >= number ? (
            <Icon name="star-half" style={styles.iconStyle} />
          ) : (
            <Icon name="star-outline" style={styles.iconStyle} />
          )}
        </Text>
      </View>
    );
  });
  return (
    <View>
      <View style={styles.starReview}>
        <Text>{ratingStar}</Text>
        <Text>({reviews} customer reviews)</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 25,
    color: '#dfb726d1',
  },
  starReview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});
export default StarRating;
