import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

import {timeline_styles} from '../styles/component_styles';

export function TimelineCart({item}) {
  return (
    <View style={timeline_styles.container}>
      <View style={timeline_styles.header}>
        <View style={timeline_styles.header_left}>
          <Icon name="all-inclusive" size={20} color={'white'} />
          <Text style={timeline_styles.mail}>{item.email.split('@')[0]}</Text>
          {console.log(item.email.split('@'))}
        </View>
        <View style={timeline_styles.header_right}>
          <Text style={timeline_styles.date}>{item.time}</Text>
        </View>
      </View>
      <View style={timeline_styles.addFavContainer}>
        <Text style={timeline_styles.text}>{item.text}</Text>
        <View style={timeline_styles.favicon}>
          <Icon name="content-save" size={20} color={'white'} />
        </View>
      </View>
    </View>
  );
}
