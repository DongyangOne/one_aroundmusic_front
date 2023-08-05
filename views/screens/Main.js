import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

import Header from "../components/Header";

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  },

});

export default Main;
