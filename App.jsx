import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native';

import PushNotification from "react-native-push-notification";
import { Platform } from "react-native";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

import MisRutinas from './components/misRutinas';

PushNotification.configure({
  onNotification: function (notification) {
    console.log("Notificación recibida:", notification);
  },
  requestPermissions: Platform.OS === 'ios', // en Android lo pedimos manualmente
});

PushNotification.createChannel(
  {
    channelId: "descanso-channel",
    channelName: "Notificaciones de Descanso",
    importance: 4,
    vibrate: true,
    soundName: 'default', // usa el sonido por defecto del sistema
    playSound: true,
  },
  (created) => console.log(`Canal creado: ${created}`)
);

//require('../assets/sounds/alarm2.mp3')

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
