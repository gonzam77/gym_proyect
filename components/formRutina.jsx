import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet, Modal, ScrollView, Alert } from "react-native";
import FormEjercicio from "./formEjercicio";

const FormRutina = ({rutinas, setRutinas, setModalFormRutina, rutinaSeleccionada,setRutinaSelecionada}) => {
    const [modalFormEjercicio, setModalFormEjercicio] = useState(false);
    const [nuevaRutina, setNuevaRutina] = useState({
        id: '',
        nombre:'',
        ejercicios:[]
    })
    
    useEffect(() => {
        if (rutinaSeleccionada?.id) {
            setNuevaRutina(rutinaSeleccionada);
        }
    }, [rutinaSeleccionada]);

    const handleChange =(campo, valor) =>{
        setNuevaRutina({
            ...nuevaRutina,
            [campo]:valor
        });
    };

    const eliminarEjercicio = (id)=>{
        const ejerciciosFiltrados = nuevaRutina.ejercicios.filter(e=>e.id !== id)
        setNuevaRutina({
            ...nuevaRutina,
            ejercicios: ejerciciosFiltrados
        })
    }

    const handleGuardar = () => {
        if (rutinaSeleccionada?.id) {
            // Editar rutina existente
            const rutinasActualizadas = rutinas.map(rutina => 
                rutina.id === rutinaSeleccionada?.id ? nuevaRutina : rutina
            );
            setRutinaSelecionada(nuevaRutina);
            setRutinas(rutinasActualizadas);
            // setRutina(nuevaRutina);
        } else {
            // Crear nueva rutina con id único
            setRutinas([
                ...rutinas,
                { ...nuevaRutina, id: Date.now() } // aseguramos nuevo id
            ]);
        }
        setNuevaRutina({
                id: '',
                nombre:'',
                ejercicios:[]
        });

        setModalFormRutina(false);
    };

  
    return (
        <ScrollView style={styles.container}>

            <View >
                <Text style={styles.titulo}>
                    {rutinaSeleccionada?.id ? 'Editar Rutina' : 'Nueva Rutina'}
                </Text>

                <View style={styles.botonera}>
                    <Pressable 
                        style={styles.btnCancelar}
                        onPress={()=>{
                            setNuevaRutina({
                                id: '',
                                nombre:'',
                                ejercicios:[]
                            });
                            setModalFormRutina(false)
                        }}
                    >
                        <Text style={styles.btnTexto}>X Cancelar</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.btn}
                        onPress={()=>{
                            handleGuardar()
                        }}
                    >
                        <Text style={styles.btnTexto}>Guardar Rutina</Text>
                    </Pressable>


                </View>
                
                
                <View style={styles.form}>
                    <Text style={styles.label}>Nombre de la rutina</Text>
                    <TextInput
                    style={styles.input}
                    value={nuevaRutina.nombre}
                    onChangeText={(valor)=>{handleChange('nombre',valor)}}
                    placeholder="Ej: Día de pecho"
                    placeholderTextColor="#888"
                    />

                    <Pressable 
                        style={styles.btn}
                        onPress={()=>{
                            setModalFormEjercicio(!modalFormEjercicio)
                        }}
                    >
                            <Text style={styles.btnTexto}>+ Agregar Ejercicio</Text>
                    </Pressable>

                    <View style={styles.listaEjercicios}>
                        {
                            nuevaRutina?.ejercicios?.map((e, index) => (
                            <Pressable key={e.id} style={styles.ejercicioItem} onLongPress={()=>{
                                Alert.alert(
                                    'Eliminar',
                                    'Seguro que desea eliminar el ejercicio?',
                                    [
                                       { text:'Cancelar'}, {text:'Ok, Eliminar', onPress:()=>{eliminarEjercicio(e.id)}}
                                    ]
                                )    
                                
                            }}>
                                <Text style={styles.ejercicioNombre}>Ejercicio {index + 1}: {e.nombre}</Text>
                                <Text style={styles.ejercicioDetalle}>{e.series} series x {e.repeticiones} reps</Text>
                            </Pressable>
                            ))
                        }
                    </View>
                </View>

                
                <Modal
                    visible={modalFormEjercicio}
                    animationType="slide"
                    onRequestClose={() => setModalFormEjercicio(false)}
                >
                    <FormEjercicio 
                        nuevaRutina={nuevaRutina}
                        setNuevaRutina={setNuevaRutina}
                        modalFormEjercicio={modalFormEjercicio}
                        setModalFormEjercicio={setModalFormEjercicio}
                    /> 
                </Modal>
            </View>
        </ScrollView>
    );
};

export default FormRutina;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
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

});
