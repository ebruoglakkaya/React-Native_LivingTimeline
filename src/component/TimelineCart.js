import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import moment from 'moment';
import 'moment/locale/tr';

//var now = moment.duration().humanize();

import {timeline_styles} from '../styles/component_styles';

export function TimelineCart({item}) {
  function addFavorites() {
    const newPostKey = database()
      .ref()
      .child(`/favorites/` + auth().currentUser.uid)
      .push();
    if (!item.favId) {
      item.favId = newPostKey.key;
      newPostKey.set(item);
      Alert.alert('Kaydedildi!');
    } else {
      Alert.alert('Mesaj zaten kaydedilmiştir!');
    }
  }

  return (
    <View style={timeline_styles.container}>
      <View style={timeline_styles.header}>
        <View style={timeline_styles.header_left}>
          <Icon name="all-inclusive" size={20} color={'white'} />
          <Text style={timeline_styles.mail}>{item.email.split('@')[0]}</Text>
        </View>
        <View style={timeline_styles.header_right}>
          <Text style={timeline_styles.date}>
            {moment(item.time).fromNow()}
          </Text>
        </View>
      </View>
      <View style={timeline_styles.addFavContainer}>
        <Text style={timeline_styles.text}>{item.text}</Text>
        <TouchableOpacity
          onPress={addFavorites}
          style={timeline_styles.favicon}>
          <Icon name="content-save" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
