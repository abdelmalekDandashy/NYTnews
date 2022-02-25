import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import React, { useEffect } from 'react';
import Home from './screens/Home';
import SplashScreen from 'react-native-splash-screen'
import NewsDetails from './screens/NewsDetails';
import SearchScreen from './screens/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  const Tab = createBottomTabNavigator();
  function HomeTabs() {
    return (
      <Tab.Navigator 
      
       screenOptions={{tabBarHideOnKeyboard:true}}
      >
        <Tab.Screen name="Home" component={Home}
      //       listeners={{
      //   tabPress: e => {
      //     // Prevent default action
      //     //e.preventDefault();

      //     //Any custom code here
      //     alert(123);
      //   },
      // }}
   options={{
          // start adding vector icon
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={32} color={color} />
          ),
          //end
        }}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{
          // start adding vector icon
          headerShown:false,
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={32} color={color} />
          ),
          //end
        }} />
      </Tab.Navigator>
    );
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeTabs"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewsDetails"
              component={NewsDetails}
              options={{ headerShown: true }}
            />  
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
