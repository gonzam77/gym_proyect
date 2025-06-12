import { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, Modal } from "react-native";
import FormRutina from "./formRutina";
import DetalleRutina from "./detalleRutina";

const MisRutinas = () => {

  const [rutinas,setRutinas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDetalle, setModalDetalle] = useState(false);
  const [rutinaSeleccionada, setRutinaSelecionada] = useState();
 
  const EntrenamientoItem = ({ dia, nombre, id }) => (
    <Pressable onLongPress={()=>{
        const selectedRutina = rutinas.find(e=>e.id===id)
        setRutinaSelecionada(selectedRutina)
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
      <Text style={styles.titulo}>Mis Rutinas</Text>

      {
        rutinas.length?
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
        setModalVisible(true)
      }}>
        <Text style={styles.btnTexto}>+ Agregar Rutina</Text>
      </Pressable>
      {
        modalDetalle ?
        <Modal>
          <DetalleRutina
            rutinaSeleccionada={rutinaSeleccionada}
            setRutinaSelecionada={setRutinaSelecionada}
            rutinas={rutinas}
            setRutinas={setRutinas}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            setModalDetalle={setModalDetalle}
          />
        </Modal>
          : null
      }

      {
        modalVisible ?
        <Modal>
          <FormRutina 
            rutinas={rutinas} 
            setRutinas={setRutinas}
            setModalVisible={setModalVisible}
            rutinaSeleccionada={rutinaSeleccionada}
          />
        </Modal>
        : null
      }
    </ScrollView>
  );
};

export default MisRutinas;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingBottom: 40,
    paddingTop: 70,
  },
  titulo: {
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
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 15,
    elevation: 2,
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
});
 