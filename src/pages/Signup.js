import React, {useState}from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  View,
  Alert
} from 'react-native';
import {login_styles} from '../styles/pages_styles';
import auth from '@react-native-firebase/auth';

function Signup({navigation}) {

 const [Email,setEmail]=useState("")
 const [Password,setPassword]=useState("")
 const [PasswordRepeat, setPasswordRepeat]=useState("")


 function CreateUser(){
  auth()
  .createUserWithEmailAndPassword(Email, Password)
  .then(() => {
   
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('Bu email daha önce kullanılmıştır.')
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('Email geçerli değil')
    }

    console.error(error);
  });
 }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={login_styles.container}>
        <View style={login_styles.logoContainer}>
          <Text style={login_styles.logo}>Sign Up</Text>
        </View>

        <View style={login_styles.eventContainer}>
          <TextInput
            style={login_styles.input}
            onChangeText={(val) => setEmail(val)}
            placeholder="E-posta adresinizi giriniz"
          />

          <TextInput
            style={login_styles.input}
            onChangeText={(val) => setPassword(val)}
            placeholder="Şifrenizi giriniz"
          />

            <TextInput
            style={login_styles.input}
            onChangeText={(val) => setPasswordRepeat(val)}
            placeholder="Şifrenizi tekrar giriniz"
          />

          <TouchableOpacity
            style={login_styles.button}
            onPress={CreateUser}>
            <Text style={login_styles.btnTxt}>Kayıt Ol</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={login_styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={login_styles.btnTxt}>Vazgeç</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export {Signup};
