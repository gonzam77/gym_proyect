import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import FormRutina from "./formRutina";

const DetalleRutina = ({id, setId, rutinas, setRutinas, modalVisible, setModalVisible, setModalDetalle, idDetalle})=>{
    
    const rutina = rutinas?.find(e=>e.id === idDetalle);


    const eliminarRutina =(id) =>{
    
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.botonera}>
                <Pressable style={styles.btnCancelar}onPress={()=>{setModalDetalle(false)}}>
                    <Text style={styles.btnTexto}>Volver</Text>
                </Pressable>
                <Pressable style={styles.btnCancelar}onPress={()=>{setModalVisible(true)}}>
                    <Text style={styles.btnTexto}>Editar</Text>
                </Pressable>
            </View>
            <Text>
                {rutina.nombre}
            </Text>
            <View style={styles.leyenda}>
                <Text style={styles.titulo}>{rutina.nombre}</Text>
                <Text style={styles.leyendaTexto}>Seleccione el ejercicio a realizar</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.listaEjercicios}>
                    {
                        rutina?.ejercicios?.map((e, index) => (
                            <Pressable onLongPress={()=>{alert('empezar ejercicio')}} key={e.id} style={styles.ejercicioItem}>
                                <Text style={styles.ejercicioNombre}>Ejercicio {index + 1}: {e.nombre}</Text>
                                <Text style={styles.ejercicioDetalle}>{e.series} series x {e.repeticiones} reps</Text>
                            </Pressable>
                        ))
                    }
                </View>
            </View>
            <View>
                <Pressable onPress={()=>{setModalVisible(true)}}>
                    <Text>Editar</Text>
                </Pressable>
                <Pressable>
                    <Text>Eliminar</Text>
                </Pressable>
            </View>

            {   
                modalVisible?
                <Modal>
                    <FormRutina 
                        id={rutina.id}
                        setRutinas={setRutinas}
                        rutinas={rutinas}
                        setModalVisible={setModalVisible}
                    />
                </Modal>
                :null
            }
        </View>

    )
}

export default DetalleRutina;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  leyendaTexto: {
    textAlign: 'center',
    color: '#eefa07',
    fontSize: 20,
    fontWeight: '900',
  },
  botonera:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  titulo: {
    fontSize: 32,
    fontWeight: "900",
    color: "#43d112",
    textAlign: "center",
    marginBottom: 30,
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
        backgroundColor: "#1a1a1a",
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        elevation: 2,
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
})