import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import ArMarker from '../components/Marker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    }
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (e) {
    console.log(e);
  }
}

const Map = ({ navigation }) => {
  const [location, setLocation] = useState();
  const [data, setData] = useState([]);
  useEffect(async () => {
    token = await AsyncStorage.getItem('accessToken');
    await axios
      .get('http://125.133.34.224:8001/api/marker', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setData(response.data.data.marker);
      })
      .catch(err => {
        console.log(err.response.data);
      });
    requestPermission().then(result => {
      console.log({ result });
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation(pos.coords);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 3600,
            maximumAge: 3600,
          },
        );
      }
    });
  }, []);

  if (!location) {
    return (
      <View>
        <Text>Splash Screen</Text>
      </View>
    );
  }

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.05,
        }}
        mapType="standard"
        showsUserLocation={true}
        minZoomLevel={18}
        maxZoomLevel={18}
        scrollEnabled={false}
        scrollDuringRotateOrZoomEnabled={false}
        followsUserLocation={true}
        showsMyLocationButton={false}
        showsIndoors={false}
        showsPointsOfInterest={false}
        zoomEnabled={false}
        zoomTapEnabled={false}
        zoomControlEnabled={false}
        pitchEnabled={false}
        moveOnMarkerPress={false}>
        {data.map(item => (
          <ArMarker
            key={`${item.latitude}-${item.longitude}`}
            location={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            size={{ width: 50, height: 50 }}
            onPress={() => {
              navigation.navigate('ArScreen');
            }}
          />
        ))}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Map;
