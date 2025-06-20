import { Modal, Pressable, StyleSheet, Text, View, Alert, ScrollView } from "react-native";
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
            <Icon name="arrow-back-circle" size={40} color="#eefa07" />
            <Text style={{color:'#fff',textAlign:'center'}}>Volver</Text>
        </Pressable>

        <Pressable
          style={[styles.iconButton,{alignItems:'center'}]}
          onPress={() => {
            setModalFormRutina(true);
          }}
        >
          <Icon name="create" size={40} color="#43d112" />
          <Text style={{color:'#fff',textAlign:'center'}}>Editar</Text>
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
          <Icon name="trash" size={35} color="#ff4c4c" />
          <Text style={{color:'#fff',textAlign:'center'}}>Eliminar</Text>
        </Pressable>
      </View>
      <View>
        <Text>
          {rutinaActualizada.nombre}
        </Text>
        <View style={styles.leyenda}>
            <Text style={styles.titulo}>{rutinaActualizada.nombre}</Text>
        </View>
        <View style={styles.form}>
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
                    <Text style={styles.ejercicioNombre}>Ejercicio {index + 1}: {e.nombre}</Text>
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
  leyendaTexto: {
    textAlign: 'center',
    color: '#eefa07',
    fontSize: 20,
    fontWeight: '900',
  },
  botonera:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:30
  },
  titulo: {
    fontSize: 32,
    fontWeight: "900",
    color: "#43d112",
    textAlign: "center",
  },
  form: {
    marginVertical: 30,
  },
  label: {
    color: "#eefa07",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#43d112",
    borderRadius: 30,
    marginVertical:15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: "center",
    elevation: 3,
  },
  btnCancelar: {
    backgroundColor: "#eefa07",
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: "center",
    elevation: 3,
  },
  btnEliminar:{
    backgroundColor:'#9b0404',
  },
  btnEliminarTexto:{
    fontSize: 18,
    color:'#fff',
    fontWeight: "bold",
    textAlign: "center",
  },
  btnTexto: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
    listaEjercicios: {
    marginTop: 20,
    marginBottom: 20,
  },
  ejercicioItem: {
    backgroundColor: "#373737",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#43d112',
    borderRightWidth: 2,
    borderRightColor: '#43d112',
  },
  ejercicioNombre: {
    color: "#43d112",
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
    padding: 10,
    elevation: 5,
  },
  botonera: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },
})