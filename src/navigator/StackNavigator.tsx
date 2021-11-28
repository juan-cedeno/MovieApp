import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movies } from '../interfaces/Movie';


export type RootStackParams = {
  Home: undefined
  Detail: Movies
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions = {{
        headerShown : false,
        cardStyle: {
          backgroundColor : 'white'
        }
      }}
    >
      <Stack.Screen name= "Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}