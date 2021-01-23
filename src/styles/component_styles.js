import React from 'react'
import {StyleSheet} from 'react-native'

const timeline_styles=StyleSheet.create({
    container:{
        margin:5,
        padding:10,

    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        

    },
    header_left:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',

    },
    mail:{
        paddingLeft:5,
       

    },
    header_right:{
        flex:1,
        alignItems:'flex-end',

    },
    text_container:{

    },


});
export {timeline_styles};