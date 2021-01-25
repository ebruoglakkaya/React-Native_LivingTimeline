import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login, Signup, Timeline, Favorites} from './pages';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const hasSession = auth().currentUser;

function TimelineTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => generateIcon(focused, color, route),
        tabBarLabel: () => null,
      })}
      tabBarOptions={{
        activeTintColor: '#00838f',
        inactiveTintColor: '#ffe082',
      }}>
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={false}
        initialRouteName={hasSession ? 'Timeline' : 'LoginStack'}>
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen name="Timeline" component={TimelineTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

function generateIcon(focused, color, route) {
  let iconName;

  switch (route.name) {
    case 'Timeline':
      iconName = focused ? 'timeline' : 'timeline-outline';
      break;
    case 'Favorites':
      iconName = focused ? 'content-save' : 'content-save-outline';
      break;

    default:
      break;
  }

  // You can return any component that you like here!
  return <Icon name={iconName} color={color} size={30} />;
}
