import {Box, Image, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ComponentConstants} from '../constants/componentConstants';
export default class Product extends React.Component<any, any> {
  render() {
    const {productimage, productName} = this.props.HomeScreenProduct;
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(ComponentConstants.PRODUCT_DETAILS)
        }>
        <Box style={styles.box}>
          <Image style={styles.productImage} source={productimage} />
          <Text style={styles.productname}>{productName}</Text>
        </Box>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    width: '94%',
    height: 235,
    alignItems: 'center',
    marginLeft: '3%',
    marginTop: 3,
    paddingTop: 6,
    paddingBottom: 9,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  productImage: {
    width: 185,
    height: 181,
    borderRadius: 12,
    shodowOpacity: 0.5,
    resizeMode: 'cover',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  productname: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
