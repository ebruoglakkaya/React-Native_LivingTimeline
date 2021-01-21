import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

function Login({navigation}) {
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <TextInput placeholder="E-posta adresinizi giriniz"></TextInput>
      <TextInput placeholder="Şifrenizi giriniz"></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('Timeline')}>
        <Text>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Kayıt Ol</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export {Login};
