import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet, Modal, ScrollView, Alert } from "react-native";
import FormEjercicio from "./formEjercicio";
import Toast from "react-native-toast-message";
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import { agregarRutina, modificarEjercicio, eliminarEjercicio, eliminarRutina } from '../store/rutinasSlice';

const FormRutina = ({setModalFormRutina, rutinaSeleccionada, setRutinaSeleccionada}) => {
    
    const rutinas = useSelector(state=> state.rutinas.rutinas);
    const dispatch = useDispatch();
    
    const [modalFormEjercicio, setModalFormEjercicio] = useState(false);
    const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState();
    const [nuevaRutina, setNuevaRutina] = useState({
        id: '',
        nombre:'',
        ejercicios:[],
        estado: 0
    })
    
     useEffect(() => {
        if (rutinaSeleccionada?.id) {
            setNuevaRutina(rutinaSeleccionada);
        } else {
            setNuevaRutina({
                id: '',
                nombre: '',
                ejercicios: [],
                estado: 0
            });
        }
    }, [rutinaSeleccionada]);

    const handleChange =(campo, valor) =>{
        setNuevaRutina({
            ...nuevaRutina,
            [campo]:valor
        });
    };

    const eliminarEjercicio = (id)=>{
        setNuevaRutina({
            ...nuevaRutina,
            ejercicios: nuevaRutina.ejercicios.filter(e => e.id !== id)
        })
    };

    const editarEjercicio = (id)=>{
        setEjercicioSeleccionado(id);
        setModalFormEjercicio(true);
    }


    const handleGuardar = () => {
        if (!nuevaRutina.nombre.trim()) {
            Alert.alert('Error', 'El nombre de la rutina es obligatorio.');
            return;
        }

        if (rutinaSeleccionada?.id) {
            // Actualizar rutina existente
            dispatch({
                type: 'rutinas/setRutinas',
                payload: rutinas.map(rutina => 
                    rutina.id === rutinaSeleccionada.id ? nuevaRutina : rutina
                )
            });
            setRutinaSeleccionada(nuevaRutina);
        } else {
            // Agregar nueva rutina con id único
            dispatch(agregarRutina({ ...nuevaRutina, id: Date.now() }));
        }

        setNuevaRutina({
            id: '',
            nombre: '',
            ejercicios: [],
            estado: 0
        });

        setModalFormRutina(false);
        Toast.show({
            type: 'success',
            text1: '¡Guardado con éxito!',
            text2: 'Tu rutina fue guardada correctamente.',
        });
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
                    <View style={[styles.botonera,{flexDirection:'column'}]}>
                        <Pressable 
                            style={[styles.iconButton, {
                                borderColor:'#43d112',
                                borderWidth:4,
                                alignItems:'center'
                            }]}
                            onPress={()=>{
                                setModalFormEjercicio(true)
                            }}
                        >
                            <Icon name="barbell-sharp" size={30} color="#43d112" />

                        </Pressable>
                            <Text style={{color:'#fff',textAlign:'center', marginTop:10}}>Agregar</Text>
                    </View>

                    <View style={styles.listaEjercicios}>
                        {
                            nuevaRutina?.ejercicios?.map((e, index) => (
                                <View
                                    key={e.id} 
                                    style={styles.ejercicioItem} 
                                >
                                    <View>
                                        <Text style={styles.ejercicioNombre}>Ejercicio {index + 1}: {e.nombre}</Text>
                                        <Text style={styles.ejercicioDetalle}>{e.series} series x {e.repeticiones} reps</Text>
                                    </View>
                                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                                        <Pressable 
                                            style={{alignItems:'center'}}
                                            onPress={()=>{
                                                editarEjercicio(e.id);
                                            }}
                                        >
                                            <Icon  name="create" size={25} color="#eff306" />
                                            <Text style={{color:'#fff',textAlign:'center'}}>Editar</Text>
                                        </Pressable>
                                        <Pressable
                                            style={{alignItems:'center'}}
                                            onPress={()=>{
                                                Alert.alert(
                                                    'Eliminar',
                                                    'Desea eliminar el ejercicio?',
                                                    [{text:'Cancelar'}, {text:'Ok, Eliminar', onPress:()=>{
                                                        eliminarEjercicio(e.id);
                                                    }}]
                                                )
                                            }}
                                        >
                                            <Icon  name="trash" size={23} color="#ff4c4c" />
                                            <Text style={{color:'#fff',textAlign:'center'}}>Eliminar</Text>
                                        </Pressable>
                                    </View>
                                </View>    
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
                        ejercicioSeleccionado={ejercicioSeleccionado}
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
        fontSize: 30,
        fontWeight: "900",
        color: "#43d112",
        textAlign: "center",
        marginBottom: 30,
    },
    form: {
        marginVertical: 10,
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
        marginTop: 10,
        marginBottom: 30,
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
    },

});
