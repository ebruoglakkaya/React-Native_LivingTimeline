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
        marginVertical:10,
        backgroundColor:'#00838f',
        paddingVertical:10,
        paddingHorizontal:5,
        borderRadius:5,
        alignItems:'center',
        

    },
    header_left:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',

    },
    mail:{
        paddingLeft:20,
        color:'white',

    },
    header_right:{
        flex:1,
        alignItems:'flex-end',

    },
    text_container:{

    },
    date:{
        color:'white',
        paddingRight:20,
    }


});
export {timeline_styles};