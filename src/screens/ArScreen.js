import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  ViroARScene,
  ViroImage,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import storage from '@react-native-firebase/storage';

const serverURL = 'http://125.133.34.224:8001';
let loadData = null;
let TOKEN = null;
let temp;

const WorldSceneAR = () => {
  const [itemFrame, setItemFrame] = useState(null);
  const [selectId, setSelectId] = useState(null);

  const getData = async () => {
    try {
      TOKEN = await AsyncStorage.getItem('accessToken');
      if (TOKEN) {
        axios
          .get(`${serverURL}/api/reward/pop`, {
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
    let text = `/reward/pop/border${temp - 42}.png`;
    setItemFrame(await storage().ref(text).getDownloadURL());
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ViroARScene>
      <ViroImage
        height={0.5}
        width={0.5}
        position={[-1, 0.5, -3]}
        placeholderSource={require('../../assets/music2.jpg')}
        source={require('../../assets/music2.jpg')}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[-1, 0.13, -3]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[0, 0.5, -1.5]}
        placeholderSource={require('../../assets/music3.png')}
        source={require('../../assets/music3.png')}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[0, 0.13, -1.5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[1, 0.8, -2]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={require('../../assets/music1.jpg')}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[1, 0.43, -2]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
    </ViroARScene>
  );
};

export default Arscreen = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: WorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};
var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
