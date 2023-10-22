import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import storage from '@react-native-firebase/storage';
import { url } from '../constant/Url';

let loadData = null;
let TOKEN = null;
let temp;

const MainStory = ({ data, frame }) => {
  const [itemFrame, setItemFrame] = useState();
  const [selectId, setSelectId] = useState();

  const getData = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem('accessToken');
      if (TOKEN) {
        axios
          .get(`${url}/api/reward/listen`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          })
          .then(response => {
            loadData = response.data;
            temp = loadData.data.selectedReward.id;
            setSelectId(temp);
            setData();
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

  const setData = async () => {
    text = `/reward/listen/listen${temp - 6}.png`;
    setItemFrame(await storage().ref(text).getDownloadURL());
  };

  useEffect(() => {
    getData();
  }, []);

  try {
    return (
      <ScrollView
        style={styles.scroll}
        nestedScrollEnabled={true}
        horizontal={true}>
        <View style={styles.storyRow}>
          {data.map((item, index) => (
            <View style={styles.story} key={index}>
              <TouchableWithoutFeedback>
                {index == 0 ? (
                  <ImageBackground
                    source={{ uri: itemFrame }}
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
    return (
      <ScrollView
        style={styles.scroll}
        nestedScrollEnabled={true}
        horizontal={true}>
        <View style={styles.storyRow}>
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
    backgroundColor: 'white',
    height: 100,
    width: '100%',
  },
  image: {
    width: 58,
    height: 58,
    borderRadius: 28,
    marginRight: 15,
    marginTop: 18,
    borderWidth: 1,
    borderColor: 'white',
    padding: 4,
  },
  scroll: {
    backgroundColor: 'white',
  },
  imageBg: {
    width: 78,
    height: 78,
    borderRadius: 28,
    marginLeft: 3,
    marginTop: 4,
    marginRight: 15,
    marginBottom: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSe: {
    width: 58,
    height: 58,
    borderRadius: 28,
    marginLeft: 1,
    borderWidth: 1,
    borderColor: 'white',
    padding: 4,
  },
});

export default MainStory;
