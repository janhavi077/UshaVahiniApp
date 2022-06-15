/**
 * @author <Janhavi.K>
 * @description Navigation of application
 * @copyright UshaVahiniApp
 */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import login from '../screens/login';
import registration from '../screens/registration';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import {ComponentConstants} from '../constants/componentConstants';
import Product from '../screens/HScreenProducts';
const Stack = createNativeStackNavigator();

export class LoginNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={ComponentConstants.SPLASH_SCREEN_NAME}
          component={SplashScreen}
        />
        <Stack.Screen
          name={ComponentConstants.LOGIN_SCREEN_NAME}
          component={login}
        />
        <Stack.Screen
          name={ComponentConstants.REGISTRATION_SCREEN_NAME}
          component={registration}
        />
        <Stack.Screen
          name={ComponentConstants.HOME_SCREEN_NAME}
          component={Home}
        />
        <Stack.Screen
          name={ComponentConstants.PRODUCT_DETAILS}
          component={Product}
        />
      </Stack.Navigator>
    );
  }
}

// export class HomeNavigator extends React.Component<any> {
//   render() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen
//           name={ComponentConstants.HOME_SCREEN_NAME}
//           component={Home}
//         />
//       </Stack.Navigator>
//     );
//   }
// }
