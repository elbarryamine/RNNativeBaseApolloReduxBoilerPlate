import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

const sharedOptions: NativeStackNavigationOptions = {headerShown: false};
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="onboarding"
        screenOptions={{animation: 'slide_from_left'}}>
        <Stack.Screen
          name="onboarding"
          component={() => <></>}
          options={sharedOptions}
        />
        <Stack.Screen
          name="login"
          component={() => <></>}
          options={sharedOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export type Param = {
  onboarding: undefined; // stack
};
