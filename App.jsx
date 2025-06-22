import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

import MisRutinas from './components/misRutinas';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ImageBackground
          source={require('./assets/img/fondo.png')}
          style={styles.fondo}
          resizeMode=""
        >
          <SafeAreaView style={styles.container}>
              <MisRutinas />
          </SafeAreaView>
        </ImageBackground>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  titulo: {
    textAlign: 'center',
    color: 'green',
  },
});
