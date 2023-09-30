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

const Header = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const navigateToPage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={() => navigateToPage('myPage')}>
        <Image source={require("../../assets/myPage.png")} style={styles.image}/>
      </TouchableOpacity>
      {currentPage === 'main' && <Main />}
      {currentPage === 'myPage' && <MyPage />}
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
    marginTop:20,
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

export default Header;
