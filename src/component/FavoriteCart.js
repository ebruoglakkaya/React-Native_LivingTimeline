import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';



export function FavoriteCart({item}) {
 console.log(item);

  return (
    <View>
      <View>
       {/* <Text>{item.text}</Text>
        <Text>{item.time}</Text> */}
      </View>
    </View>
  );
}
