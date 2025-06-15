import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native';

import MisRutinas from './components/misRutinas';

const App = ()=> {

  return (
    <ImageBackground
      source={require('./assets/img/fondo.png')}
      style={styles.fondo}
      resizeMode=""
    >
      <SafeAreaView style={styles.container}>
        <View>
          <MisRutinas />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
export default App;


const styles = StyleSheet.create({
    
fondo: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // importante para que se vea el fondo
  },
  titulo: {
    textAlign: 'center',
    color: 'green',
  },

})
