import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, Modal, Image } from "react-native";
import FormRutina from "./formRutina";
import DetalleRutina from "./detalleRutina";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MisRutinas = () => {

  const [rutinas,setRutinas] = useState([]);
  const [modalFormRutina, setModalFormRutina] = useState(false);
  const [modalDetalle, setModalDetalle] = useState(false);
  const [rutinaSeleccionada, setRutinaSeleccionada] = useState();

  useEffect(()=>{
    
    const obtenerRutinas = async ()=>{
        
      try {
        const rutinasStorage = await AsyncStorage.getItem('gym_rutinas');
        if(rutinasStorage){
          setRutinas(JSON.parse(rutinasStorage))
        }
      } catch (error) {
        console.log(error);
      }
    };

    obtenerRutinas();
    
  },[])


  useEffect(()=>{
    const guardarRutina= async ()=>{
      if(rutinas){
        try {
          const guardarRutina = await AsyncStorage.setItem('gym_rutinas', JSON.stringify(rutinas))
        } catch (error) {
          console.log(error);
        }
      }
    }
    guardarRutina();        
  },[rutinas])
 
  const EntrenamientoItem = ({ dia, nombre, id }) => (
    <Pressable onPress={()=>{
        const selectedRutina = rutinas.find(e=>e.id===id)
        setRutinaSeleccionada(selectedRutina)
        setModalDetalle(true)
      }} style={styles.entrenamiento}>
      <Text style={styles.dia}>
        {dia}: <Text style={styles.nombre}>{nombre}</Text>
      </Text>
    </Pressable>
  );
  
  let contador = 0;
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../assets/img/Logo.png')}/>
      <Text style={styles.titulo}>Mis Rutinas</Text>

      {
        rutinas?.length?
        <View style={styles.leyenda}>
          <Text style={styles.leyendaTexto}>Seleccione la rutina de hoy</Text>
        </View>
        :
        <View style={styles.leyenda}>
          <Text style={styles.leyendaTexto}>Aun no ha programado rutinas</Text>
        </View>
      }

      {
        rutinas?.map(e=>{
          contador += 1;
          return(
              <EntrenamientoItem dia={`DIA ${contador}`} nombre={e.nombre} id={e.id} key={e.id} />
          )
        })
      }

      <Pressable 
        style={styles.btn} 
        onPress={()=>{
        setModalFormRutina(true)
      }}>
        <Text style={styles.btnTexto}>+ Agregar Rutina</Text>
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
          setRutinas={setRutinas}
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
          setRutinas={setRutinas}
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
    backgroundColor: '#000',
    paddingBottom: 20,
    paddingTop: 30,
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
    marginBottom: 25,
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
    height:150,
    width:150,
  }
});
 