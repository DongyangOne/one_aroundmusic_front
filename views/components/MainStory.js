import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { IMG_SRC } from '../screens/ListenKing';

const MainStory = ({ data, frame }) => {
  try {
    // console.log(`frame: ${frame.setData}`); // console loooooooooooooog
    return (
      <ScrollView
        style={styles.scroll}
        nestedScrollEnabled={true}
        horizontal={true}>
        <View style={styles.storyRow}>
          {/* New Code */}
          {data.map((item, index) => (
            <View style={styles.story}>
              <TouchableWithoutFeedback>
                {index == 0 ? (
                  <ImageBackground
                    source={IMG_SRC[frame.setData].src}
                    style={styles.imageBg}>
                    <Image source={data[0].src} style={styles.imageSe}></Image>
                  </ImageBackground>
                ) : (
                  <Image source={item.src} style={styles.image}></Image>
                )}
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  } catch (error) {
    // console.log(`NO DATA IMPORTED`); // Console looooooooooooooooooooog
    return (
      <ScrollView
        style={styles.scroll}
        nestedScrollEnabled={true}
        horizontal={true}>
        <View style={styles.storyRow}>
          {/* Previous Code */}
          {data.map(item => (
            <View style={styles.story}>
              <TouchableWithoutFeedback>
                <Image source={item.src} style={styles.image}></Image>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {},
  storyRow: {
    flexDirection: 'row',
    backgroundColor: '#001C3E',
    height: 100,
    width: '100%',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginLeft: 18,
    marginTop: 18,
    borderWidth: 1,
    borderColor: 'white',
    padding: 4,
  },
  imageBg: {
    width: 78,
    height: 78,
    borderRadius: 28,
    marginLeft: 5,
    marginTop: 5,
    // borderWidth: 1,
    // borderColor: "white",
    // backgroundColor: "#0ff", // Just for Test
    // padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSe: {
    width: 56,
    height: 56,
    borderRadius: 28,
    // marginLeft: 18,
    // marginTop: 18,
    marginLeft: 1,
    borderWidth: 1,
    borderColor: 'white',
    padding: 4,
  },
});

export default MainStory;
