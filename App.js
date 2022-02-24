/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import React, { useEffect } from 'react';
import Home from './screens/Home';
import Splash from './screens/Splash';
import SplashScreen from 'react-native-splash-screen'


const Stack = createNativeStackNavigator();
const App = () => {


  useEffect(() => {
    // setTimeout(() => { console.log('object'); }, 10000);
    // getHomeNews();
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
