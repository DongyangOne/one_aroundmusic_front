import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Contents = ({ content }) => {
  const [data, setData] = useState([
    {
      content: '',
      img: '',
    },
  ]);
  const fetchData = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    axios
      .get('http://125.133.34.224:8001/api/board', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {data.map(
          (
            item,
            index, // index parameter added
          ) => (
            <View key={index}>
              <Image
                source={require('../../assets/contents1.jpeg')}
                style={styles.image}
              />
              <View style={styles.textView}>
                <Text style={styles.text}>{item.content}</Text>
                <Text style={styles.date}>2023.08.05</Text>
              </View>
            </View>
          ),
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
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    marginLeft: 12,
    marginTop: 12,

    fontSize: 12,
    color: '#001C3E',
    fontWeight: 'bold',
  },
  date: {
    marginLeft: 13,
    marginTop: 2,
    marginBottom: '18%',
    fontSize: 10,
    color: '#001C3E',
  },
});

export default Contents;
