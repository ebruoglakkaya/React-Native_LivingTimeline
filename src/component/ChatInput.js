import React from 'react'
import { View, Text ,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {chat_styles} from '../styles/component_styles';

export  function ChatInput({onSend}) {
    return (
        <View style={chat_styles.container}>
            <TextInput style={chat_styles.text} 
            onPress={onSend}
            placeholderTextColor="white" placeholder="Bir yazı girin"/>
            <Icon 
            name="send"
            size={20}
            color={'white'}
          />
        </View>
    );
}
