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
//import {NavigationStack} from '';
import Geolocation from 'react-native-geolocation-service';
//import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('window').height;

const Home = ({navigation}) => {
  const [hasLocationPermission, setLocationPermission] = React.useState(true);
  const [search, setUserSearch] = React.useState(null);
  const [cordinates, setCordinates] = React.useState({
    longi: 0,
    lati: 0,
  });

  React.useEffect(() => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          //console.log(position);
          setCordinates({
            longi: position.coords.longitude,
            lati: position.coords.latitude,
          });
          //console.log(cordinates);
        },
        error => console.log(error.code),
        {enableHighAccuracy: true},
      );
    }
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          margin: 20,
        }}>
        <View style={styles.mainSection}>
          <Text style={styles.headerText}>
            L<Text style={{color: 'green'}}>O</Text>CFINDER
          </Text>
        </View>
        <View style={styles.locationMain}>
          <Text style={{textAlign: 'center', color: '#666'}}>
            Search places around you
          </Text>
          <View style={styles.locationSelectorContainer}>
            <View style={{paddingRight: 10}}>
              <Icon name="md-location" size={30} color="green" />
            </View>
            <Text style={{fontWeight: '700', fontSize: 18}}>
              My current location
            </Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.inputContainer}>
            <View style={{flex: 4, justifyContent: 'center', paddingLeft: 20}}>
              <TextInput
                placeholder="Search a place here. Example restaurant"
                onChangeText={setUserSearch}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                paddingRight: 20,
              }}>
              <Icon name="search-outline" size={25} color="#666666" />
            </View>
          </View>
        </View>

        <View style={styles.btnMainContainer}>
          <View
            style={{
              backgroundColor: '#232323',
              width: width / 1.1,
              height: 60,
              borderRadius: 5,
            }}>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => {
                console.log(search);
                navigation.navigate('Map', {
                  cordinates: cordinates,
                  search: search,
                });
              }}>
              <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
                Go
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 35,
    color: '#242424',
    fontWeight: '700',
  },
  locationMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationSelectorContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },

  btnMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    height: 60,
    width: width / 1.1,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnContainer: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },
});

export default Home;
