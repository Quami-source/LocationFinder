import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NavigationStack} from '';

const width = Dimensions.get('screen').width;

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          margin: 20,
        }}>
        <View style={styles.mainSection}>
          <Text style={styles.headerText}>
            L<Text style={{color: 'green'}}>O</Text>CFINDER
          </Text>
        </View>
        <View style={styles.locationMain}>
          <Text style={{textAlign: 'center', color: '#c3c3c3'}}>
            Select location
          </Text>
          <View style={styles.locationSelectorContainer}>
            <Text style={{paddingRight: 10}}>ico</Text>
            <Text style={{fontWeight: '700', fontSize: 18}}>
              My current location
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#eee',
              borderRadius: 5,
              marginTop: 40,
            }}>
            <View style={{flex: 5}}>
              <TextInput
                placeholder="Find Location"
                style={{paddingLeft: 20}}
                maxLength={60}
              />
            </View>
            <View style={{flex: 1}}>
              <Text>ico</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#eee',
              borderRadius: 5,
              marginTop: 20,
            }}>
            <View style={{flex: 5}}>
              <TextInput
                placeholder="Find Location"
                style={{paddingLeft: 20}}
                maxLength={60}
              />
            </View>
            <View style={{flex: 1}}>
              <Text>ico</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnMainContainer}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => navigation.navigate('Map')}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
              Go
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  headerText: {
    fontSize: 35,
    color: '#242424',
    fontWeight: '700',
  },
  locationMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationSelectorContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },

  inputContainer: {
    width: width / 1.1,
  },

  btnMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: '#232323',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
  },
});

export default Home;