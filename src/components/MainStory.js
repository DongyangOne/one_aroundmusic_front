import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { url } from '../constant/Url';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import storage from '@react-native-firebase/storage';

const MainStory = ({ data, frame }) => {
  const [itemFrame, setItemFrame] = useState();
  const [friends, setFriends] = useState([]);

  const getData = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem('accessToken');
      if (TOKEN) {
        await axios
          .get(`${url}/api/reward/listen`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          })
          .then(response => {
            temp = response.data.data.selectedReward.reward;
            setItemFrame(temp);
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

  const getStoryUsers = async () => {
    const TOKEN = await AsyncStorage.getItem('accessToken');

    if (TOKEN) {
      let friend = [];

      await axios
        .get(`${url}/api/user/my`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .then(async res => {
          friend.push(res.data.data);
        })
        .catch(e => {
          console.log(`Error /api/user/my -> ${e}`);
        });

      await axios
        .get(`${url}/api/story`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .then(res => {
          friend = [...friend, ...res.data.data];
          setFriends(friend);
        })
        .catch(e => {
          console.log(`Error /api/story -> ${e}`);
        });
    }
  };

  useEffect(() => {
    getData();
    getStoryUsers();
  }, []);
  // }, [loadData]);

  try {
    return (
      <ScrollView
        style={styles.scroll}
        nestedScrollEnabled={true}
        horizontal={true}>
        <View style={styles.storyRow}>
          {friends.map((item, index) => (
            <View style={styles.story} key={index}>
              <TouchableWithoutFeedback>
                {index == 0 ? (
                  <ImageBackground
                    // source={IMG_SRC[itemFrame].src} // 기존 코드
                    source={{ uri: itemFrame }} // 신규 코드
                    style={styles.imageBg}>
                    <Image
                      source={{ uri: item.profileImg }}
                      style={styles.imageSe}></Image>
                  </ImageBackground>
                ) : (
                  <Image
                    source={{ uri: item.profileImg }}
                    style={styles.image}></Image>
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
          {/* Previous Code */}
          {data.map((item, index) => (
            <View style={styles.story} key={index}>
              <TouchableWithoutFeedback>
                <Image
                  source={{ uri: item.profileImg }}
                  style={styles.image}></Image>
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
