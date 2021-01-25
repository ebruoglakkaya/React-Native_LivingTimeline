import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {favorite_header_styles} from '../styles/component_styles';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';

export function FavoritesHeader({navigation}) {
  function logOut() {
    auth()
      .logOut.then(() => navigation.navigate('Login'))
      .catch(({code, message}) => Alert.alert(code, message));
  }

  return (
    <LinearGradient
      colors={['#006064', '#00838f', '#0097a7']}
      style={favorite_header_styles.linearGradient}>
      <View style={favorite_header_styles.logoContainer}>
        <Text style={favorite_header_styles.text}>Living Timeline</Text>
        <Icon name="all-inclusive" size={20} color={'white'} />
      </View>

      <TouchableOpacity style={favorite_header_styles.icon} onPress={logOut}>
        <Icon name="exit-to-app" size={35} color={'white'} />
      </TouchableOpacity>
    </LinearGradient>
  );
}
