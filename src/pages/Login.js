import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  View,
} from 'react-native';
import {login_styles} from '../styles/pages_styles';

function Login({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={login_styles.container}>
        <View style={login_styles.logoContainer}>
          <Text style={login_styles.logo}>Login</Text>
        </View>

        <View style={login_styles.eventContainer}>
          <TextInput
            style={login_styles.input}
            placeholder="E-posta adresinizi giriniz"
          />

          <TextInput
            style={login_styles.input}
            placeholder="Şifrenizi giriniz"
          />

          <TouchableOpacity
            style={login_styles.button}
            onPress={() => navigation.navigate('Timeline')}>
            <Text style={login_styles.btnTxt}>Giriş Yap</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={login_styles.button}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={login_styles.btnTxt}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export {Login};
