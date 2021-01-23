import React from 'react'
import { View, Text ,TextInput,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {chat_styles} from '../styles/component_styles';

export  function ChatInput({onSend}) {
    return (
        <View style={chat_styles.container}>
            <TextInput style={chat_styles.text} 
           
            placeholderTextColor="white" placeholder="Bir yazı girin"/>
            <TouchableOpacity onPress={onSend}>
            <Icon 
            name="send"
            size={20}
            color={'white'}
          />
          </TouchableOpacity>
        </View>
    );
}
