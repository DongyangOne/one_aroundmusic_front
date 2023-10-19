import { Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import storage from '@react-native-firebase/storage';

let loadData = null;
let TOKEN = null;
let temp;
function ArMarker({ location, size, onPress }) {
  const [itemFrame, setItemFrame] = useState();
  const [selectId, setSelectId] = useState();
  const serverURL = 'http://125.133.34.224:8001';

  const getData = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem('accessToken');
      if (TOKEN) {
        axios
          .get(`${serverURL}/api/reward/walk`, {
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
    text = `/reward/walk/walk${temp}.png`;
    setItemFrame(await storage().ref(text).getDownloadURL());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Marker
      style={{ width: size.width, height: size.width }}
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}
      onPress={onPress}>
      <Image
        source={{ uri: itemFrame }}
        style={{
          width: size.width,
          height: size.height,
        }}
      />
    </Marker>
  );
}

export default ArMarker;
