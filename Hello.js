import React, { useEffect, useState } from "react";
import { View,Text,SafeAreaView,Button } from "react-native";

function Hello(){
    useEffect(()=>{
      console.log('Merhaba Dünya');
    
       return() =>{
         console.log('Gidiyorum bütün aşklar yüreğimde');
       }
    },[])  
   
   
     return(
       <View style={{backgroundColor:'aqua',margin:10}}>
         <Text>I'm Hello Component</Text>
       </View>
   
     )
   }

   export default Hello;