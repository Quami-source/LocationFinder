import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
//import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Location = ({route}) => {
  const {cordinates, search} = route.params;
  const latitude = cordinates.lati;
  const longitude = cordinates.longi;
  const [region, setRegion] = React.useState({
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: latitude,
    longitude: longitude,
  });
  const [places, setPlaces] = React.useState([]);
  const [isVisible, setVisibility] = React.useState(true);

  React.useEffect(() => {
    //console.log(route.params.cordinates);
    getPlaces;
  }, []);

  const onRegionChange = () => {
    setRegion(region);
  };

  const getPlacesUrl = (lat, long, type, apiKey) => {
    const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`;
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${type}`;
    const api = `&key=${apiKey}`;
    return `${baseUrl}${location}${typeData}${api}`;
  };

  const getPlaces = () => {
    //const {cordinates, search} = route.params;
    const markers = [];
    const url = getPlacesUrl(
      latitude,
      longitude,
      1500,
      search,
      'AIzaSyBwBtfrORXlLY352Op5AZxsD5BSPwEgORM',
    );
    fetch(url)
      .then(res => res.json())
      .then(res => {
        res.results.map((element, index) => {
          const marketObj = {};
          marketObj.id = element.id;
          marketObj.name = element.name;
          marketObj.photos = element.photos;
          marketObj.rating = element.rating;
          marketObj.vicinity = element.vicinity;
          marketObj.marker = {
            latitude: element.geometry.location.lat,
            longitude: element.geometry.location.lng,
          };

          markers.push(marketObj);
        });
        //update our places array
        setPlaces(places[markers]);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={region}
          onRegionChange={() => onRegionChange}>
          {places.map((marker, index) => {
            <Marker
              key={index}
              coordinate={{
                latitude: marker.marker.latitude,
                longitude: marker.marker.longitude,
              }}
              title={marker.name}
            />;
          })}
        </MapView>
      </View>
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        style={{
          flex: 1,
          backgroundColor: '#fff',
          width: width,
          justifyContent: 'flex-start',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}>
        <View
          style={{
            backgroundColor: '#ccc',
            width: 50,
            height: 5,
            borderRadius: 2,
            marginTop: 30,
            marginBottom: 20,
          }}
        />
        <ScrollView>
          <Text
            style={{
              color: 'green',
              fontSize: 23,
              fontWeight: '700',
              textAlign: 'center',
            }}>
            List of Places
          </Text>
          <Text style={{fontSize: 18, marginTop: 10, textAlign: 'center'}}>
            Search related to {route.params.search}
          </Text>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Location;
