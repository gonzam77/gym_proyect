import { useEffect, useState } from "react";
import { Modal, Pressable, Text, View, StyleSheet, ScrollView } from "react-native";
import Descanso from "./descanso";
import Icon from 'react-native-vector-icons/Ionicons'; // o MaterialIcons si preferís
import IconPlay from 'react-native-vector-icons/MaterialIcons';// o MaterialIcons si preferís
import { useDispatch, useSelector } from "react-redux";


const DetalleEjercicio = ({ ejercicio, setModalEjercicio, rutinaSeleccionada }) => {
  
  const [modalDescanso, setModalDescanso] = useState(false);
  const [serie, setSerie] = useState(0);
  const [estado, setEstado] = useState(false);

  const ejercicioActualizado = useSelector(state=> 
    state.rutinas.rutinas.find(r=>
      r.id===rutinaSeleccionada.id)).ejercicios.find(e=>
        e.id===ejercicio.id); 
  const dispatch = useDispatch();

  useEffect(()=>{
    if(ejercicioActualizado.series === serie ){
      dispatch({
        type: 'rutinas/modificarEjercicio',
        payload:{
          idEjercicio: ejercicioActualizado.id,
          idRutina: rutinaSeleccionada.id,
          cambios:{estado:1}
        }
      });
    }
  },[serie, estado]);

  useEffect(()=>{
    if(ejercicioActualizado.estado === 1) {
      setSerie(ejercicioActualizado.series);
    }
  },[rutinaSeleccionada])

  const reiniciarEjercicio = ()=>{
    setSerie(0);
    setEstado(false);
    dispatch({
      type: 'rutinas/modificarEjercicio',
      payload:{
        idEjercicio: ejercicioActualizado.id,
        idRutina: rutinaSeleccionada.id,
        cambios:{estado:0}
      }
    });
  } 

  return (
    <View style={styles.container}>
      <ScrollView >
        {
          serie < ejercicioActualizado.series ?
          <View style={styles.botonera}>
            <Pressable style={styles.iconButton} onPress={()=>{
              setModalEjercicio(false);
            }}>
              <Icon name="arrow-back-circle" size={40} color="#eefa07" />
              <Text style={{color:'#fff',textAlign:'center'}}>Salir</Text>

            </Pressable>
          </View>
            : null
        }

        <Text style={styles.titulo}>{ejercicioActualizado.nombre}</Text>
        {
            ejercicioActualizado.estado === 1 ?
            <Text style={{color:'#fb7702', textAlign:'center', fontSize:24, fontWeight:'900'}}>FINALIZADO</Text>:null
        }
        <Text style={[styles.label, styles.estadistica ]}>Series Realizadas: {serie}</Text>
        <Text style={styles.label}>Series Restantes: {ejercicioActualizado.series - serie}</Text>
        <View style={styles.infoBox}>
          <Text style={styles.tituloDetalle}>Detalle</Text>
          <Text style={styles.label}>
            Series: <Text style={styles.valor}>{ejercicioActualizado.series}</Text>
          </Text>
          <Text style={styles.label}>
            Repeticiones: <Text style={styles.valor}>{ejercicioActualizado.repeticiones}</Text>
          </Text>
          <Text style={styles.label}>
            Peso: <Text style={styles.valor}>{ejercicioActualizado.peso} kg</Text>
          </Text>
          <Text style={styles.label}>
            Descanso: <Text style={styles.valor}>{ejercicioActualizado.descanso} Min</Text>
          </Text>
          
        </View>

        {
          estado ? (
            <View>
              <Text style={styles.titulo}>Serie {serie + 1}</Text>
              <Pressable
                style={styles.btnDescanso}
                onPress={() => {
                  setModalDescanso(true);
                  setEstado(false);
                  setSerie(serie + 1);
                }}
              >
                <Text style={styles.btnTexto}>Descanzar</Text>
              </Pressable>
            </View>
          ) : serie===ejercicioActualizado.series ? ( 
            <View>
              <Text style={[styles.titulo, {color:'#fff'}]}>Felicitaciones, has terminado el ejercicio!</Text>  
              <View style={styles.botonera}>
                <Pressable style={styles.iconButton} onPress={()=>{
                  setModalEjercicio(false);
                }}>
                  <Icon name="arrow-back-circle" size={35} color="#eefa07" />
                  <Text style={{color:'#fff', textAlign:'center'}}>Salir</Text>
                </Pressable>
                <Pressable style={[styles.iconButton,{alignItems:'center'}]} onPress={()=>{
                  reiniciarEjercicio();
                }}>
                  <Icon name="arrow-back-circle" size={35} color="#43d112" />
                  <Text style={{color:'#fff', textAlign:'center'}}>Reiniciar</Text>
                </Pressable>
              </View>
            </View>
          ):(
            <View style={styles.botonera}>
              <Pressable
                style={[styles.iconButton,{alignItems:'center'}]}
                onPress={() => setEstado(true)}
              >
                <IconPlay name="play-circle-outline" size={70} color="#43d112" />
                <Text style={{color:'#fff',textAlign:'center'}}>Comenzar</Text>
              </Pressable>
            </View>
          )
        }

        <Modal 
          visible={modalDescanso} 
          animationType="slide"
          onRequestClose={() => setModalDescanso(false)}
        >
          <Descanso
            ejercicio={ejercicioActualizado}
            setModalDescanso={setModalDescanso}
          />
        </Modal>
      </ScrollView>
    </View>
  );
};

export default DetalleEjercicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: "start",
  },
  titulo: {
    color: "#43d112",
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: "#373737",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    elevation: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#43d112',
    borderRightWidth: 4,
    borderRightColor: '#43d112',
  },
  tituloDetalle:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'700',
    color:"#eefa07",
  },
  label: {
    fontSize: 18,
    color: "#eefa07",
    fontWeight: "700",
    marginBottom: 10,
  },
  valor: {
    color: "#fff",
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#43d112",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignSelf: "center",
    elevation: 3,
    marginBottom:20

  },
  btnVolver: {
    backgroundColor: "#eefa07",
    borderTopStartRadius:30,
    borderBottomStartRadius:30,
    borderColor:'#43d112',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "center",
    elevation: 3,
    marginVertical:20,
    marginRight:5
  },
  btnDescanso: {
    backgroundColor: '#eefa07',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignSelf: "center",
    elevation: 3,
    marginBottom:20
  },
  btnTexto: {
    fontSize:18,
    color: "#000",
    fontWeight: "900",
    textAlign: "center",
  },
  estadistica:{
    fontSize:23,
    fontWeight:'800'
  },
  iconButton: {
    marginHorizontal: 10,
    backgroundColor: "#1a1a1a",
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
  botonera: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },

});
