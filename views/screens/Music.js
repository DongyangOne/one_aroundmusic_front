import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";

import Header from "../components/Header";

const Msuic = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Button
          title="Press me"
          onPress={() => navigation.navigate("Filter")}
        />
      </ScrollView>
    </SafeAreaView>
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

export default Msuic;
