import {
  View,
  SafeAreaView,
  StyleSheet,
  Modal
} from 'react-native';

import MisRutinas from './components/misRutinas';
import DetalleRutina from './components/detalleRutina';
import FormEjercicio from './components/formEjercicio';
import FormRutina from './components/formRutina';
import { useState } from 'react';

const App = ()=> {

  const [misRutinas, setMisRutinas] = useState();
  const [rutinaSeleccionada, setRutinaSeleccionada] = useState();
  const [nuevaRutina, setNuevaRutina] = useState();
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState();
  const [modalDetalleRutinas, setModalDetalleRutinas] = useState(false);
  const [modalFormRutinas, setModalFormRutinas] = useState(false);
  const [modalDetalleEjercicios, setModalDetalleEjercicios] = useState(false);
  const [modalFormEjercicios, setModalFormEjercicios] = useState(false);
  const [modalEjercicios, setModalEjercicios] = useState(false);
  const [modalDescanso, setModalDescanso] = useState(false);

  
  return (
    <SafeAreaView style={styles.container}>
      <View>

        <MisRutinas 
          misRutinas={misRutinas}
          rutinaSeleccionada={rutinaSeleccionada}
          setRutinaSeleccionada={setRutinaSeleccionada}
          setModalDetalleRutinas={setModalDetalleRutinas}
          setModalFormRutinas={setModalFormRutinas}
        />

        <Modal
          visible={modalDetalleRutinas}
          animationType="slide"
          onRequestClose={() => setModalDetalleRutinas(false)}
        > 
          <DetalleRutina
            misRutinas={misRutinas}
            rutinaSeleccionada={rutinaSeleccionada}
            setRutinaSeleccionada={setRutinaSeleccionada}
            setModalFormRutinas={setModalFormRutinas}
            setmodalDetalleRutinas={setModalDetalleRutinas}
          />
        </Modal>
        
        <Modal
          visible={modalFormRutinas}
          animationType="slide"
          onRequestClose={() => setModalFormRutinas(false)}
        >
          <FormRutina 
            misRutinas={misRutinas}
            nuevaRutina={nuevaRutina}
            setNuevaRutina={setNuevaRutina}
            setMisRutinas={setMisRutinas}
            setModalFormRutinas={setModalFormRutinas}
            rutinaSeleccionada={rutinaSeleccionada}
            setRutinaSeleccionada={setRutinaSeleccionada}
            setModalEjercicios={setModalEjercicios}
          />
        </Modal>

        <Modal
          visible={modalFormEjercicios}
          animationType="slide"
          onRequestClose={() => setModalFormEjercicios(false)}
        >
          <FormEjercicio 
              nuevaRutina={nuevaRutina}
              setNuevaRutina={setNuevaRutina}
              setModalFormEjercicios={setModalFormEjercicios}
          /> 
        </Modal>



      </View>
    </SafeAreaView>


  );
}

export default App;



const styles = StyleSheet.create({
    container : {
        backgroundColor: 'black',
        flex:1
    },
    titulo: {
        textAlign:'center',
        color:'green'
    },
})
