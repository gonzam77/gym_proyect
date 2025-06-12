import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Modal
} from 'react-native';

import MisRutinas from './components/misRutinas';
import { useState } from 'react';
import Fuentes from './helpers/funtes';

const App = ()=> {
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MisRutinas />
      </View>
    </SafeAreaView>
  );
}

export default App;



const styles = StyleSheet.create({
    container : {
        backgroundColor: 'black',
        flex:1
    },
    titulo: {
        textAlign:'center',
        color:'green'
    },
})
