import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {favorite_header_styles} from '../styles/component_styles';
import auth from '@react-native-firebase/auth';

export function FavoritesHeader({navigation}) {
  return (
    <View style={favorite_header_styles.container}>
      <TouchableOpacity
        style={favorite_header_styles.icon}
        /* onPress={() => auth().signOut(navigation.navigate('LoginStack'))}
         */
      >
        <Icon name="exit-to-app" size={35} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}
