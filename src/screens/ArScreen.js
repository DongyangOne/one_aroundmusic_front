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

const WorldSceneAR = props => {
  const [itemFrame, setItemFrame] = useState();
  const [selectId, setSelectId] = useState(null);
  console.log('이거:', props[0]);

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
          height={0.8}
          width={0.8}
          position={[-4.1, 0.5, -3.1]}
          source={{ uri: itemFrame }}
        />
      ) : null}
      <ViroImage
        height={0.5}
        width={0.5}
        position={[-4, 0.5, -3]}
        placeholderSource={require('../../assets/play.png')}
        source={{ uri: props[0].music.thumbnail }}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[-4, 0.13, -3]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
        <ViroImage
          height={0.8}
          width={0.8}
          position={[-0.49, -0.14, -1.51]}
          source={{ uri: itemFrame }}
        />
      ) : null}
      <ViroImage
        height={0.5}
        width={0.5}
        position={[-0.5, -0.13, -1.5]}
        placeholderSource={require('../../assets/music3.png')}
        source={{ uri: props[1].music.thumbnail }}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[-0.5, -0.5, -1.5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      {itemFrame ? (
        <ViroImage
          height={0.8}
          width={0.8}
          position={[0.03, 0.3, -2]}
          source={{ uri: itemFrame }}
        />
      ) : null}
      <ViroImage
        height={0.8}
        width={0.8}
        position={[-5, -4, -2]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[2].music.thumbnail }}
      />
      <ViroImage
        height={0.8}
        width={0.8}
        position={[-5, -4.8, -2]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[1.5, 4.4, -3]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[3].music.thumbnail }}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[1.5, 4, -3]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[2, 0.4, -0.5]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[4].music.thumbnail }}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[2, 0, -0.5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[3, 0.5, -5]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[5].music.thumbnail }}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[3, 0.1, -5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.7}
        width={0.7}
        position={[4, 3, -5]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[6].music.thumbnail }}
      />
      <ViroImage
        height={0.4}
        width={0.4}
        position={[4, 2.4, -5]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[4, 0.7, 0]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[7].music.thumbnail }}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[4, 0.33, 0]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[7, -4, 2]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[8].music.thumbnail }}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[7, 0, 2]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
      <ViroImage
        height={0.5}
        width={0.5}
        position={[0, 0.3, -2]}
        placeholderSource={require('../../assets/music1.jpg')}
        source={{ uri: props[9].music.thumbnail }}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[0, -0.1, -2]}
        placeholderSource={require('../../assets/play.png')}
        source={require('../../assets/play.png')}
      />
    </ViroARScene>
  );
};

export default ArScreen = ({ navigation, route }) => {
  const marker = {
    content: route.params.data.data,
  };

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: WorldSceneAR,
        passProps: marker.content,
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
