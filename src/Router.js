import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login, Signup, Timeline, Favorites} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TimelineStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Timeline" component={TimelineStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
