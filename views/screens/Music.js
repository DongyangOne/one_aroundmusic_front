import React from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import Header from "../components/Header";
import Listening from "./Listening";

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

  text: {
    fontSize: 42,
  },
});

export default Music;
