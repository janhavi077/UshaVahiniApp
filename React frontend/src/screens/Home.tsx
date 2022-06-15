import {
  Box,
  FlatList,
  HStack,
  Image,
  NativeBaseProvider,
  ScrollView,
  Spacer,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import HScreenProducts from './HScreenProducts';

const HomeScreenProduct = [
  {
    id: 'UvVegProduct',
    productimage: require('../assets/images/vegProducts/SheeraMix.jpeg'),
    productName: 'Veg',
  },
  {
    id: 'UvNonvegProduct',
    productimage: require('../assets/images/nonVegProducts/ButterChickenMasala.jpeg'),
    productName: 'Non-Veg',
  },
  {
    id: 'UvPremixProduct',
    productimage: require('../assets/images/premix/ModakPith.jpeg'),
    productName: 'Premix',
  },
  {
    id: 'UvChutenyProduct',
    productimage: require('../assets/images/chuteny-Masala/MalvaniGaramMasala.jpeg'),
    productName: 'Chuteny',
  },
];

const backgroundimg1 = require('../assets/images/allproducts.jpeg');
const BestDeals = require('../assets/images/nonVegProducts/ButterChickenMasala.jpeg');

export default class Home extends React.Component<any, any> {
  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          <Box height="45" width="100%" backgroundColor="red.600">
            <Text alignSelf="center" color="white" bold fontSize="2xl">
              Usha Vahani
            </Text>
          </Box>
          <Box>
            <ImageBackground source={backgroundimg1} style={styles.image} />
          </Box>
          <FlatList
            top="4"
            keyExtractor={item => item.id}
            data={HomeScreenProduct}
            numColumns={2}
            renderItem={({item}) => (
              <HScreenProducts HomeScreenProduct={item} />
            )}
          />
          <View paddingTop="10">
            <Box height="45" width="100%" backgroundColor="warmGray.200">
              <Text alignSelf="center" color="black" bold fontSize="2xl">
                Best Deal
              </Text>
            </Box>
          </View>
          <HStack>
            <Box>
              <Image source={BestDeals} style={styles.BestDeals} />
            </Box>
          </HStack>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    // opacity: 0.9,
    // width: 390,
    top: 10,
    resizeMode: 'cover',
    height: 262,
    width: '100%',
  },
  // vegImage: {
  //   width: 125,
  //   height: 145,
  //   top: 5,
  //   marginLeft: 38,
  // },
  // nonVegImage: {
  //   width: 115,
  //   height: 145,
  //   top: 5,
  //   marginLeft: 48,
  // },
  // Premix: {
  //   width: 125,
  //   height: 145,
  //   top: 5,
  //   resizeMode: 'cover',
  //   marginLeft: 38,
  // },
  // chutenyImage: {
  //   width: 125,
  //   height: 145,
  //   top: 5,
  //   marginLeft: 38,
  // },
  BestDeals: {
    width: 125,
    height: 145,
    resizeMode: 'cover',
  },
});

// import {FlatList} from 'native-base';
// import React, {PureComponent} from 'react';
// import HScreenProducts from './HScreenProducts';

// const HomeScreenProduct = [
//   {
//     id: 'UvVegProduct',
//     productimage: require('../assets/images/vegProducts/SheeraMix.jpeg'),
//     productName: 'Veg',
//   },
//   {
//     id: 'UvNonvegProduct',
//     productimage: require('../assets/images/nonVegProducts/ButterChickenMasala.jpeg'),
//     productName: 'Non-Veg',
//   },
//   {
//     id: 'UvPremixProduct',
//     productimage: require('../assets/images/premix/ModakPith.jpeg'),
//     productName: 'Premix',
//   },
//   {
//     id: 'UvChutenyProduct',
//     productimage: require('../assets/images/chuteny-Masala/MalvaniGaramMasala.jpeg'),
//     productName: 'Chuteny',
//   },
// ];
// export default class Home extends PureComponent {
//   render() {
//     return (
//       <FlatList
//         keyExtractor={item => item.id}
//         data={HomeScreenProduct}
//         numColumns={2}
//         renderItem={({item}) => <HScreenProducts HomeScreenProduct={item} />}
//       />
//     );
//   }
// }
