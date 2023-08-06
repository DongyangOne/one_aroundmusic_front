import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import MapView from 'react-native-maps';
import Header from "../components/Header";


const Map = ({ navigation }) => {
  return (
    //<SafeAreaView style={styles.container}>
      //<ScrollView>
        //<TouchableOpacity onPress={() => navigation.navigate("ArScreen")}>
          //<Header />
          <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.566535,
          longitude: 126.9779692,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
        //</TouchableOpacity>
      //</ScrollView>
    //</SafeAreaView>
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
