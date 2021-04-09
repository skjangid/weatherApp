import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import WeatherScreen from '../screens/weather';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
        headerMode=""
        screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;