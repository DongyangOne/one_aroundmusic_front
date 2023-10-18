// ** Component Imports
import Header from '../components/Header';
import ArScreen from '../screens/ArScreen';
import ArScreen2 from '../screens/ArScreen2';
import Board from '../screens/Board';
import FilterScreen from '../screens/FilterScreen';
import FriendList from '../screens/FriendList';
import ListenKing from '../screens/ListenKing';
import Main from '../screens/Main';
import Map from '../screens/Map';
import Music from '../screens/Music';
import MusicPlay from '../screens/MusicPlay';
import MyPage from '../screens/MyPage';
import PopularKing from '../screens/PopularKing';
import StartingPage from '../screens/StartingPage';
import WKing from '../screens/WKing';
import PlayerScreen from '../screens/player-screen';
export const MenuList = [
  {
    name: 'Start',
    component: StartingPage,
    options: { headerShown: false },
  },
  {
    name: 'Main',
    component: Main,
    options: { headerShown: false },
  },
  {
    name: 'Music',
    component: Music,
    options: { headerShown: false },
  },
  {
    name: 'MusicPlay',
    component: MusicPlay,
    options: { headerShown: false },
  },
  {
    name: 'PlayerScreen',
    component: PlayerScreen,
    options: { headerShown: false },
  },

  {
    name: 'ArScreen2',
    component: ArScreen2,
    options: { headerShown: false },
  },
  {
    name: 'MyPage',
    component: MyPage,
    options: {
      headerShown: false,
      title: '마이페이지',
      headerTintColor: '#034AA6',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'Filter',
    component: FilterScreen,
    options: {
      headerShown: true,
      title: '필터',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#001C3E',
      },
      headerTitleAlign: 'center',
      gestureEnabled: false,
    },
  },
  {
    name: 'ArScreen',
    component: ArScreen,
    options: { headerShown: false },
  },

  {
    name: 'Board',
    component: Board,
    options: {
      headerShown: true,
      title: '게시물 작성',
      headerTintColor: '#034AA6',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'FriendList',
    component: FriendList,
    options: {
      title: '친구',
      headerStyle: {
        backgroundColor: '#4AB154',
      },
      headerTintColor: '#ffffff',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'PopularKing',
    component: PopularKing,
    options: {
      headerShown: true,
      title: '인기왕 리워드',
      headerTintColor: '#ffff',
      headerStyle: {
        backgroundColor: '#000080',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'WKing',
    component: WKing,
    options: {
      headerShown: true,
      title: '걷기왕 리워드',
      headerTintColor: '#ffff',
      headerStyle: {
        backgroundColor: '#000080',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'ListenKing',
    component: ListenKing,
    options: {
      headerShown: true,
      title: '듣기왕 리워드',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#000080',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'Header',
    component: Header,
    options: {
      headerShown: false,
    },
  },
];

export const MapMenuList = [
  {
    name: 'Map',
    component: Map,
    options: {},
  },
  {
    name: 'ArScreen',
    component: ArScreen2,
    options: {},
  },
  {
    name: 'Header',
    component: Header,
    options: { headerShown: false },
  },
];
