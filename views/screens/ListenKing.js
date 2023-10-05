import React, { useState, useNavigate, useEffect } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { TOKEN } from '../components/MainStory';
import Main from './Main';

const RoundedShadowBox = ({ children }) => {
  return <View style={styles.roundedShadowBox}>{children}</View>;
};

export const IMG_SRC = [
  {
    // Black Circle Outline
    id: 'reward_black',
    src: require('../../assets/listen1.png'),
  },
  {
    // Rainbow Circle (Default)
    id: 'reward_rainbow',
    src: require('../../assets/listen2.png'),
  },
  {
    // Purple Circle
    id: 'reward_purple',
    src: require('../../assets/listen3.png'),
  },
];

const ListenKing = ({ navigation }) => {
  const serverURL = 'http://125.133.34.224:8001'; // DB Server URL

  let fixed = 8; // null

  // console.log(IMG_SRC[0]);
  const [images, setImages] = useState([
    require('../../assets/listen1.png'), // Black Circle Outline
    require('../../assets/listen2.png'), // Rainbow Circle (Default)
    require('../../assets/listen3.png'), // Purple Circle
  ]);
  const [abc, setAbc] = useState([
    require('../../assets/listenReward1.png'),
    require('../../assets/listenReward2.png'),
    require('../../assets/listenReward3.png'),
  ]);

  /** Currently selected ListenKing */
  // const [selection, setSelection] = useState(8); // CORRECT
  const [selection, setSelection] = useState(8);

  useEffect(() => {
    const loadDATAs = () => {
      const getData = async () => {
        try {
          // 토큰에 문제가 없다면
          if (TOKEN !== null) {
            console.info(`TOKEN Load SUCCESSFUL`);
            // console.log(`[ListenKing] TOKEN >> ${TOKEN}`);
            // Axios 이용하여 데이터 불러오기
            axios
              .get(`${serverURL}/api/reward/listen`, {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                },
              })
              .then(response => {
                // 서버에서 불러온 데이터 저장하기
                loadData = response.data;
                // 선택된 id값 temp에 저장
                const temp = parseInt(loadData.data.selectedReward.id);
                // console.log(`temp >> ${temp}`);
                // 불러온 id 값 별로 분기 (왼쪽, 오른쪽 이미지 선택해서 바뀌는것처럼)
                try {
                  if (temp == 7) handleLeftImageClick();
                  else if (temp == 9) handleRightImageClick();
                  // else if (temp == 8) console.info(`Default Value: <8>`);
                } catch (e) {
                  console.error(`ERR with Switch Reward >> ${e}`);
                }
                // console.info(`DONE!`);
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
      getData();
    };
    loadDATAs();
  }, []);

  const NOW_SET = dir => {
    // console.log(selection);
    let temp = selection;
    /** 'dir' means Direction
     * An index determining the direction of increase/decrease
     * (Which way to increse/decrease index)
     * r: Right
     * l: Left
     */
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

  const handleGoBack = () => {
    navigation.goBack();
  };

  /** Go to the main screen */
  const handleGoHome = () => {
    axios
      .patch(
        `${serverURL}/api/reward`, // URL
        {
          // Data
          'rewardType': 'listen',
          'select_id': selection,
        },
        {
          // Authorization
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        },
      )
      .then(response => {
        console.log(
          `[ListenKing] Send SUCCESSFUL! >> ${JSON.stringify(response.data)}`,
        );
        navigation.navigate('Main', { setData: selection });
      })
      .catch(e => {
        console.error(`PATCH Error >> ${e}`);
      });
  };

  return (
    <>
      <View style={styles.centeredContainer}>
        <Image style={styles.LogoMain} source={abc[1]} />
      </View>

      <View style={styles.centeredContainer}></View>
      <RoundedShadowBox>
        <TouchableOpacity style={styles.serve}>
          <TouchableOpacity
            onPress={() => {
              handleLeftImageClick();
            }}>
            <Image style={imageStyles[0]} source={images[0]} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={imageStyles[1]} source={images[1]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleRightImageClick();
            }}>
            <Image style={imageStyles[2]} source={images[2]} />
          </TouchableOpacity>
        </TouchableOpacity>
      </RoundedShadowBox>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // handleGoBack();
          handleGoHome(selection); // Move to main screen
        }}>
        <Text style={styles.buttonText}>적용하기</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '30%',
  },
  LogoMain: {
    marginTop: 100,
    marginBottom: 50,
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  serve: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000080',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 30,
    alignItems: 'center',
    marginTop: '30%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredContainer: {
    alignItems: 'center',
  },
  centeredImage: {
    width: 60,
    height: 60,
  },
  roundedShadowBox: {
    width: 320,
    marginLeft: 50,
    marginTop: 30,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
    margin: 10,
  },
});

export default ListenKing;
