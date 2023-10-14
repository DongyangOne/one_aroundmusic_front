// ** React Imports
import { React } from 'react';

// ** Component Imports
import Main from './src/views/screens/Main';
import Map from './src/views/screens/Map';
import Music from './src/views/screens/Music';
import FilterScreen from './src/views/screens/FilterScreen';
import ArScreen from './src/views/screens/ArScreen';
import MyPage from './src/views/screens/MyPage';
import PopularKing from './src/views/screens/PopularKing';
import ListenKing from './src/views/screens/ListenKing';
import WKing from './src/views/screens/WKing';
import FriendList from './src/views/screens/FriendList';
import Board from './src/views/screens/Board';
import Header from './src/views/components/Header';
import MusicPlay from './src/views/screens/MusicPlay';
import StartingPage from './src/views/screens/StartingPage';
import ArScreen2 from './src/views/screens/ArScreen2';

// ** Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// ** Utils Imports
import Swiper from 'react-native-swiper';
import { useAuth } from './src/context/AuthContext';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['awesomeproject://'],
  config: {
    screens: {
      Main: 'main',
      Mypage: 'mypage',
    },
  },
};

const MainApp = () => {
  const { open } = useAuth(false);

  return (
    <Swiper
      showsPagination={false}
      style={styles.wrapper}
      loop={false}
      index={0}>
      <NavigationContainer Linking={linking}>
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={StartingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Music"
            component={Music}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MusicPlay"
            component={MusicPlay}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ArScreen2"
            component={ArScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyPage"
            component={MyPage}
            options={{
              headerShown: false,
              title: '마이페이지',
              headerTintColor: '#034AA6',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Filter"
            component={FilterScreen}
            options={{
              headerShown: true,
              title: '필터',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#001C3E',
              },
              headerTitleAlign: 'center',
              gestureEnabled: false,
            }}
          />
          {/* <Stack.Screen
          name="Listening"
          component={Listening}
          options={{ headerShown: false }}
        /> */}
          <Stack.Screen
            name="ArScreen"
            component={ArScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Board"
            component={Board}
            options={{
              headerShown: true,
              title: '게시물 작성',
              headerTintColor: '#034AA6',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="FriendList"
            component={FriendList}
            options={{
              title: '친구',
              headerStyle: {
                backgroundColor: '#4AB154',
              },
              headerTintColor: '#ffffff',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="PopularKing"
            component={PopularKing}
            options={{
              headerShown: true,
              title: '인기왕 리워드',
              headerTintColor: '#ffff',
              headerStyle: {
                backgroundColor: '#000080',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="WKing"
            component={WKing}
            options={{
              headerShown: true,
              title: '걷기왕 리워드',
              headerTintColor: '#ffff',
              headerStyle: {
                backgroundColor: '#000080',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="ListenKing"
            component={ListenKing}
            options={{
              headerShown: true,
              title: '듣기왕 리워드',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#000080',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Header"
            component={Header}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {open && (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="ArScreen" component={ArScreen} />
            <Stack.Screen
              name="Header"
              component={Header}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Swiper>
  );
};
const styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default MainApp;
