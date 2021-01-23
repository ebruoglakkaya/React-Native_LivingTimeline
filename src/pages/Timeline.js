import React ,{useState,useEffect} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {TimelineCart} from '../component/TimelineCart';
import {ChatInput} from '../component';

const temp_data = [
  {id: 0, text: 'Egemenlik kayıtsız şartsız milletindir.'},
  {id: 1, text: 'Mertkaan yakışıklı olduğunu söylüyor.'},
  {id: 2, text: 'Berkay geldi. Mertkaanı onaylıyor.'},
  ];

function Timeline() {

  const [timelineArray,setTimelineArray]=useState([]);

  useEffect(()=> {
    database().ref(`${auth().currentUser.uid}`)
    .on('value', (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        return;
      }
      setTimelineArray(Object.values(data));
    });

  },[])

  const  renderTimeline=({item})=><TimelineCart item={item}/>
  function addChat(Chat){
    database()
      .ref(`${auth().currentUser.uid}`)
      .push({id: Math.random(), text: chat});
  }

  return (
    <SafeAreaView style={{flex:1}}>
       <FlatList 
        data={timelineArray}
        renderItem={renderTimeline}
        keyExtractor={(item, index) => index.toString()}
      />
      <ChatInput onSend={addChat}/>
    </SafeAreaView>
  );
}

export {Timeline};
