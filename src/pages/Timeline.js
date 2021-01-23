import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';

import {TimelineCart} from '../component/TimelineCart';

const temp_data = [
  {id: 0, text: 'Egemenlik kayıtsız şartsız milletindir.'},
  {id: 1, text: 'Mertkaan yakışıklı olduğunu söylüyor.'},
  {id: 2, text: 'Berkay geldi. Mertkaanı onaylıyor.'},
  ];

function Timeline() {

  const  renderTimeline=({item})=><TimelineCart item={item}/>

  return (
    <SafeAreaView style={{flex:1}}>
       <FlatList 
        data={temp_data}
        renderItem={renderTimeline}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export {Timeline};
