import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useState, useRef, useEffect } from "react";
import BackgroundTimer from 'react-native-background-timer';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Ionicons'; // o MaterialIcons si preferís

// Habilitar reproducción en Android (opcional, pero recomendado)
Sound.setCategory('Playback');

const Descanso = ({ setModalDescanso, ejercicio }) => {
  const segundosTotales = ejercicio.descanso * 60;
  const alarmaRef = useRef(null);
  const [segundos, setSegundos] = useState(segundosTotales);
  const [activo, setActivo] = useState(true);
  const intervaloRef = useRef(null);

 useEffect(() => {

  if (intervaloRef.current !== null) {
    BackgroundTimer.clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  }

  if (activo && segundos > 0) {
    intervaloRef.current = BackgroundTimer.setInterval(() => {
      setSegundos(prev => {
        if (prev <= 1) {
          BackgroundTimer.clearInterval(intervaloRef.current);
          intervaloRef.current = null;

          // Reproducir sonido de alarma
          reproducirAlarma();

          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  }

  const reproducirAlarma = () => {
    const alarma = new Sound(require('../assets/sounds/alarm2.mp3'), (error) => {
      if (error) {
        console.log('Error al cargar el sonido:', error);
        return;
      }

      alarma.setNumberOfLoops(-1); // Repetir infinitamente
      alarma.play((success) => {
        if (!success) {
          console.log('Error al reproducir el sonido');
        }
      });

      alarmaRef.current = alarma;
    });
  };

  return () => {
    // 🧹 Detener intervalo
    if (intervaloRef.current !== null) {
      BackgroundTimer.clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }

    // 🧹 Detener alarma si sigue sonando
    if (alarmaRef.current) {
      alarmaRef.current.stop(() => {
        alarmaRef.current?.release?.();
        alarmaRef.current = null;
      });
    }
  };
}, [activo, segundos]);



  const reiniciar = () => {
    if (intervaloRef.current !== null) {
      BackgroundTimer.clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }
    setSegundos(segundosTotales);
    setActivo(true);
  };

  const formatoTiempo = (s) => {
    const m = Math.floor(s / 60);
    const seg = s % 60;
    return `${String(m).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/img/logo1.png')} />
      <Text style={styles.titulo}>DESCANSO</Text>

      <View style={styles.contenedor}>
        <Text style={styles.titulo2}>Tiempo Restante</Text>
        <Text style={styles.tiempo}>{formatoTiempo(segundos)} s</Text>

        <View style={styles.botones}>
          <Pressable
            onPress={() => setActivo(!activo)}
          >
            {
              activo ?
                <Icon name="pause-circle-outline" size={60} color="#eefa07" />
              :
                <Icon name="play-circle-outline" size={60} color="#43d112" />
              }
          </Pressable>

          <Pressable 
            onPress={reiniciar}
          >
              <Icon name="refresh-outline" size={55} color="#43d112" />
          </Pressable>
        </View>
      </View>
      {
        segundos > 0 ?
        <Pressable style={styles.btn} onPress={() => setModalDescanso(false)}>
          <Text style={styles.btnTexto}>Saltar Descanso</Text>
        </Pressable> 
        :        
        <Pressable
          onPress={() => {  
            if (alarmaRef.current) {
              alarmaRef.current.stop(() => {
                alarmaRef.current.release();
                alarmaRef.current = null;
              });
            }
            setModalDescanso(false);
          }}
        >
          <Image style={{width:80,height:80}} source={require('../assets/img/stop.png')}></Image>
          {/* <Icon name="stop-outline" size={55} color="#000" /> */}
        </Pressable>

      }
    </View>
  );
};

export default Descanso;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: "900",
    color: "#43d112",
    marginVertical: 40,
    textAlign: "center",
  },
  tiempo: {
    fontSize: 50,
    color: "#ffffff",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#43d112",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 3,
  },
  btnTexto: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  image:{
    alignSelf:'center',
    height:200,
    width:200,
    padding:20,
    borderRadius:50
  },
  contenedor: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    marginBottom:30,
    borderRadius:10,
    borderColor:'#43d112',
    borderWidth:2,
    padding:20
  },
  titulo2: {
    fontSize: 28,
    color: '#eefa07',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  tiempo: {
    fontSize: 48,
    color: '#ffffff',
    marginBottom: 40,
  },
  botones: {
    flexDirection: 'row',
    gap: 40,
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 5,
  },
});
