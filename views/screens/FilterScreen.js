import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import FilterDetailButton from "../components/FilterDetailButton";
import {
  DATAAGE,
  DATADATE,
  DATASEASON,
  DATASEX,
  DATATIME,
} from "../components/DummyData";

const Item = ({ title }) => (
  <View style={styles.item}>
    <FilterDetailButton title={title} />
  </View>
);

const FilterScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <ScrollView>
      <View>
        <Text style={styles.MainText}>나이</Text>
        <FlatList
          data={DATAAGE}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
          horizontal={false}
          numColumns={5}
        />
      </View>
      <View>
        <Text style={styles.MainText}>성별</Text>
        <FlatList
          data={DATASEX}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
          horizontal={true}
        />
      </View>
      <View>
        <Text style={styles.MainText}>날씨</Text>
        <FlatList
          data={DATADATE}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
          horizontal={false}
          numColumns={5}
        />
      </View>
      <View>
        <Text style={styles.MainText}>시간</Text>
        <FlatList
          data={DATATIME}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
          horizontal={false}
          numColumns={5}
        />
      </View>
      <View>
        <Text style={styles.MainText}>계절</Text>
        <FlatList
          data={DATASEASON}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
          horizontal={false}
          numColumns={5}
        />
        <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonText}>적용하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default FilterScreen;

var styles = {
  MainText: {
    color: "#034AA6",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 23,
    marginLeft: 10,
    marginBottom: 10,
  },
  flatList: {
    flexDirection: "column",
  },
  item: {
    margin: 3,
  },
  button: {
    backgroundColor: "#034AA6",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 30,
    alignItems: "center",
    marginTop: "30%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
};
