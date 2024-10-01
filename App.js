
import { useState } from 'react';
import {ActivityIndicator, Button, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loader ,setLoader]=useState(false)

  const displayLoader=()=>{
setLoader(true)
setTimeout(()=>{
  setLoader(false)
},5000)
  }
  
  return (
    <>
    <StatusBar/>
    <View style={styles.container}>
      <View>
      <ActivityIndicator  size={100} animating={loader}/>
      <Button title='Show Loader' onPress={displayLoader}/>

        
      </View>
      
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
    
  },
});
