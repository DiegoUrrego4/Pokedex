import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, PokemonScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
