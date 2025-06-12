import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import FormRutina from "./formRutina";
import { useEffect, useState } from "react";

const DetalleRutina = (
    {
        rutinaSeleccionada, 
        setRutinaSelecionada, 
        rutinas, 
        setRutinas,
        modalFormRutina, 
        setModalFormRutina, 
        setModalDetalle
    })=>{


    const eliminarRutina = (id)=>{
        const rutinasFiltradas = rutinas.filter(e => e.id !== id);
        setRutinas(rutinasFiltradas);
    }

    useEffect(()=>{

    },[rutinaSeleccionada])
    
    return (
        <View style={styles.container}>
            <View style={styles.botonera}>
                <Pressable style={styles.btnCancelar}onPress={()=>{
                    setRutinaSelecionada({});
                    setModalDetalle(false);
                }}>
                    <Text style={styles.btnTexto}>Volver</Text>
                </Pressable>
                <Pressable style={styles.btnCancelar}onPress={()=>{setModalFormRutina(true)}}>
                    <Text style={styles.btnTexto}>Editar</Text>
                </Pressable>
                <Pressable style={[styles.btnCancelar,styles.btnEliminar ]}onPress={()=>{
                    eliminarRutina(rutinaSeleccionada.id);
                    setRutinaSelecionada({})
                    setModalDetalle(false)
                }}>
                    <Text style={styles.btnEliminarTexto}>Elimniar</Text>
                </Pressable>
            </View>
            <Text>
                {rutinaSeleccionada.nombre}
            </Text>
            <View style={styles.leyenda}>
                <Text style={styles.titulo}>Detalle:</Text>
                <Text style={styles.titulo}>Nombre: {rutinaSeleccionada.nombre}</Text>
                <Text style={styles.leyendaTexto}>Seleccione el ejercicio a realizar</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.listaEjercicios}>
                    {
                        rutinaSeleccionada?.ejercicios?.map((e, index) => (
                            <Pressable onLongPress={()=>{alert('empezar ejercicio')}} key={e.id} style={styles.ejercicioItem}>
                                <Text style={styles.ejercicioNombre}>Ejercicio {index + 1}: {e.nombre}</Text>
                                <Text style={styles.ejercicioDetalle}>{e.series} series x {e.repeticiones} reps</Text>
                            </Pressable>
                        ))
                    }
                </View>
            </View>
            <View>
                <Pressable onPress={()=>{setModalFormRutina(true)}}>
                    <Text>Editar</Text>
                </Pressable>
                <Pressable>
                    <Text>Eliminar</Text>
                </Pressable>
            </View>

            <Modal
                visible={modalFormRutina}
                animationType="slide"
                onRequestClose={() => setModalFormRutina(false)}
            >
                <FormRutina 
                    rutinaSeleccionada={rutinaSeleccionada}
                    setModalFormRutina={setModalFormRutina}
                />
            </Modal>
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