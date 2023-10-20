import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  ViroARScene,
  ViroImage,
  ViroARSceneNavigator,
  ImageBackground,
} from '@viro-community/react-viro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import storage from '@react-native-firebase/storage';

const serverURL = 'http://125.133.34.224:8001';
let loadData = null;
let TOKEN = null;
let temp;


const WorldSceneAR = () => {
  const [itemFrame, setItemFrame] = useState();
  const [selectId, setSelectId] = useState(null);


  const setData = async () => {
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
            let text = `/reward/pop/border${temp - 42}.png`;
            console.log("dkssud", text);
            storage()
              .ref(text)
              .getDownloadURL()
              .then(downloadURL => {
                console.log(downloadURL);
                setItemFrame(downloadURL);
                console.log("안녕", downloadURL);
              })
              .catch(e => {
                console.error(`GET DOWNLOAD URL ERROR >> ${e}`);
              });
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

  useEffect(() => {
    setData();
  }, []);
  return (
    <ViroARScene>
      {itemFrame ? (
  <ViroImage
    height={0.5}
    width={0.5}
    position={[-1, 0.5, -3]}
    placeholderSource={require('../../assets/music2.jpg')}
    source={require('../../assets/music2.jpg')}
  />
) : null}
      <ViroImage
        height={0.2}
        width={0.2}
        position={[-1, 0.13, -3]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
      <ViroImage
        height={0.8}
        width={0.8}
        position={[0, 0.52, -1.6]}
        source={{ uri: itemFrame }}
      />
      ) : null}
      {itemFrame ? (
      <ViroImage
        height={0.5}
        width={0.5}
        position={[0, 0.5, -1.5]}
        placeholderSource={require('../../assets/music3.png')}
        source={require('../../assets/music3.png')}
      />
      ) : null}
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
