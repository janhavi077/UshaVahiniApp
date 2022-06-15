import React from 'react';

import {
  Button,
  Center,
  Checkbox,
  FormControl,
  Heading,
  Input,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
  VStack,
  Pressable,
  Radio,
} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

//Image
const backgroundimg1 = require('../assets/images/bg13.jpg');

export default class registration extends React.Component<any, any> {
  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          <Center>
            {/* <Heading mt="3" fontWeight="medium" shadow={4}>
              Usha Vahini
            </Heading> */}

            <View pt="2" flex="3" width="100%" height="auto">
              <ImageBackground
                source={backgroundimg1}
                resizeMode="cover"
                style={styles.image}>
                <Center>
                  <VStack mt="2" color="white" width="90%" height="100%" mx="3">
                    <Heading
                      mt="0.2"
                      color="white"
                      marginBottom="14"
                      fontWeight="medium"
                      shadow={'dark.50'}>
                      Register
                    </Heading>

                    <FormControl isRequired>
                      <FormControl.Label
                        _text={{bold: true, color: 'white'}}
                        color="white"
                        //color="primary.50"

                        padding="1">
                        Name
                      </FormControl.Label>
                      <Input
                        size="lg"
                        variant="underlined"
                        color="white"
                        placeholder=" Enter Name"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormControl.Label
                        _text={{bold: true, color: 'white'}}
                        padding="2">
                        Email
                      </FormControl.Label>
                      <Input
                        size="lg"
                        variant="underlined"
                        color="white"
                        placeholder="Enter the email ID"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormControl.Label
                        _text={{bold: true, color: 'white'}}
                        padding="2">
                        Phone no.
                      </FormControl.Label>
                      <Input
                        size="lg"
                        variant="underlined"
                        color="white"
                        type="number"
                        placeholder="Enter the Phone"
                      />
                    </FormControl>

                    <Radio.Group
                      name="myRadioGroup"
                      accessibilityLabel="choose value"
                      my={3}>
                      <Radio value="1" my={1}>
                        <Text color="white" ml={2}>
                          Wholsaler
                        </Text>
                      </Radio>
                      <Radio value="2" my={1}>
                        <Text color="white" ml={2}>
                          Retailer
                        </Text>
                      </Radio>
                      <Radio value="3" my={1}>
                        <Text color="white" ml={2}>
                          Consumer
                        </Text>
                      </Radio>
                    </Radio.Group>

                    <FormControl isRequired>
                      <Text color="white" bold>
                        Upload your shop Licence
                      </Text>
                      <Button
                        color="white"
                        leftIcon={
                          <Icon
                            //as= {Icon}
                            color="white"
                            name="clouduploado"
                            size={30}
                          />
                        }>
                        Upload
                      </Button>
                    </FormControl>

                    <FormControl isRequired>
                      <FormControl.Label
                        _text={{bold: true, color: 'white'}}
                        padding="2">
                        Address
                      </FormControl.Label>
                      <Input
                        size="lg"
                        variant="underlined"
                        color="white"
                        placeholder="Enter the Address"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormControl.Label
                        _text={{bold: true, color: 'white'}}
                        padding="2">
                        Pincode
                      </FormControl.Label>
                      <Input
                        size="lg"
                        variant="underlined"
                        color="white"
                        placeholder="Enter the Pin"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormControl.Label
                        _text={{bold: true, color: 'white'}}
                        padding="2">
                        City
                      </FormControl.Label>
                      <Input
                        size="lg"
                        variant="underlined"
                        color="white"
                        placeholder="Enter your City"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormControl.Label
                        //_text={{bold: true}}
                        _text={{bold: true, color: 'white'}}
                        padding="2">
                        State
                      </FormControl.Label>
                      <Input
                        size="lg"
                        variant="underlined"
                        color="white"
                        placeholder="Enter your State "
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormControl.Label
                        _text={{bold: true, color: 'white'}}
                        color="white"
                        padding="2">
                        Password
                      </FormControl.Label>
                      <Input
                        size="lg"
                        variant="underlined"
                        color="white"
                        type="password"
                        placeholder="Enter the Password"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormControl.Label
                        _text={{bold: true, color: 'white'}}
                        color="white"
                        padding="2">
                        Confirm Password
                      </FormControl.Label>
                      <Input
                        size="lg"
                        variant="underlined"
                        color="white"
                        type="password"
                        placeholder="Enter the Password"
                      />
                    </FormControl>
                    <Pressable>
                      <Button
                        onPress={() => this.props.navigation.navigate('login')}
                        mt="5"
                        bg="info.500"
                        //colorScheme="danger.400"
                        //color="#17202A  "
                        fontStyle="italic">
                        Submit
                      </Button>
                    </Pressable>
                  </VStack>
                </Center>
              </ImageBackground>
            </View>
          </Center>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.9,
    width: 390,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
