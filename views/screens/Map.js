import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,
} from "react-native";
import MapView from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

async function requestPermission() {
  try {
    if (Platform.OS === "ios") {
      return await Geolocation.requestAuthorization("always");
    }
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === "android") {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
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
          }
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
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.05,
      }}
      showsUserLocation={true}
      minZoomLevel={18}
      maxZoomLevel={18}
      scrollEnabled={false}
      scrollDuringRotateOrZoomEnabled={false}
    />
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
