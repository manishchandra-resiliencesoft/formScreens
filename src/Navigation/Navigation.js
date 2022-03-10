import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import Form from '../screen/Form';
import Request from '../screen/Request';
import Consulation from '../screen/Consulation';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      //  initialRouteName="Form"
        screenOptions={{headerTitleAlign: 'center'}}>
        {/* <Stack.Screen
          name="Form"
          component={Form}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="Request"
          component={Request}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Consulation"
          component={Consulation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
