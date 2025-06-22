import { useEffect, useRef, useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet, Modal, ScrollView, Alert, Image, Animated } from "react-native";
import FormEjercicio from "./formEjercicio";
import Toast from "react-native-toast-message";
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import { agregarRutina } from '../store/rutinasSlice';
import { transform } from "typescript";

const FormRutina = ({setModalFormRutina, rutinaSeleccionada, setRutinaSeleccionada}) => {
    
    const rutinas = useSelector(state=> state.rutinas.rutinas);
    const dispatch = useDispatch();

    const scaleAnim = useRef(new Animated.Value(1)).current;
    
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

    const presionarIn = () => {
        Animated.spring(scaleAnim, {
        toValue: 0.90,
        useNativeDriver: true,
        }).start();
    };

    const presionarOut = () => {
        Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
        }).start();
    };

    const handleChange =(campo, valor) =>{
        setNuevaRutina({
            ...nuevaRutina,
            [campo]:valor
        });
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

        
        Toast.show({
            type: 'success',
            text1: '¡Guardado con éxito!',
            text2: 'Tu rutina fue guardada correctamente.',
        });
        setTimeout(() => {
            setModalFormRutina(false);
        }, "2000");
    };

  
    return (
        <ScrollView style={styles.container}>
            <View >
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
                        <Image style={{width:50,height:50}} source={require('../assets/img/volver.png')}></Image>
                        {/* <Icon name="arrow-back-circle" size={40} color="#eefa07"></Icon> */}
                        {/* <Text style={{color:'#fff',textAlign:'center'}}>Cancelar</Text> */}
                    </Pressable>
                    <Pressable 
                        style={[styles.iconButton,{alignItems:'center'}]}
                        onPress={()=>{
                            handleGuardar();
                        }}
                    >
                        <Image style={{width:60,height:60}} source={require('../assets/img/guardar.png')}></Image>
                        {/* <Icon name="save-sharp" size={35} color="#43d112" ></Icon> */}
                            {/* <Text style={{color:'#fff',textAlign:'center'}}>Guardar</Text> */}
                    </Pressable>


                </View>
                
                <Text style={styles.titulo}>
                    {rutinaSeleccionada?.id ? 'Editar Rutina' : 'Nueva Rutina'}
                </Text>
                
                <View style={styles.form}>
                    <Text style={styles.label}>Nombre de la rutina</Text>
                    <TextInput
                    style={styles.input}
                    value={nuevaRutina.nombre}
                    onChangeText={(valor)=>{handleChange('nombre',valor)}}
                    placeholder="Ej: Pecho, piernas, fullbody..."
                    placeholderTextColor="#888"
                    />
                    <View style={[styles.botonera,{flexDirection:'column'}]}>
                        <Pressable 
                            onPressIn={presionarIn}
                            onPressOut={presionarOut}
                            onPress={()=>{
                                setModalFormEjercicio(true)
                            }}
                        >
                            {/* <Icon name="barbell-sharp" size={30} color="#43d112" /> */}
                            <Animated.Image style={
                                {
                                    width:80,
                                    height:80,
                                    transform: [{ scale: scaleAnim }]
                                }} source={require('../assets/img/ejercicio.png')} />


                        </Pressable>
                            {/* <Text style={{color:'#fff',textAlign:'center', marginTop:5}}>Agregar</Text> */}
                    </View>

                    <View style={styles.listaEjercicios}>
                        {
                            nuevaRutina?.ejercicios?.map((e, index) => (
                                <Pressable key={e.id} style={styles.ejercicioItem} onPress={()=>{editarEjercicio(e.id)}}>
                                        <View style={{maxWidth:300}}>
                                            <Text style={styles.ejercicioNombre}>Ejercicio {index + 1}: {e.nombre}</Text>
                                            <Text style={styles.ejercicioDetalle}>{e.series} series x {e.repeticiones} reps</Text>
                                        </View>
                                        <View>
                                            <Icon  name="chevron-forward-outline" size={30} color="#fff" />
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
        marginVertical: 15,
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: "#111111",
        borderRadius: 10,
        padding: 15,
        marginVertical: 15,
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
        elevation: 5,
    },
    botonera: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

});
