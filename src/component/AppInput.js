import React from 'react'
import { View, Text ,StyleSheet,TextInput} from 'react-native'

export  function AppInput() {
    return (
        <TextInput
        autoCapitalize="none" /*maillerde ilk harf küçük bunun için none yaptık. */
        style={styles.input}
        placeholder="Email.."
        onChangeText={(value) => setEmail(value)}
      />
    );
}

const button_style=StyleSheet.create({

})