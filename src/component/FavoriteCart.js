import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import moment from 'moment';
import 'moment/locale/tr';
//import relativeTime from 'moment/'

import {favorite_styles} from '../styles/component_styles';

export function FavoriteCart({item, reload}) {
  const user = auth().currentUser.uid;

  function removeFavorites() {
    reload()
    console.log('silme');
    database().ref(`/favorites/${user}/${item.favId}`).remove();
    Alert.alert('Kayıt silindi!');
  }

  return (
    <View style={favorite_styles.container}>
      <View style={favorite_styles.header}>
        <View style={favorite_styles.header_left}>
          <Icon name="all-inclusive" size={20} color={'white'} />
          <Text style={favorite_styles.mail}>{item.email.split('@')[0]}</Text>
        </View>
        <View style={favorite_styles.header_right}>
          <Text style={favorite_styles.date}>
            {moment(item.time).fromNow()}
          </Text>
        </View>
      </View>
      <View style={favorite_styles.addFavContainer}>
        <Text style={favorite_styles.text}>{item.text}</Text>
        <TouchableOpacity
          onPress={removeFavorites}
          style={favorite_styles.favicon}>
          <Icon name="trash-can" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
