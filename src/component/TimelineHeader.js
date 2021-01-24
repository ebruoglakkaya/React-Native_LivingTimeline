import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {timeline_header_styles} from '../styles/component_styles';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';

export function TimelineHeader({navigation}) {
  return (
    <LinearGradient
      colors={['#006064', '#00838f', '#0097a7']}
      style={timeline_header_styles.linearGradient}>
      <View style={timeline_header_styles.logoContainer}>
        <Text style={timeline_header_styles.text}>Living Timeline</Text>
        <Icon name="all-inclusive" size={20} color={'white'} />
      </View>

      <TouchableOpacity
        style={timeline_header_styles.icon}
        /* onPress={() => auth().signOut(navigation.navigate('LoginStack'))}
         */
      ></TouchableOpacity>
    </LinearGradient>
  );
}
