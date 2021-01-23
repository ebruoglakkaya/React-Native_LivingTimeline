import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {timeline_styles} from '../styles/component_styles';

export  function TimelineCart({item}) {
    return (
        <View style={timeline_styles.container}>
        <View style={timeline_styles.header}>
            <View style={timeline_styles.header_left}>
            <Icon
            name="all-inclusive"
            size={20}
            color={'#00838f'}
          />
          <Text style={timeline_styles.mail}>E-Mail</Text>
            </View>
            <View style={timeline_styles.header_right}>
            <Text>Tarih</Text>
            </View>
        </View>
        <View >
            <Text>{item.text}</Text>
            <Icon
            name="all-inclusive"
            size={20}
            color={'#00838f'}
          />
        </View>
        </View>
    );
}
