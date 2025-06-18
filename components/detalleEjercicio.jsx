import { useEffect, useState } from "react";
import { Modal, Pressable, Text, View, StyleSheet, ScrollView } from "react-native";
import Descanso from "./descanso";
import Icon from 'react-native-vector-icons/Ionicons'; // o MaterialIcons si preferís
import IconPlay from 'react-native-vector-icons/MaterialIcons';// o MaterialIcons si preferís


const DetalleEjercicio = ({ ejercicio, setModalEjercicio }) => {
  const [modalDescanso, setModalDescanso] = useState(false);
  const [serie, setSerie] = useState(0);
  const [estado, setEstado] = useState(false);

  useEffect(()=>{

  },[serie, estado])

  return (
    <View style={styles.container}>
      <ScrollView >
        {
          serie < ejercicio.series ?
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

        <Text style={styles.titulo}>{ejercicio.nombre}</Text>

        <Text style={[styles.label, styles.estadistica ]}>Series Realizadas: {serie}</Text>
        <Text style={styles.label}>Series Restantes: {ejercicio.series - serie}</Text>
        <View style={styles.infoBox}>
          <Text style={styles.tituloDetalle}>Detalle</Text>
          <Text style={styles.label}>
            Series: <Text style={styles.valor}>{ejercicio.series}</Text>
          </Text>
          <Text style={styles.label}>
            Repeticiones: <Text style={styles.valor}>{ejercicio.repeticiones}</Text>
          </Text>
          <Text style={styles.label}>
            Peso: <Text style={styles.valor}>{ejercicio.peso} kg</Text>
          </Text>
          <Text style={styles.label}>
            Descanso: <Text style={styles.valor}>{ejercicio.descanso} Min</Text>
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
                <Text style={styles.btnTexto}>X Descanso</Text>
              </Pressable>
            </View>
          ) : serie===ejercicio.series ? ( 
            <View>
              <Text style={[styles.titulo, {color:'#32dcf4'}]}>Felicitaciones, has terminado el ejercicio!</Text>  
              <View style={styles.botonera}>
                <Pressable style={styles.iconButton} onPress={()=>{
                  setModalEjercicio(false);
                }}>
                  <Icon name="arrow-back-circle" size={35} color="#eefa07" />
                  <Text style={{color:'#fff', textAlign:'center'}}>Salir</Text>
                </Pressable>
              </View>
            </View>
          ):(
            <View style={styles.botonera}>
              <Pressable
                style={[styles.iconButton,{alignItems:'center'}]}
                onPress={() => setEstado(true)}
              >
                <IconPlay name="play-circle-outline" size={35} color="#43d112" />
                <Text style={{color:'#fff',textAlign:'center'}}>Comenzar</Text>
              </Pressable>
            </View>
          )
        }

        <Modal visible={modalDescanso} animationType="slide">
          <Descanso
            descanso={ejercicio.descanso}
            ejercicio={ejercicio}
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
    fontWeight: "bold",
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
