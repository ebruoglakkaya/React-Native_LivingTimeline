import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const login_styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventContainer: {
    flex: 1,
    margin: 5,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#3355dd',
    margin: 5,
    width: deviceSize.width / 2,
    alignSelf: 'center',
  },
  btnTxt: {
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
});

export {login_styles};
