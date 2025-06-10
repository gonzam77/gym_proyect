import {
  Text,
  View,
  SafeAreaView,
  StyleSheet
} from 'react-native';

import MisRutinas from './components/misRutinas';
import { useState } from 'react';

const App = ()=> {
  const [rutinas,setRutinas] = useState([]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MisRutinas
          rutinas={rutinas}
          setRutinas={setRutinas}
        />
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
