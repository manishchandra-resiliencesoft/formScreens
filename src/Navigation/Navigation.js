import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Incident from '../screen/Incident';
import Request from '../screen/Request';
import Consultation from '../screen/Consultation';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Incident"
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Incident"
          component={Incident}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Request"
          component={Request}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Consultation"
          component={Consultation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
