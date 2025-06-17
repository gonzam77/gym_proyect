import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet, Modal, ScrollView, Alert } from "react-native";
import FormEjercicio from "./formEjercicio";
import Toast from "react-native-toast-message";
import Icon from 'react-native-vector-icons/Ionicons';

const FormRutina = ({rutinas, setRutinas, setModalFormRutina, rutinaSeleccionada,setRutinaSeleccionada}) => {
    const [modalFormEjercicio, setModalFormEjercicio] = useState(false);
    const [nuevaRutina, setNuevaRutina] = useState({
        id: '',
        nombre:'',
        ejercicios:[],
        estado: 0
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
            const rutinasActualizadas = rutinas.map(rutina => 
                rutina.id === rutinaSeleccionada?.id ? nuevaRutina : rutina
            );
            setRutinaSeleccionada(nuevaRutina);
            setRutinas(rutinasActualizadas);
        } else {
            setRutinas([
                ...rutinas,
                { ...nuevaRutina, id: Date.now() } 
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
                    style={[styles.iconButton,{alignItems:'center'}]}
                        onPress={()=>{
                            setNuevaRutina({
                                id: '',
                                nombre:'',
                                ejercicios:[]
                            });
                            setModalFormRutina(false)
                        }}
                    >
                        <Icon name="arrow-back-circle" size={50} color="#eefa07">
                        </Icon>
                            <Text style={{color:'#fff',textAlign:'center'}}>Salir</Text>
                    </Pressable>
                    <Pressable 
                        style={[styles.iconButton,{alignItems:'center'}]}
                        onPress={()=>{
                            Toast.show({
                                type: 'success',
                                text1: '¡Guardado con éxito!',
                                text2: 'Tu rutina fue guardada correctamente.',
                            });
                            setTimeout(() => {
                                handleGuardar();
                            }, "2000");
                        }}
                    >
                        <Icon name="save-sharp" size={40} color="#43d112" >
                        </Icon>
                            <Text style={{color:'#fff',textAlign:'center'}}>Guardar</Text>
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
                    <View style={styles.botonera}>
                        <Pressable 
                            style={[styles.iconButton, {
                                borderColor:'#43d112',
                                borderWidth:4,
                                flexDirection:'row',
                            }]}
                            onPress={()=>{
                                setModalFormEjercicio(!modalFormEjercicio)
                            }}
                        >
                            <Icon name="barbell-sharp" size={40} color="#43d112" />
                        </Pressable>
                    </View>

                    {
                        nuevaRutina.ejercicios.length ?
                        <Text style={styles.label}>Seleccione para eliminar</Text>: null
                    }

                    <View style={styles.listaEjercicios}>
                        {
                            nuevaRutina?.ejercicios?.map((e, index) => (
                            <Pressable key={e.id} style={styles.ejercicioItem} onPress={()=>{
                                console.log(e);
                                
                                Alert.alert(
                                    'Atencion',
                                    'Desea eliminar el ejericio?',
                                    [
                                       {text:'Cancelar'},
                                       {text:'Eliminar', onPress:()=>{eliminarEjercicio(e.id)}}
                                    ]
                                )    
                                
                            }}>
                                <View>
                                    <View>
                                        <Text style={styles.ejercicioNombre}>Ejercicio {index + 1}: {e.nombre}</Text>
                                        <Text style={styles.ejercicioDetalle}>{e.series} series x {e.repeticiones} reps</Text>
                                    </View>
                                    <View style={{alignSelf:'flex-end'}}>
                                        <Icon  name="trash" size={25} color="#ff4c4c" />
                                    </View>
                                </View>    
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
            <Toast />
        </ScrollView>
    );
};

export default FormRutina;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
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

});
