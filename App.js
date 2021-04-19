import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Home from './components/Home';
import Location from './components/Location';
import Icon from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
  HeaderBackground,
} from '@react-navigation/stack';

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
        <Stack.Screen
          name="Map"
          component={Location}
          options={({route, navigation}) => ({
            headerTitle: () => {
              return (
                <View>
                  <Text style={{fontSize: 18}}>
                    {route.params.search.toUpperCase()}
                  </Text>
                </View>
              );
            },
            headerTitleAlign: 'center',
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={e => navigation.goBack()}
                  style={{marginLeft: 20}}>
                  <Icon name="arrow-back-circle" size={35} color="#ccc" />
                </TouchableOpacity>
              );
            },

            headerBackground: () => {
              return <View style={{backgroundColor: '#fff', opacity: 0.09}} />;
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
