import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, Modal, Image, Animated } from "react-native";
import FormRutina from "./formRutina";
import DetalleRutina from "./detalleRutina";
import Icon from 'react-native-vector-icons/Ionicons'; // o MaterialIcons si preferís
import { useSelector } from "react-redux";

const MisRutinas = () => {

  const rutinas = useSelector(state => state.rutinas.rutinas)
  const [modalFormRutina, setModalFormRutina] = useState(false);
  const [modalDetalle, setModalDetalle] = useState(false);
  const [rutinaSeleccionada, setRutinaSeleccionada] = useState();

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const presionarIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.90,
      useNativeDriver: true,
    }).start();
  };

  const presionarOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  useEffect(()=>{
  },[rutinas])
 
  const EntrenamientoItem = ({ dia, nombre, id }) => (
    <Pressable onPress={()=>{
        const selectedRutina = rutinas.find(e=>e.id===id)
        setRutinaSeleccionada(selectedRutina)
        setModalDetalle(true)
      }} style={styles.entrenamiento}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={{maxWidth:280}}>
            <Text style={styles.dia}>
              {dia}: <Text style={styles.nombre}>{nombre}</Text>
            </Text>
          </View>
          <Icon name="chevron-forward-outline" color={'#fff'} size={25}></Icon>
        </View>
    </Pressable>
  );
  
  return (
    
    <View style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:30, paddingTop:30}}>
        <View>
          <Text style={{fontSize:40, color:'#fff', fontWeight:'800', }}>
            A DARLO
          </Text>
          <Text style={{fontSize:45, color:'#fff', fontWeight:'800', }}>
            TODO ! ! ! 
          </Text>
        </View>
        <View>
          <Image style={styles.image} source={require('../assets/img/logo1.png')} />
        </View>  
      </View>
      
      <ScrollView contentContainerStyle={styles.scroll}>
        {
          rutinas?.length ? null : (
            <View style={styles.leyenda}>
              <Text style={styles.leyendaTexto}>Aun no ha programado rutinas</Text>
            </View>
          )
        }
  
        {
          rutinas?.map((e, index) => (
            <EntrenamientoItem
            dia={`DIA ${index + 1}`}
            nombre={e.nombre}
            id={e.id}
            key={e.id}
            />
          ))
        }
      </ScrollView>

      <Pressable
        onPressIn={presionarIn}
        onPressOut={presionarOut}
        style={styles.btnCircular}
        onPress={() => {
          setRutinaSeleccionada({});
          setModalFormRutina(true);
        }}
      >
        <Animated.Image style={[styles.agregar, {transform:[{scale: scaleAnim}]}]} source={require('../assets/img/agregar.png')} />
        {/* <Icon name="add-circle-outline" color={'#43d112'} size={65}></Icon> */}
      </Pressable>

      <Modal
        visible={modalDetalle}
        animationType="slide"
        onRequestClose={() => setModalDetalle(false)}
      >
        <DetalleRutina
          rutinaSeleccionada={rutinaSeleccionada}
          setRutinaSeleccionada={setRutinaSeleccionada}
          rutinas={rutinas}
          setModalFormRutina={setModalFormRutina}
          modalFormRutina={modalFormRutina}
          setModalDetalle={setModalDetalle}
        />
      </Modal>

      <Modal
        visible={modalFormRutina}
        animationType="slide"
        onRequestClose={() => setModalFormRutina(false)}
      >
        <FormRutina
          rutinas={rutinas}
          setModalFormRutina={setModalFormRutina}
          rutinaSeleccionada={rutinaSeleccionada}
          setRutinaSeleccionada={setRutinaSeleccionada}
        />
      </Modal>
    </View>
  );
};

export default MisRutinas;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent', // importante para que se vea el fondo
    flex:1
  },
  scroll:{
    backgroundColor:'transparent',
    paddingVertical:50,
    flexGrow:1
  },
  agregar:{
    width:80,
    height:80
  },  
  leyendaTexto: {
    textAlign: 'center',
    color: '#eefa07',
    fontSize: 20,
    fontWeight: '900',
  },
  entrenamiento: {
    marginHorizontal: 15,
    marginVertical: 12,
    backgroundColor: '#111111',
    // backgroundColor: '#111111',
    borderRadius: 20,
    padding: 15,
    paddingVertical:25,
    elevation: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#43d112',
    borderRightWidth: 2,
    borderRightColor: '#43d112',
    opacity:0.95
  },
  dia: {
    color: '#43d112',
    fontSize: 26,
    fontWeight: '600',
  },
 nombre: {
    fontSize: 26,
    fontWeight: '600',
  },
  image:{
    height:100,
    width:100,
    borderRadius:50
  },
  btnCircular: {
    position:'absolute',
    right:30,
    bottom:30,
  },
});
 