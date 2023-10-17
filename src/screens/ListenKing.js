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

import { TOKEN } from '../components/MainStory';
import Main from './Main';

const RoundedShadowBox = ({ children }) => {
  return <View style={styles.roundedShadowBox}>{children}</View>;
};

const ListenKing = ({ navigation }) => {
  const serverURL = 'http://125.133.34.224:8001'; // DB Server URL

  let fixed = 8; // null

  const [images, setImages] = useState([0, 0, 0]);
  const [abc, setAbc] = useState([0, 0, 0]);

  /** Currently selected ListenKing */
  const [selection, setSelection] = useState(8);

  const loadData = async () => {
    // console.info(`Loading Start`);

    let imgDataBeta = [0, 0, 0];
    for (i = 0; i < 3; i++) {
      imgDataBeta[i] = await storage()
        .ref(`/reward/listen/listen${i + 1}.png`)
        .getDownloadURL();
    }
    setAbc(imgDataBeta);
    setImages(imgDataBeta);
    // console.info(`Loading Complete`);

    try {
      if (TOKEN !== null) {
        axios
          .get(`${serverURL}/api/reward/listen`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          })
          .then(response => {
            const temp = parseInt(response.data.data.selectedReward.id);
            try {
              if (temp == 7) handleLeftImageClick();
              else if (temp == 9) handleRightImageClick();
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
    // console.log(images);
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
    }, // 스타일1
    {
      width: 150,
      height: 150,
      marginTop: '15%',
      alignItems: 'center',
    }, // 스타일2
    { width: 80, height: 80, marginTop: '50%', marginLeft: 35 }, // 스타일3
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

  /** Go to the main screen */
  const handleActionClick = () => {
    axios
      .patch(
        `${serverURL}/api/reward`, // URL
        {
          'rewardType': 'listen',
          'select_id': selection,
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        },
      )
      .then(response => {
        console.log(
          `[ListenKing] Send SUCCESSFUL! >> ${JSON.stringify(
            response.data.message,
          )}`,
        );
        navigation.navigate('Main', { setData: selection });
      })
      .catch(e => {
        console.error(`PATCH Error >> ${e}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <Image style={styles.LogoMain} source={{ uri: images[1] }} />
      </View>

      <View style={styles.centeredContainer}></View>
      <RoundedShadowBox>
        <TouchableOpacity style={styles.serve}>
          <TouchableOpacity
            onPress={() => {
              handleLeftImageClick();
            }}>
            <Image style={imageStyles[0]} source={{ uri: images[0] }} />
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
  serve: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#000080',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: '20%',
    width: '85%',
  },
  buttonText: {
    color: 'white',
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

export default ListenKing;
