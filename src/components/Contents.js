import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import storage from '@react-native-firebase/storage';
import { url } from '../constant/Url';
import { Pink, Black } from '../constant/Color';
const Contents = ({ content }) => {
  const [data, setData] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem('accessToken');
      if (TOKEN) {
        axios
          .get(`${url}/api/board`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          })
          .then(response => {
            setData(response.data.data.reverse());
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

  const loadImages = async () => {
    let imgData = [];
    for (let i = 0; i < data.length; i++) {
      try {
        const imageUrl = await storage()
          .ref(`/Board/${data[i].img}`)
          .getDownloadURL();
        imgData.push(imageUrl);
      } catch (error) {
        console.error(`Image download failed: ${error}`);
      }
    }
    setImgUrl(imgData);
    setLoading(false); // 이미지 로딩이 완료됨을 표시
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      loadImages();
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {loading ? (
          <View style={styles.gray}>
            <Text style={styles.loding}>Loading...</Text>
          </View>
        ) : data.length === 0 ? ( // 데이터가 없을 때
          <Text>데이터가 없습니다</Text>
        ) : (
          data.map((item, index) => (
            <View style={styles.main} key={index}>
              <Image source={{ uri: imgUrl[index] }} style={styles.image} />
              <View style={styles.textView}>
                <Text style={styles.text}>{item.content}</Text>
                <Text style={styles.date}>
                  {item.createdDate[0]}.{item.createdDate[1]}.
                  {item.createdDate[2]}
                </Text>
              </View>
            </View>
          ))
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'white' },
  content: {
    marginTop: '2%',
    backgroundColor: 'white',
  },
  storyRow: {
    flexDirection: 'row',
    marginTop: 13,
  },
  background: {
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: 520,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    //marginTop: '0%',
  },
  textView: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  loding: {
    color: Black,
    backgroundColor: 'white',
  },
  main: {
    backgroundColor: 'white',
  },
  text: {
    marginLeft: 12,
    marginTop: 12,
    fontSize: 12,
    color: Pink,
    fontWeight: 'bold',
  },
  date: {
    marginLeft: 13,
    marginTop: 2,
    marginBottom: '18%',
    fontSize: 10,
    color: Pink,
  },
});

export default Contents;
