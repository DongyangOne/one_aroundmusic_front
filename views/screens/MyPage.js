import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authorize } from 'react-native-app-auth';
import Header from '../components/Header';
import SVGComponentHeart from '../components/SVG/SVGComponentHeart';
import SVGComponentLoca from '../components/SVG/SVGComponentLoca';
import SVGComponentPlay from '../components/SVG/SVGComponentPlay';
import { Black, Pink, White, Yellow } from '../../constant/Color';
const MyPage = ({ navigation }) => {
  const [friend, setFriend] = useState(0);
  const [userId, setUserId] = useState('Guest');
  const [authState, setAuthState] = useState(null);

  async function authenticate() {
    const config = {
      clientId: 'e58220cc9b0e4832aac9f6b7d6c3bf5c',
      clientSecret: '1cc39cad57494e2ba5d9e56421f83314',
      redirectUrl: 'awesomeproject://main',
      scopes: ['user-read-private', 'user-read-email', 'streaming'],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
    };

    try {
      const result = await authorize(config);
      if (result.accessToken) {
        await AsyncStorage.setItem('token', result.accessToken);
        setAuthState(result);
        navigation.navigate('Main');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.contain}>
      <Header
        style={styles.footer}
        onPress={() => navigation.push('MyPage')}
        onPressMain={() => navigation.push('Main')}
        onPressMusic={() => navigation.push('Music')}
      />
      <View style={styles.myPage}>
        <Image
          style={styles.profile}
          source={require('../../assets/profile.png')}
        />
        <View>
          <Text style={styles.id}>{userId}</Text>
          <TouchableOpacity style={styles.spotify} onPress={authenticate}>
            <Text style={{ color: 'white' }}>스포티파이 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FriendList')}>
            <View style={styles.friendBtn}>
              <Text style={styles.text}>내 친구 {friend}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.kingContainer}>
        <View style={styles.king}>
          <Text style={styles.kingTitle}>인기왕</Text>
          <View styles={styles.kingLogoCont}>
            <Image
              style={styles.kingLogo}
              source={require('../../assets/MyPage_medal_famous.png')}
            />
          </View>
          <View></View>
          <Text style={styles.kingCode}>1022C</Text>
          <View styles={styles.kingNextCont}>
            <Image
              style={styles.kingNext}
              source={require('../../assets/MyPage_next.png')}
            />
          </View>
        </View>
        <View style={styles.kingContainer_deprecated}>
          <View>
            <TouchableOpacity
              style={styles.reward}
              onPress={() => navigation.navigate('PopularKing')}>
              <Image
                source={require('../../assets/MyPage_king_popular.png')}
                style={styles.rewardLogo}
              />
              <Text style={styles.rewardText}>인기왕 리워드 보러가기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require('../../assets/Arrow8.png')}
            />
          </View>
          <View style={styles.king}>
            <Text style={styles.kingTitle}>걷기왕</Text>
            <View styles={styles.kingLogoCont}>
              <Image
                style={styles.kingLogo}
                source={require('../../assets/MyPage_medal_walk.png')}
              />
            </View>
            <View></View>
            <Text style={styles.kingCode}> 200C</Text>
            <View styles={styles.kingNextCont}>
              <Image
                style={styles.kingNext}
                source={require('../../assets/MyPage_next.png')}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.reward}
            onPress={() => navigation.navigate('WKing')}>
            <Image
              source={require('../../assets/MyPage_king_walk.png')}
              style={styles.rewardLogo}
            />
            <Text style={styles.rewardText}>걷기왕 리워드 보러가기</Text>
          </TouchableOpacity>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require('../../assets/Arrow8.png')}
            />
          </View>

          <View>
            <View style={styles.king}>
              <Text style={styles.kingTitle}>듣기왕</Text>
              <View styles={styles.kingLogoCont}>
                <Image
                  style={styles.kingLogo}
                  source={require('../../assets/MyPage_medal_listen.png')}
                />
              </View>
              <View></View>
              <Text style={styles.kingCode}>1112C</Text>
              <View styles={styles.kingNextCont}>
                <Image
                  style={styles.kingNext}
                  source={require('../../assets/MyPage_next.png')}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.reward}
              onPress={() => navigation.navigate('ListenKing')}>
              <Image
                source={require('../../assets/MyPage_king_listen.png')}
                style={styles.rewardLogo}
              />
              <Text style={styles.rewardText}>듣기왕 리워드 보러가기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require('../../assets/Arrow8.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

// Style Sheet
const styles = StyleSheet.create({
  // MyPage whole container
  contain: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#E6E6E6',
  },
  // Top area
  myPage: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 'auto',
  },
  spotify: {
    alignItems: 'center',
    backgroundColor: '#4AB154',
    padding: 10,
    marginLeft: '14%',
  },
  // Friend Button
  friendBtn: {
    marginTop: 10,
    width: 140,
    height: 27,
    marginLeft: 25,
    textAlign: 'left',
    borderColor: '#E6E6E6',
    borderWidth: 1,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Friend button innerText
  text: {
    fontSize: 12,
    color: '#151515',
    textAlign: 'left',
  },
  // user ID
  id: {
    marginTop: 30,
    fontSize: 24,
    marginLeft: 25,
    color: '#151515',
  },
  // Profile picture
  profile: {
    width: 100,
    height: 104,
    marginLeft: 34,
    marginTop: 30,
  },
  // for Middle margin area
  // MiddleMargin: {
  //   marginTop: 30,
  // },
  // king Whole Container
  kingContainer: {
    flex: 3,
    backgroundColor: '#E6E6E6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: -20,
    paddingTop: 20,
    zIndex: 10,
     justifyContent:'center',
  },
  // blah, blah king box style
  king: {
    zIndex: 50,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderColor: '#041c3c',
    // borderWidth: 1,
    borderRadius: 25,
    elevation: 5,
    marginHorizontal: 25,
  },
  // king inner title text (like 인기왕, 걷기왕, 듣기왕)
  kingTitle: {
    fontSize: 23,
    color: '#1C1C1C',
    marginLeft: 25,
  },
  // Badge Picture Container
  kingLogoCont: {
    alignItems: 'left',
  },
  // Badge Picture logo size
  kingLogo: {
    width: 70,
    height: 70,
  },
  // king code
  kingCode: {
    fontSize: 11,
    color: '#000',
  },
  // Next Button (Arrow picture)
  kingNext: {
    width: 20,
    height: 20,
    marginRight: 25,
  },
  // reward container
  reward: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  // reward mini logo (like heart, position-mark, play-button etc.)
  rewardLogo: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  // ~~~ 리워드 보러가기
  rewardText: {
    color: '#0A0A0A',
    width: 299,
    height: 23,
    marginRight: 10,
    margin: 13,
  },
  // looooong arrow container
  rewardLine: {
    marginHorizontal: 35,
    marginTop: -10,
    marginBottom: 10,
    alignItems:'center'
  },
  // looooong arrow picture
  rewardLinePic: {
    width: '97%',
    resizeMode: 'center',
    color: '#0A0A0A',
  },
});

export default MyPage;
