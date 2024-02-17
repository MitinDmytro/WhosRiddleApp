import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import OpenWeeklyScreen from './src/screens/OpenWeeklyScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor:'transparent',
    borderTopWidth: 0,
    position: 'absolute',
    elevation: 0
  },
  tabBarLabelStyle:{
    color: "#3D444F",
    fontSize: 10,
    fontFamily: "PoppinsSemiBold"
  }
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={require(`./src/assets/home-icon.png`)} resizeMode='contain' />
          )}} />
          <Tab.Screen
          name="Leaderboard"
          component={OpenWeeklyScreen}
          options={{
          tabBarLabel: 'Leaderboard',
          tabBarIcon: () => (
            <Image source={require(`./src/assets/leaderboard-icon.png`)} resizeMode='contain' />
          )}} />
          <Tab.Screen
          name="Settings"
          component={OpenWeeklyScreen}
          options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <Image source={require(`./src/assets/settings-icon.png`)} resizeMode='contain' />
          )}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;