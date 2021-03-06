import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {FavoriteCart, FavoritesHeader} from '../component';

function Favorites({navigation}) {
  const [favoriteArray, setFavoriteArray] = useState([]);

  useEffect(() => {
    database()
      .ref(`/favorites/` + auth().currentUser.uid)
      .on('value', (snapshot) => {
        const data = snapshot.val();

        if (!data) {
          return;
        }
        setFavoriteArray(
          Object.values(data).sort((a, b) => (a.time < b.time ? 1 : -1)),
        );
      });
  }, []);

  const renderFavorite = ({item}) => <FavoriteCart reload={()=>setFavoriteArray([])} item={item} />;

  function logOut() {
    auth()
      .signOut()
      .then(() => navigation.navigate('LoginStack'))
      .catch(({code, message}) => Alert.alert(code, message));
  }

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<FavoritesHeader logOut={logOut} />}
        keyExtractor={(_, index) => index.toString()}
        data={favoriteArray}
        renderItem={renderFavorite}
      />
    </SafeAreaView>
  );
}

export {Favorites};
