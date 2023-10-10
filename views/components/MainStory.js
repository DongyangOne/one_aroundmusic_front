import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { IMG_SRC } from '../screens/ListenKing';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const serverURL = 'http://125.133.34.224:8001'; // DB Server URL
let loadData = null; // DB에서 불러온 데이터 저장

export let TOKEN = null;

const MainStory = ({ data, frame }) => {
  const [itemFrame, setItemFrame] = useState(null);

  useEffect(() => {
    const loadDATAs = () => {
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('accessToken');
          if (value !== null) {
            TOKEN = value;
            // console.info(`TOKEN Saved!`);
            // console.log(`TOKEN >> ${TOKEN}`);
            axios
              .get(`${serverURL}/api/reward/listen`, {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                },
              })
              .then(response => {
                loadData = response.data;
                const temp = parseInt(loadData.data.selectedReward.id);
                setItemFrame(temp - 7);
                // console.info(`DONE!`);
              })
              .catch(e => {
                console.error(`GET ERROR >> ${e}`);
              });
          } else {
            console.log('No data found');
          }
        } catch (e) {
          console.error(`Error with Reading Data >> ${e}`);
        }
      };
      getData();
    };
    loadDATAs();
  }, []);

  try {
    return (
      <ScrollView
        style={styles.scroll}
        nestedScrollEnabled={true}
        horizontal={true}>
        <View style={styles.storyRow}>
          {/* New Code */}
          {data.map((item, index) => (
            <View style={styles.story} key={index}>
              <TouchableWithoutFeedback>
                {index == 0 ? (
                  <ImageBackground
                    // source={IMG_SRC[frame.setData].src}
                    source={IMG_SRC[itemFrame].src}
                    // source={itemFrame}
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
    // console.info(`! NO DATA IMPORTED >> ${error}`); // Console looooooooooooooooooooog
    // console.log(`${error}`);
    return (
      <ScrollView
        style={styles.scroll}
        nestedScrollEnabled={true}
        horizontal={true}>
        <View style={styles.storyRow}>
          {/* Previous Code */}
          {data.map((item, index) => (
            <View style={styles.story} key={index}>
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
