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

export const DATA = [
  {
    //고척스카이돔
    latitude: 37.498063,
    longitude: 126.867021,
  },
  {
    //노들소공원
    latitude: 37.499863,
    longitude: 126.867684,
  },
  {
    //제주몰빵
    latitude: 37.500472,
    longitude: 126.867713,
  },
  {
    //히어로 실내 낚시카페 대방점
    latitude: 37.499957,
    longitude: 126.925655,
  },
  {
    //누리학교
    latitude: 37.499946,
    longitude: 126.92652,
  },
  {
    //대림초등학교
    latitude: 37.500584,
    longitude: 126.925425,
  },
];

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
