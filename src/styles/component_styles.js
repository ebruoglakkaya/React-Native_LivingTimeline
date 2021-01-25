import {StyleSheet, Platform} from 'react-native';

const chat_styles = StyleSheet.create({
  container: {
    backgroundColor: '#00838f',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 5,
    marginBottom: 5,
    position: 'relative',
    //padding: Platform.OS === 'android' ? '-10' : '10',
  },
  text: {
    color: 'white',
  },
});

const timeline_styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    borderWidth: 0.3,
    borderColor: '#ffaa00',
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 5,
    backgroundColor: '#00838f',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 0.3,
    borderColor: '#ffaa00',
    borderRadius: 5,
    alignItems: 'center',
  },
  header_left: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mail: {
    paddingLeft: 20,
    color: 'white',
  },
  header_right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    color: '#546e7a',
  },
  date: {
    color: 'white',
    paddingRight: 20,
  },
  addFavContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgba(200, 200, 200, 0.4)',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  favicon: {
    backgroundColor: '#00838f',
    padding: 2,
    borderRadius: 50,
  },
});

const favorite_styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    borderWidth: 0.3,
    borderColor: '#ffaa00',
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 5,
    backgroundColor: '#00838f',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 0.3,
    borderColor: '#ffaa00',
    borderRadius: 5,
    alignItems: 'center',
  },
  header_left: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mail: {
    paddingLeft: 20,
    color: 'white',
  },
  header_right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    color: '#546e7a',
  },
  date: {
    color: 'white',
    paddingRight: 20,
  },
  addFavContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgba(200, 200, 200, 0.4)',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  favicon: {
    backgroundColor: '#00838f',
    padding: 2,
    borderRadius: 50,
  },
});

const favorite_header_styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 10,
  },

  text: {
    color: 'white',
    paddingLeft: 10,
    //alignSelf: 'flex-start',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

const timeline_header_styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 10,
  },

  text: {
    color: 'white',
    paddingLeft: 10,
    //alignSelf: 'flex-start',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export {
  timeline_styles,
  chat_styles,
  favorite_styles,
  favorite_header_styles,
  timeline_header_styles,
};
