import {Button, Text, View} from 'native-base';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const backgroundimg1 = require('../assets/images/allproducts.jpeg');

export default class SplashScreen extends React.Component<any, any> {
  render() {
    return (
      <View flex="1">
        <ImageBackground
          source={backgroundimg1}
          resizeMode="cover"
          style={styles.image}>
          <Button
            onPress={() => this.props.navigation.navigate('login')}
            color="muted.50"
            textTransform="uppercase"
            fontWeight="bold"
            width="85"
            height={50}
            marginLeft="72"
            top="56"
            borderRadius="55">
            <Text fontSize="xl" bold>
              NEXT
            </Text>
          </Button>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.9,
    height: 800,
  },
});
