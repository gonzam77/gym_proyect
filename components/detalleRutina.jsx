import { Modal, Pressable, StyleSheet, Text, View, Alert, ScrollView, Image } from "react-native";
import { useEffect, useState } from "react";
import FormRutina from "./formRutina";
import DetalleEjercicio from "./detalleEjercicio";
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";


const DetalleRutina = (
  {
    rutinaSeleccionada, 
    setRutinaSeleccionada, 
    modalFormRutina, 
    setModalFormRutina, 
    setModalDetalle
  })=>{
      

  const rutinaActualizada = useSelector(state =>
    state.rutinas.rutinas.find(r => r.id === rutinaSeleccionada.id)
  );

  const dispatch = useDispatch();

  const [ejercicio, setEjercicio] = useState({});
  const [modalEjercicio, setModalEjercicio] = useState(false);

  const eliminarRutina = (id)=>{
    dispatch({
      type: 'rutinas/eliminarRutina',
      payload: id
    });
  }

  useEffect(()=>{
  },[rutinaActualizada])
    
  return (
    <ScrollView style={styles.container}>
      <View style={styles.botonera}>
        <Pressable
            style={[styles.iconButton,{alignItems:'center'}]}
            onPress={() => {
              setRutinaSeleccionada({});
              setModalDetalle(false);
            }}
        >
            <Image style={styles.iconos} source={require('../assets/img/volver.png')}></Image>
            {/* <Icon name="arrow-back-circle" size={40} color="#eefa07" /> */}
            {/* <Text style={{color:'#fff',textAlign:'center'}}>Volver</Text> */}
        </Pressable>

        <Pressable
          style={[styles.iconButton,{alignItems:'center'}]}
          onPress={() => {
            setModalFormRutina(true);
          }}
        >
            <Image style={{ width:55, height:55 }} source={require('../assets/img/editar.png')}></Image>

          {/* <Icon name="create" size={40} color="#43d112" /> */}
          {/* <Text style={{color:'#fff',textAlign:'center'}}>Editar</Text> */}
        </Pressable>

        <Pressable
          style={[styles.iconButton,{alignItems:'center'}]}
          onPress={() => {
            Alert.alert("Eliminar", "Desea eliminar la rutina?", [
              { text: "Cancelar" },
              {
                text: "Ok, Eliminar",
                onPress: () => {
                  eliminarRutina(rutinaActualizada.id);
                  setRutinaSeleccionada({});
                  setModalDetalle(false);
                },
              },
            ]);
          }}
        >
          <Image style={styles.iconos} source={require('../assets/img/eliminar.png')}></Image>
          {/* <Icon name="trash" size={35} color="#ff4c4c" /> */}
          {/* <Text style={{color:'#fff',textAlign:'center'}}>Eliminar</Text> */}
        </Pressable>
      </View>
      <View>
        <Text>
          {rutinaActualizada.nombre}
        </Text>
        <View>
            <Text style={styles.titulo}>{rutinaActualizada.nombre}</Text>
        </View>
        <View style={styles.listaEjercicios}>
          {
            rutinaActualizada?.ejercicios?.map((e, index) => (
              <Pressable 
                key={e.id} 
                style={styles.ejercicioItem}
                onPress={()=>{
                  setEjercicio(e);
                  setModalEjercicio(true)
                }} 
              >
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{maxWidth:280}}>
                  <Text style={styles.ejercicioNombre}>{e.nombre}</Text>
                  <Text style={styles.ejercicioDetalle}>{e.series} series x {e.repeticiones} reps</Text>
                  {
                    e.estado === 1 ? <Text style={{color:'#f57c04'}}>FINALIZADO</Text> :null
                  }       
                </View>
                  <Icon name="chevron-forward-outline" color={'#fff'} size={25}></Icon>
                </View>  
              </Pressable>
            ))
          }
        </View>
      </View>        

      <Modal
        visible={modalFormRutina}
        animationType="slide"
        onRequestClose={() => setModalFormRutina(false)}
      >
        <FormRutina 
          rutinaSeleccionada={rutinaActualizada}
          setModalFormRutina={setModalFormRutina}
        />
      </Modal>

      <Modal
        visible={modalEjercicio}
        animationType="slide"
        onRequestClose={()=>{setModalEjercicio(false)}}
      >
        <DetalleEjercicio
          ejercicio={ejercicio}
          setModalEjercicio={setModalEjercicio}
          rutinaSeleccionada={rutinaActualizada}
        />
      </Modal>
    </ScrollView>
  )
}

export default DetalleRutina;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
    paddingHorizontal: 20,
    paddingTop:30
  },
  iconos:{
    width:50,
    height:50
  }, 
  titulo: {
    fontSize: 35,
    fontWeight: "700",
    color: "#43d112",
    textAlign: "center",
  },
  listaEjercicios:{
    marginVertical:30
  },
  ejercicioItem: {
    backgroundColor: "#111111",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#43d112',
    borderRightWidth: 2,
    borderRightColor: '#43d112',
    opacity:1
  },
  ejercicioNombre: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  ejercicioDetalle: {
    color: "#eefa07",
    fontSize: 16,
    fontWeight: "600",
  },  
  iconButton: {
    marginHorizontal: 10,
    backgroundColor: "#1a1a1a",
    borderRadius: 50,
    elevation: 5,
  },
  botonera: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },
})