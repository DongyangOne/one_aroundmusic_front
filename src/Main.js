// ** React Imports
import { React } from 'react';

// ** Menu Imports
import { MapMenuList, MenuList } from './constant/MenuList';

// ** Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// ** Utils Imports
import Swiper from 'react-native-swiper';
import { useAuth, useSwipe, useLogin } from './context/AuthContext';

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
  const { swipe } = useSwipe(false);

  // console.log('로그인ㄷ됐냐' + isLogin);

  return (
    <Swiper
      showsPagination={false}
      style={styles.wrapper}
      loop={false}
      index={0}
      scrollEnabled={swipe}>
      <NavigationContainer Linking={linking}>
        <Stack.Navigator>
          {
            MenuList.map(item => (
              <Stack.Screen
                key={item.name}
                name={item.name}
                component={item.component}
                options={item.options}
              />
            ))}
        </Stack.Navigator>
      </NavigationContainer>
      {open && (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {MapMenuList.map(item => (
              <Stack.Screen
                key={item.name}
                name={item.name}
                component={item.component}
                options={item.options}
              />
            ))}
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
