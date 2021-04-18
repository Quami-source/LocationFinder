import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import Home from './components/Home';
import Location from './components/Location';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//const {width, height} = Dimensions;
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Map" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
