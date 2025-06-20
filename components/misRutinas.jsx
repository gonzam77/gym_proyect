import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, Modal, Image } from "react-native";
import FormRutina from "./formRutina";
import DetalleRutina from "./detalleRutina";
import Icon from 'react-native-vector-icons/Ionicons'; // o MaterialIcons si preferís
import { useSelector } from "react-redux";

const MisRutinas = () => {

  const rutinas = useSelector(state => state.rutinas.rutinas)
  const [modalFormRutina, setModalFormRutina] = useState(false);
  const [modalDetalle, setModalDetalle] = useState(false);
  const [rutinaSeleccionada, setRutinaSeleccionada] = useState();

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
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../assets/img/logo1.png')} />

      <Pressable
        style={styles.btnCircular}
        onPress={() => {
          setModalFormRutina(true);
        }}
      >
          <Icon name="add-circle-outline" color={'#43d112'} size={65}></Icon>
      </Pressable>

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

      {/* Modales */}
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
    </ScrollView>
  );
};

export default MisRutinas;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent', // importante para que se vea el fondo
    paddingBottom: 20,
    paddingTop: 70,
  },
  titulo: {
    fontFamily: 'Caprasimo-Regular',
    textAlign: 'center',
    color: '#43d112',
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 20,
  },
  leyenda: {
    marginBottom: 40,
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
    backgroundColor: '#373737',
    borderRadius: 12,
    padding: 15,
    elevation: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#43d112',
    borderRightWidth: 2,
    borderRightColor: '#43d112',
  },
  dia: {
    color: '#43d112',
    fontSize: 20,
    fontWeight: '600',
  },
  nombre: {
    fontSize: 18,
    fontWeight: '900',
  },
  btn: {
    backgroundColor: '#43d112',
    borderRadius: 30,
    marginHorizontal: 50,
    paddingVertical: 12,
    elevation: 3,
  },
  btnTexto: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  image:{
    alignSelf:'center',
    height:100,
    width:100,
    marginBottom:30
  },
  btnCircular: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom:40,
    marginRight: 30,
  },
});
 