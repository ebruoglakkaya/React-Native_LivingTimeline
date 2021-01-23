import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  View,
  Alert,
} from 'react-native';
import {signup_styles} from '../styles/pages_styles';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Signup({navigation}) {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordRepeat, setPasswordRepeat] = useState('');

  function CreateUser() {
    auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then(() => {})
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Bu email daha önce kullanılmıştır.');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Email geçerli değil');
        }

        console.error(error);
      });
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={signup_styles.container}>
        <View style={signup_styles.logoContainer}>
          <Icon
            style={signup_styles.logo}
            name="all-inclusive"
            size={150}
            color={'#00838f'}
          />
        </View>

        <View style={signup_styles.eventContainer}>
          <TextInput
            style={signup_styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(val) => setEmail(val)}
            placeholder="E-posta adresinizi giriniz"
          />

          <TextInput
            style={signup_styles.input}
            secureTextEntry={true}
            onChangeText={(val) => setPassword(val)}
            placeholder="Şifrenizi giriniz"
          />

          <TextInput
            style={signup_styles.input}
            secureTextEntry={true}
            onChangeText={(val) => setPasswordRepeat(val)}
            placeholder="Şifrenizi tekrar giriniz"
          />

          <TouchableOpacity style={signup_styles.button} onPress={CreateUser}>
            <Text style={signup_styles.btnTxt}>Kayıt Ol</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={signup_styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={signup_styles.btnTxt}>Ana Sayfaya Dön</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export {Signup};
