import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Platform,
  PermissionsAndroid,
} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";
import ArMarker from "../components/Marker";

async function requestPermission() {
  try {
    if (Platform.OS === "ios") {
      return await Geolocation.requestAuthorization("always");
    }
    if (Platform.OS === "android") {
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
  useEffect(() => {
    requestPermission().then(result => {
      console.log({ result });
      if (result === "granted") {
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
        showsIndoors = {false}
        showsPointsOfInterest={false}
        zoomEnabled={false}
        zoomTapEnabled={false}
        zoomControlEnabled={false}
        pitchEnabled={false}
        moveOnMarkerPress={false}
        onMarkerPress={() => {
          navigation.navigate('ArScreen');
        }}
      >

        <ArMarker
          location={{latitude: location.latitude-0.0005, longitude: location.longitude-0.0005}}
          size={{width: 200, height: 200}}
        />

        <ArMarker
          location={{latitude: location.latitude+0.0005, longitude: location.longitude+0.0005}}
          size={{width: 150, height: 150}}
        />

        </MapView>
    </>
  );
};


const styles = StyleSheet.create({
  container: {},
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Map;
