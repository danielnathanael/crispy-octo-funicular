/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from './src/view/home/home.view';
import MovieView from './src/view/movie/movie.view';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#0e1111',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Movie" component={MovieView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
