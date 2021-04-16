import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Home from './components/Home';

//const {width, height} = Dimensions;

const App = () => {
  return (
    <View style={styles.master}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
  },
});
export default App;
