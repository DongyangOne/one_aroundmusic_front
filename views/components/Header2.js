import {React, useState} from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
} from "react-native";
import {TouchableOpacity} from 'react-native';
import MyPage from "../screens/MyPage";
import Main from "../screens/Main";
import Music from "../screens/Music";

const Header2 = (props) => {
  const [currentPage, setCurrentPage] = useState("music");
  const navigateToPage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <View >
      <View style={styles.wrap}>
      <TouchableOpacity onPress={() => navigateToPage('myPage')}>
        <Image source={require("../../assets/myPage.png")} style={styles.image}/>
      </TouchableOpacity>
      </View>
      {/* {currentPage === 'main' && <Main />} */}
      {currentPage === 'myPage' && <MyPage />}
      {currentPage === 'music' && <Music />}
    </View>
  );

};

const styles = StyleSheet.create({
  wrap: {
    // marginTop: 30,
    // flexDirection: "row",
    // justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#001C3E",
    // marginTop:20,
  //   height: 60,
  
  },
  image: {
    marginRight: 18,
    width: 30,
    height: 30,
    // alignItems: "center",
    // justifyContent: "flex-end",
    marginTop: 20,
    marginRight: 10,
  },
});

export default Header2;
