import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {LoginNavigator} from './src/components/navigators';
import SplashScreen from './src/screens/SplashScreen';
const Stack = createNativeStackNavigator();

export default class UshaVahini extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <NativeBaseProvider>
          {/* <SplashScreen /> */}
          <LoginNavigator />
          {/* <HomeNavigator /> */}
        </NativeBaseProvider>
      </NavigationContainer>
    );
  }
}

// Login Page

// import {
//   Box,
//   Button,
//   Center,
//   FormControl,
//   Heading,
//   Image,
//   Input,
//   Link,
//   NativeBaseProvider,
//   ScrollView,
//   View,
//   VStack,
//   HStack,
//   Text,

// } from 'native-base';
// import React, {Component} from 'react';
// import {ImageBackground, StyleSheet,TouchableOpacity} from 'react-native';

// // Image
// const backgroundimg1 = require('./src/assets/images/bg10.jpg');

// export default class Fpage extends Component {
//   constructor(props:any){
//     super(props);
//     this.state={
//       text:'ahe'
//     }
//   }
//   render() {
//     return (
//       <NativeBaseProvider>
//         <ScrollView>
//           <Center>
//             <Heading mt="3" fontWeight="medium" shadow={4}>
//               Usha Vahini
//             </Heading>

//             <Heading mt="2" fontWeight="medium" shadow={'dark.50'}>
//               Login
//             </Heading>

//             <View pt="5" flex="3" width="100%" height="725">
//               <ImageBackground
//                 source={backgroundimg1}
//                 resizeMode="cover"
//                 style={styles.image}>
//                 <Center>

//                   {/* <Button
//                     onPress={() => console.log('hello world')}
//                     mt="0.2"
//                     size="sm"
//                     //bg="info.500"
//                     pl="12"
//                     variant="ghost"
//                     fontStyle="italic"
//                     //colorScheme="danger.400 "
//                     //color="#17202A"
//                   >
//                     Register
//                   </Button> */}

//                   <VStack mt="3" color="white" width="90%" height="100%" mx="3">
//                     <FormControl isRequired>
//                       <FormControl.Label
//                         _text={{bold: true, color: 'white'}}
//                         color="white"
//                         //color="primary.50"
//                         padding="2">
//                         Name
//                       </FormControl.Label>
//                       <Input
//                         size="lg"
//                         color="white"
//                         placeholder=" Enter Name"
//                       />
//                     </FormControl>

//                     <FormControl isRequired>
//                       <FormControl.Label
//                         _text={{bold: true, color: 'white'}}
//                         padding="2">
//                         Email
//                       </FormControl.Label>
//                       <Input
//                         size="lg"
//                         color="white"
//                         placeholder="Enter the email ID"
//                       />
//                     </FormControl>

//                     <FormControl isRequired>
//                       <FormControl.Label
//                         _text={{bold: true, color: 'white'}}
//                         color="white"
//                         padding="2">
//                         Password
//                       </FormControl.Label>
//                       <Input
//                         size="lg"
//                         color="white"
//                         type="password"
//                         placeholder="Enter the Password"
//                       />
//                     </FormControl>

//                     <Button
//                       onPress={() => console.log('hello world')}
//                       mt="5"
//                       bg="info.500"
//                       //colorScheme="danger.400"
//                       //color="#17202A  "
//                       fontStyle="italic">
//                       Login
//                     </Button>

//                       <Text color="white" bold height="74" fontSize="20" pt="5" alignSelf="center" >
//                       I'm new user
//                       </Text>

//                       <TouchableOpacity
//                     onPress={() =>this.props('registration')}
//                     mt="0.2"
//                     size="sm"
//                     bg="info.500"
//                     pl="12"
//                     //variant="ghost"
//                     fontStyle="italic"
//                     //colorScheme="danger.400 "
//                     //color="#17202A"
//                   >
//                    <Text color="white" > Register  </Text>
//                   </TouchableOpacity>

//                       {/* <Text
//                      fontSize="xs"
//                      width="80%"
//                      color="lightBlue.50"
//                      _dark={{
//                       color: "blue.50",
//                        }}
//                      >
//                       I'm a new user.{" "}
//                       </Text>

//                       <Link
//                       _text={{
//                        fontSize: "xs",
//                        fontWeight: "900",
//                        bold:"true",
//                        color: "lightBlue.50",
//                        }}
//                        alignSelf="center"
//                        mt="1"
//                       >
//                       Register
//                       </Link>  */}

//                      {/* <Text> I'm new user
//                      </Text> */}
//                    </VStack>
//                 </Center>
//               </ImageBackground>
//             </View>
//           </Center>
//         </ScrollView>
//       </NativeBaseProvider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//   },
// });

//Registration page

/*import React, {Component} from 'react';
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
} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
//Image
const backgroundimg1 = require('./src/assets/images/bg13.jpg');

export default class register extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          <Center>
            <Heading mt="3" fontWeight="medium" shadow={4}>
              Usha Vahini
            </Heading>

            <Heading mt="0.2" fontWeight="medium" shadow={'dark.50'}>
              Register
            </Heading>

            <View pt="2" flex="3" width="100%" height="auto">
              <ImageBackground
                source={backgroundimg1}
                resizeMode="cover"
                style={styles.image}>
                <Center>
                  <VStack mt="2" color="white" width="90%" height="100%" mx="3">
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

                    <Checkbox.Group accessibilityLabel="choose value" my={3}>
                      <Checkbox value="one " my={2}>
                        <Text color="white" ml={2}>
                          Wholsaler
                        </Text>
                      </Checkbox>
                      <Checkbox value="two" my={2}>
                        <Text color="white" ml={2}>
                          Retailer
                        </Text>
                      </Checkbox>
                      <Checkbox value="three" my={2}>
                        <Text color="white" ml={2}>
                          Consumer
                        </Text>
                      </Checkbox>
                    </Checkbox.Group>

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

                    <Button
                      onPress={() => console.log('hello world')}
                      mt="5"
                      bg="info.500"
                      //colorScheme="danger.400"
                      //color="#17202A  "
                      fontStyle="italic">
                      Submit
                    </Button>
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
    opacity: 0.8,
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
});*/

/*import { View } from "native-base";
import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
export default class Splash extends React.Component{
  styles: any;
  render() {
      return(
        <View style={this. styles.container }>
        <ImageBackground source={require('./src/assets/images/bg13.jpg')} style={this. styles.backgroundImage} />
        <View style={this. styles.loginForm }>
          <Text>TEST</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  loginForm: {
  },
});*/
