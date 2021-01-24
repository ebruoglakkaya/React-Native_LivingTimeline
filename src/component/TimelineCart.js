import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import moment from 'moment';

import {timeline_styles} from '../styles/component_styles';

export function TimelineCart({item}) {

  function addFavorites(chat) {
    if (!chat) return;
    database().ref(`/favorites/`+auth().currentUser.uid).push(
      item
    );
  }

  return (
    <View style={timeline_styles.container}>
      <View style={timeline_styles.header}>
        <View style={timeline_styles.header_left}>
          <Icon name="all-inclusive" size={20} color={'white'} />
          <Text style={timeline_styles.mail}>{item.email.split('@')[0]}</Text>
        </View>
        <View style={timeline_styles.header_right}>
          <Text style={timeline_styles.date}>{item.time}</Text>
        </View>
      </View>
      <View style={timeline_styles.addFavContainer}>
        <Text style={timeline_styles.text}>{item.text}</Text>
        <TouchableOpacity onPress={addFavorites} style={timeline_styles.favicon}>
          <Icon name="content-save" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
