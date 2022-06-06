import React, { useState } from "react";
import { FlatList,View,SafeAreaView,StyleSheet } from "react-native";
import music_data from './music-data.json'
import SongCard from "./components/SongCard/SongCard";
import SearchBar from './components/SearchBar/SearchBar'


function App(){
  const [list,setList] = useState(music_data);

  const renderSong = ({item}) =><SongCard song={item} />;

  const renderSeperator = ()=><View style={styles.seperator}/>

  const handleSearch = text =>{
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    })

    setList(filteredList)
  };

  return(
    <SafeAreaView style={styles.container}>
            <SearchBar onSearch={handleSearch} />

      <View style={styles.container}>
        <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
        />
        </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  seperator:{
    borderWidth:1,
    borderColor:'#e0e0e0'
    
  }
})

















// import React from "react";
// import { View,Text,SafeAreaView,Button } from "react-native";

// function App(){
//   return(
// <View>
//   <Text>Hello</Text>
// </View>
//   )
// }

// export default App;






  


















// // import React, { useEffect, useState } from "react";
// // import { View,Text,SafeAreaView,Button } from "react-native";
// // import Hello from "./Hello";

// // function App(){
// //  const [helloFlag,setHelloFlag] = useState(true);

// //  function updateFlag(){
// //    setHelloFlag(!helloFlag)
// //  }



// //   return(
// //  <SafeAreaView>
// //  <Text>Hello Lifecycle</Text>
// //  <Button title="Up" onPress={updateFlag}></Button>
// // { helloFlag && <Hello />}

// //  </SafeAreaView>
 
// //   )
// // }


// // export default App;




























// // import React, { useEffect, useState } from "react";
// // import { View,Text,SafeAreaView,Button } from "react-native";

// // function App(){
// //  const [helloFlag,setHelloFlag] = useState(true);

// //  useEffect(()=>{
// //    console.log('number updated' + number);
// //  },[number])

// //  function updateCounter() {
// //    console.log('1.state value ' + number);
// //    setNumber(number +1)
// //    console.log('2.state value ' + number);
// //  }


// //   return(
// //     <SafeAreaView>
// //       <Text>Hello Lifecycle</Text>
// //       <Text>Number {number}</Text>
// //       <Button title="Up" onPress={updateCounter} />
// //     </SafeAreaView>
// //   )
// // }



// // export default App;
























// // import React, { useState, useEffect } from "react";
// // import { Text, SafeAreaView, Button, Alert, View, StyleSheet } from "react-native";

// // function App() {

// //   // const [number, setNumber] = useState(0)
// //   // const [counter, setCounter] = useState(100)

// //   const[number,setNumber] = useState(0)
// //   const[counter,setCounter] = useState(100)
// //   // console.log('render');


// //   // useEffect(() => {
// //   //   number == 5 ? console.log('Sayi 5 oldu') || Alert.alert("Sayi 5 oldu artik dur ") : console.log('Sayi daha 5 olmadi');
// //   // }, [number])


// //   // useEffect(() => {
// //   //   counter == 107 ? console.log('Sayi 107 dur') || Alert.alert('Sayi 107 oldu artik dur') : console.log('Sayi daha 107 olmadı');
// //   // }, [counter])


// //     useEffect(()=>{
// //       number == 10  ? console.log('sayi 10 oldu') || Alert.alert('sayi 10 oldu artik dur') : console.log('sayi daha 10 olmadı');
// //     },[number])

// //   useEffect(()=>{
// //     counter == 105 ? console.log('counter 105 oldu sistem zorlanıyor') ||  Alert.alert('sayi 105 dur ') : console.log('dur'); 
// //   },[counter])



// //   useEffect(() => {
// //     console.log('number uptated ' + furkan);
// //   }, [])


// //   function updateCounter() {
// //     console.log('1.state value ' + furkan);
// //     setFurkan(number + 1)
// //     console.log('2.state value ' + furkan);
// //   }


// //   const [furkan,setFurkan] = useState(4)

// //   useEffect(()=>{
// //   console.log('number uptated' + furkan);
// //   },[furkan])

// //   function updateCounter(){
// //     console.log('1.state value : ' + furkan) ;
// //     setFurkan(number + 1)
// //     console.log('2.state value : ' + furkan) ;
// //   }
  



// //   return (
// //     <SafeAreaView>
// //       <Text style={styles.header}>Lifecycle</Text>
// //       {/* <Text style={{fontSize:33}}>Lifecycle</Text> */}
// //       <Text>Number {number}</Text>
// //       {/* <Text>Number {number}</Text> */}
// //       <Text>Counter  {counter}</Text>
// //       {/* <Text>Counter {counter}</Text> */}
// //       <Button title="Up" onPress={() => setNumber(number + 1)}></Button>
// //       {/* <Button title="up" onPress={() => setNumber(number +1)}></Button> */}
// //       <Button title="UpCounter" onPress={() => setCounter(counter + 1)}></Button>
// //       {/* <Button title="upCounter" onPress={() => setCounter(counter +1)}></Button> */}
// //       <View style={styles.bottomCard}>
// //         <Button title='Declered' onPress={updateCounter} />
// //         <Text>Numbers :{furkan}</Text>
// //       </View>

// //     </SafeAreaView>

// //   )
// // }



// // const styles = StyleSheet.create({
// //   bottomCard: {
// //     marginTop: 10,
// //   },
// //   header: {
// //     fontSize: 35
// //   }

// // })





// // export default App;


















































































// // // import React, { useState } from "react";
// // // import { Text,  SafeAreaView, Switch, FlatList, View, StyleSheet, Button } from "react-native";


// // // const data = [
// // //   { id: 0, name: 'cafe.exe', isFavorite: true },
// // //   { id: 1, name: 'KafaKafe', isFavorite: false },
// // //   { id: 2, name: 'BugG', isFavorite: false },
// // //   { id: 3, name: 'Rock Code', isFavorite: true },
// // //   { id: 4, name: 'do(drink)', isFavorite: false },
// // //   { id: 5, name: 'esc', isFavorite: false }
// // // ]




// // // function App() {



// // //   // const [counter,setCounter] = useState(0);

// // //   // function increaseCounter(){
// // //   //   setCounter(counter + 1);
// // //   // }

// // //   // function decreaseCounter(){
// // //   //   setCounter(counter -1);
// // // //   // }


// // //   // ilk açılışta datanın hepsini istediğimiz için direkt data'yı alırız
// // //   const[cafeList,setCafeList] = useState(data)
// // // // const [cafeList,setCafeList] = useState(data);
// // // // ikinci listemele olayımız ise flatlisttir bunu tanımladıktan sonra flatlist'e tanımlama yaparız.

// // // // const [showOnlyFavorites,setShowOnlyFavorites] = useState(false);

// // // const[showOnlyFavorites,setShowOnlyFavorites] = useState(false);



// // // function onFavoritesChange(isFavoriteSelected){
// // //   setShowOnlyFavorites(isFavoriteSelected);
// // //   isFavoriteSelected ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
// // //   :
// // //   setCafeList(data)
// // // }


// // // // function onFavoritesChange(isFavoriteSelected){
// // // //   setShowOnlyFavorites(isFavoriteSelected);
// // // //   isFavoriteSelected ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
// // // //   :
// // // //   setCafeList(data)
// // // // }


// // //   return (

// // //     <SafeAreaView>
// // //       <View>
// // //         <Text>Show Only Favorites</Text>
// // //       </View>
// // //       <Switch 
// // //       value={showOnlyFavorites}
// // //       onValueChange={onFavoritesChange}
// // //       />
// // //       <FlatList 
// // //       data={cafeList}
// // //       renderItem={(item) =><Text>{item.name}</Text>} />
// // //     </SafeAreaView>

// // // //     <SafeAreaView>
// // // //       <View style={{margin:10}}>
// // // //         <Text style={{textAlign:"right"}}>Show Only Favorites</Text>
// // // //       </View>
// // // //       <Switch 
// // // //       value={showOnlyFavorites}
// // // //       onValueChange={onFavoritesChange}
// // // //        />
// // // // {/* burdaki datanın değeri cafeList olacaktır state'in kjendisini tanımlıypruz cunku zamanı gelince degistiricez.  */}
// // // //       <FlatList data={cafeList} renderItem={({item}) => <Text style={{fontSize:25}}>{item.name}</Text>}/>

// // // //     </SafeAreaView>


// // //     // <SafeAreaView>
// // //     //   <Text style={{fontSize:40}}>Counter :{counter} </Text>
// // //     //   <Button title="Increase Button" onPress={increaseCounter}></Button>
// // //     //   <Button title="Decrease Button" onPress={decreaseCounter}></Button>
// // //     // </SafeAreaView>

// // //   )

// // // }





// // // export default App;