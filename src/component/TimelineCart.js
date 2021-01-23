import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';


import {timeline_styles} from '../styles/component_styles';

export  function TimelineCart({item}) {
    return (
        <View style={timeline_styles.container}>
        <View style={timeline_styles.header}>
            <View style={timeline_styles.header_left}>
            <Icon
            name="all-inclusive"
            size={20}
            color={'white'}
          />
          <Text style={timeline_styles.mail}>E-Mail</Text>
            </View>
            <View style={timeline_styles.header_right}>
            <Text style={timeline_styles.date}>Tarih</Text>
            </View>
        </View>
        <View style={timeline_styles.adfavoricontainer}>
            <Text >{item.text}</Text>
            <View style={timeline_styles.favicon}>
            <Icon 
            name="content-save"
            size={20}
            color={'white'}
          />
          </View>
        </View>
        </View>
    );
}
