import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useState, useRef, useEffect } from "react";
import BackgroundTimer from 'react-native-background-timer';
import Sound from 'react-native-sound';

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
    };

    const reproducirAlarma = () => {
      const alarma = new Sound(require('../assets/sounds/alarm.mp3'), (error) => {
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

      alarmaRef.current = alarma; // Guardar referencia para poder detenerla
    });
  };

    return () => {
      if (intervaloRef.current !== null) {
        BackgroundTimer.clearInterval(intervaloRef.current);
        intervaloRef.current = null;
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
            style={[styles.boton, activo ? styles.botonPausar : styles.botonIniciar]}
            onPress={() => setActivo(!activo)}
          >
            <Text style={styles.textoBoton}>{activo ? 'Pausar' : 'Iniciar'}</Text>
          </Pressable>

          <Pressable style={[styles.boton, styles.botonReiniciar]} onPress={reiniciar}>
            <Text style={styles.textoBoton}>Reiniciar</Text>
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
          style={styles.btn}
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
          <Text style={styles.btnTexto}>Detener</Text>
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
  tiempoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  tiempoTexto: {
    color: "#eefa07",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
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
  },
  contenedor: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    marginBottom:30
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
    gap: 10,
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  botonIniciar: {
    backgroundColor: '#43d112',
  },
  botonPausar: {
    backgroundColor: '#d63031',
  },
  botonReiniciar: {
    backgroundColor: '#eefa07',
  },
  textoBoton: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
