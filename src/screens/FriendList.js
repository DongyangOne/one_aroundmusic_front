import { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FRIENDSLIST,
  FRIENDSLIST2,
  ToastAndroid,
} from 'react-native';
import FriendsItem from '../components/FriendsItem';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from '../constant/Url';

const FriendList = () => {
  const [mode, setMode] = useState('유저 목록');
  const [userList, setUserList] = useState([]); //친구가 되어있지 않은 userList
  const [friendList, setFriendList] = useState([]); //친구가 되어있는 userList
  const [reciveList, setReciveList] = useState([]); //친구 요청을 나에게 보낸 사람 리스트
  const [sendList, setSendList] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    //친구 리스트 조회
    axios
      .get(`${url}/api/friend`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setFriendList(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });

    //친구관계 제외한 친구 리스트 조회
    axios
      .get(`${url}/api/friend/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUserList(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });

    //받은 친구 요청 리스트
    axios
      .get(`${url}/api/friend/recive`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setReciveList(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });

    //보낸 친구 요청 리스트
    axios
      .get(`${url}/api/friend/send`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setSendList(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //친구 요청 수락
  const acceptRequest = async id => {
    const token = await AsyncStorage.getItem('accessToken');
    axios
      .patch(
        `${url}/api/friend`,
        {
          id: id,
          accept: 'Y',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(response => {
        console.log(response.data.data);
        fetchData();
      })
      .catch(err => {
        ToastAndroid.show('친구 요청 수락을 실패했어요', ToastAndroid.SHORT);
      });
  };

  //친구 요청 보내기 기능
  const requestFriend = async id => {
    const token = await AsyncStorage.getItem('accessToken');
    axios
      .post(
        `${url}/api/friend`,
        {
          friendId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(() => {
        fetchData();
      })
      .catch(error => {
        ToastAndroid.show('친구 요청을 실패했어요', ToastAndroid.SHORT);
      });
  };

  //친구 끊기 기능
  const deleteFriend = async id => {
    console.log(id);
    const token = await AsyncStorage.getItem('accessToken');
    axios
      .delete(`${url}/api/friend/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        fetchData();
      })
      .catch(error => {
        ToastAndroid.show('친구 끊기에 실패했어요', ToastAndroid.SHORT);
      });
  };

  //페이지 렌더링 시 모든 리스트 로딩
  useEffect(() => {
    try {
      fetchData();
    } catch {
      ToastAndroid.show('친구 불러오기에 실패했어요.', ToastAndroid.SHORT);
    }
  }, []);

  const userListF = userList.filter(itemList =>
    itemList.nickname.toUpperCase().includes(search.toUpperCase()),
  );

  const friendListF = friendList.filter(itemList =>
    itemList.nickname.toUpperCase().includes(search.toUpperCase()),
  );

  const sendListF = sendList.filter(itemList =>
    itemList.nickname.toUpperCase().includes(search.toUpperCase()),
  );

  const reciveListF = reciveList.filter(itemList =>
    itemList.nickname.toUpperCase().includes(search.toUpperCase()),
  );

  const onChangeSearch = search => {
    setSearch(search.text);
  };

  return (
    <View style={styles.center}>
      <View style={styles.mode}>
        <TouchableOpacity
          style={[
            styles.myFriend,
            mode == '유저 목록'
              ? {
                  backgroundColor: '#DE91A9',
                }
              : {
                  backgroundColor: 'white',
                  borderColor: '#DE91A9',
                  borderWidth: 0,
                },
          ]}
          onPress={() => setMode('유저 목록')}>
          <Text
            style={
              mode == '유저 목록' ? { color: 'white' } : { color: '#DE91A9' }
            }>
            유저 목록
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.request,
            mode == '친구 요청'
              ? { backgroundColor: '#DE91A9' }
              : {
                  backgroundColor: 'white',
                  borderColor: '#000000',
                  borderWidth: 0,
                },
          ]}
          onPress={() => setMode('친구 요청')}>
          <Text
            style={
              mode == '친구 요청' ? { color: 'white' } : { color: '#DE91A9' }
            }>
            친구요청
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChange={event => {
            onChangeSearch(event.nativeEvent);
          }}
        />
        <Image
          source={require('../../assets/PinkSearch.png')}
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.userBox}>
        <Text style={styles.title}>{mode}</Text>
        <ScrollView style={styles.scrollView}>
          {mode === '친구 요청' &&
            reciveListF.map(item => {
              return (
                <FriendsItem
                  name={item.nickname}
                  image={item.profileImg}
                  color="#DE91A9"
                  textColor="white"
                  state="수락 하기"
                  onPress={() => acceptRequest(item.id)}
                />
              );
            })}

          {mode === '친구 요청' &&
            sendListF.map(item => {
              return (
                <FriendsItem
                  key={item.id}
                  name={item.nickname}
                  image={item.profileImg}
                  color="white"
                  textColor="#DE91A9"
                  state="요청중..."
                  onPress={() => console.log(reciveList)}
                />
              );
            })}
          {mode === '유저 목록' &&
            friendListF.map(item => {
              return (
                <FriendsItem
                  key={item.id}
                  name={item.nickname}
                  image={item.profileImg}
                  color="#DE91A9"
                  textColor="white"
                  state="친구 끊기"
                  onPress={() => {
                    deleteFriend(item.id);
                  }}
                />
              );
            })}
          {mode === '유저 목록' &&
            userListF.map(item => {
              return (
                <FriendsItem
                  key={item.id}
                  name={item.nickname}
                  image={item.profileImg}
                  color="#ffffff"
                  textColor="#000000"
                  state="친구 신청"
                  onPress={() => {
                    requestFriend(item.id);
                  }}
                />
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
  mode: {
    flexDirection: 'row',
    marginHorizontal: 19,
    marginTop: 25,
  },
  myFriend: {
    width: 100,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
  request: {
    width: 100,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
  search: {
    borderWidth: 1,
    borderColor: '#DE91A9',
    borderRadius: 10,
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 19,
    marginHorizontal: 19,
    justifyContent: 'flex-end',
  },
  input: {
    width: '85%',
  },
  searchIcon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  title: {
    color: '#001C3E',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 19,
    marginTop: 19,
  },
  scrollView: {
    height: '79%',
  },
  center: {
    FlexDirection: 'center',
  },
});

export default FriendList;
