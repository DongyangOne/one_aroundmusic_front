import React, { useState, useNavigate, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import storage from '@react-native-firebase/storage';
import { Pink, White } from '../constant/Color';
import { url } from '../constant/Url';

const RoundedShadowBox = ({ children }) => {
  return <View style={styles.roundedShadowBox}>{children}</View>;
};

const PopularKing = ({ navigation }) => {
  let fixed = 44;
  let LOADING_MSG = '로딩 중...';

  const [images, setImages] = useState([0, 0, 0]);
  const [abc, setAbc] = useState([0, 0, 0]);
  const [selection, setSelection] = useState(44);

  const loadData = async () => {
    let imgDataBeta = [0, 0, 0];
    for (i = 0; i < 3; i++) {
      imgDataBeta[i] = await storage()
        .ref(`/reward/pop/border${i + 1}.png`)
        .getDownloadURL();
    }
    setAbc(imgDataBeta);
    setImages(imgDataBeta);

    const TOKEN = await AsyncStorage.getItem('accessToken');
    console.log(TOKEN);
    try {
      if (TOKEN) {
        axios
          .get(`${url}/api/reward/pop`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          })
          .then(response => {
            const temp = parseInt(response.data.data.selectedReward.id);
            try {
              if (temp == 43) handleLeftImageClick();
              else if (temp == 45) handleRightImageClick();
            } catch (e) {
              console.error(`ERR with Switch Reward >> ${e}`);
            }
          })
          .catch(e => {
            console.error(`GET ERROR >> ${e}`);
          });
      } else {
        console.info('No data found');
      }
    } catch (e) {
      console.error(`Error with Reading Data >> ${e}`);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const NOW_SET = dir => {
    let temp = selection;
    if (dir == 'r') {
      temp++;
      if (temp > fixed + 1) temp = fixed - 1;
    } else if (dir == 'l') {
      temp--;
      if (temp < fixed - 1) temp = fixed + 1;
    } else {
      console.log(`dir: ${dir}. ERROR Occurred!`);
      return;
    }
    setSelection(temp);
  };

  const imageStyles = [
    {
      width: 80,
      height: 80,
      marginTop: '50%',
      marginRight: 35,
    },
    {
      width: 150,
      height: 150,
      marginTop: '15%',
      alignItems: 'center',
    },
    { width: 80, height: 80, marginTop: '50%', marginLeft: 35 },
  ];

  const handleLeftImageClick = () => {
    setImages(prevImages => [prevImages.pop(), ...prevImages]);
    setAbc(prevImages => [prevImages.pop(), ...prevImages]);
    NOW_SET('l');
  };

  const handleRightImageClick = () => {
    setImages(prevImages => [...prevImages.slice(1), prevImages[0]]);
    setAbc(prevImages => [...prevImages.slice(1), prevImages[0]]);
    NOW_SET('r');
  };

  const handleActionClick = async () => {
    const TOKEN = await AsyncStorage.getItem('accessToken');
    axios
      .patch(
        `${url}/api/reward`,
        {
          'rewardType': 'pop',
          'select_id': selection,
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        },
      )
      .then(response => {
        navigation.navigate('Main', { setData: selection });
      })
      .catch(e => {
        console.error(`PATCH Error >> ${e}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        {images[1] != 0 ? (
          <Image style={styles.LogoMain} source={{ uri: images[1] }} />
        ) : (
          <Text style={styles.LogoText}>{LOADING_MSG}</Text>
        )}
      </View>

      <View style={styles.centeredContainer}></View>
      <RoundedShadowBox>
        <TouchableOpacity style={styles.serve}>
          <TouchableOpacity
            onPress={() => {
              handleLeftImageClick();
            }}>
            {images[0] != 0 ? (
              <Image style={imageStyles[0]} source={{ uri: images[0] }} />
            ) : (
              <Text style={styles.imageStylesText}>{LOADING_MSG}</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={imageStyles[1]} source={{ uri: images[1] }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleRightImageClick();
            }}>
            <Image style={imageStyles[2]} source={{ uri: images[2] }} />
          </TouchableOpacity>
        </TouchableOpacity>
      </RoundedShadowBox>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleActionClick(selection);
        }}>
        <Text style={styles.buttonText}>적용하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoMain: {
    marginTop: '20%',
    marginBottom: 50,
    width: 150,
    height: 150,
  },
  LogoText: {
    marginTop: '20%',
    marginBottom: 50,
    width: 150,
    height: 150,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  serve: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: Pink,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: '20%',
    width: '85%',
  },
  buttonText: {
    color: White,
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredContainer: {},
  centeredImage: {
    width: 60,
    height: 60,
  },
  roundedShadowBox: {
    width: 320,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
  },
});

export default PopularKing;
