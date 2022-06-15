import React from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Image,
  Input,
  Link,
  NativeBaseProvider,
  ScrollView,
  
  View,
  VStack,
  HStack,
  Text,
  Pressable,
} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';

// Image
const backgroundimg1 = require('../assets/images/bg10.jpg');

export default class login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      loading: false,
      Users: [],
    };
  }

  private validateEmail = (text: string) => {
    // var re = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\.w{2,3})+$/;
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (re.test(text)) {
      return false;
    } else {
      return true;
    }
    // return !re.test(text);
  };

  private login() {
    axios
      .post('https://reqres.in/api/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(res => {
        console.log(res.data);
        // this.setState({users});
      })
      .catch(error => {
        console.log(error);
      });
  }

  private setEmail = (value: any) => {
    this.setState({email: value, emailValid: this.validateEmail(value)});
  };

  private setPassword = (value: any) => {
    this.setState({
      password: value,
    });
  };

  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          <Center>
            <View flex="3" width="100%">
              <ImageBackground
                source={backgroundimg1}
                resizeMode="cover"
                style={styles.image}>
                <Center>
                  <VStack
                    mt="1"
                    color="muted.50"
                    width="90%"
                    height="80%"
                    mx="3">
                    <Text color="white" bold fontSize="3xl">
                      Login
                    </Text>

                    <FormControl isRequired isInvalid={this.state.emailValid}>
                      <Input
                        placeholder="Email"
                        type="email"
                        size="lg"
                        color="muted.50"
                        variant="underlined"
                        onChangeText={value => this.setEmail(value)}
                      />
                      <FormControl.ErrorMessage>
                        Valid Email Required
                      </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl
                      isRequired
                      isInvalid={this.state.passwordValid}>
                      <Input
                        mt="1"
                        size="lg"
                        color="muted.50"
                        type="password"
                        variant="underlined"
                        placeholder="Password"
                        onChangeText={value => this.setPassword(value)}
                      />
                      <FormControl.ErrorMessage>
                        Password Required
                      </FormControl.ErrorMessage>
                    </FormControl>

                    <Pressable>
                      <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        // onPress={() => this.login()}
                        mt="5"
                        bg="info.500"
                        fontStyle="italic">
                        Login
                      </Button>
                    </Pressable>

                    <Text
                      color="muted.50"
                      bold
                      height="74"
                      fontSize="20"
                      pt="5"
                      alignSelf="center">
                      I'm new user
                    </Text>

                    <Pressable
                      size="md"
                      pr="106"
                      alignItems={'center'}
                      fontStyle="italic">
                      <Button
                        onPress={() =>
                          this.props.navigation.navigate('registration')
                        }
                        color="muted.50"
                        textTransform="uppercase"
                        fontWeight="bold"
                        width="100%">
                        Register
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
    height: 800,
  },

  text: {
    color: 'muted.50',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
