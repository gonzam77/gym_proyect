import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet, Modal } from "react-native";
import FormEjercicio from "./formEjercicio";

const FormRutina = ({rutina, setRutina, rutinas, setRutinas, setModalVisible}) => {
    const [modalFormEjercicio, setModalFormEjercicio] = useState(false);
    const [nuevaRutina, setNuevaRutina] = useState({
        id: Date.now(),
        nombre:'',
        ejercicios:[]
    })
    
    useEffect(()=>{
        console.log('Rutina a guardar', nuevaRutina);
    },[nuevaRutina])

    const handleChange =(campo, valor) =>{
        setNuevaRutina({
            ...nuevaRutina,
            [campo]:valor
        });
    };

    const handleGuardar = ()=>{
        
        setRutinas([
            ...rutinas,
            nuevaRutina
        ]);
        setModalVisible(false);
    }
  
    return (
        <View style={styles.container}>
        <Text style={styles.titulo}>Nueva Rutina</Text>

        <View style={styles.form}>
            <Text style={styles.label}>Nombre de la rutina</Text>
            <TextInput
            style={styles.input}
            value={nuevaRutina.nombre}
            onChangeText={(valor)=>{handleChange('nombre',valor)}}
            placeholder="Ej: Día de pecho"
            placeholderTextColor="#888"
            />

            <View style={styles.listaEjercicios}>
                {
                    nuevaRutina?.ejercicios?.map((e, index) => (
                    <Pressable key={e.id} style={styles.ejercicioItem}>
                        <Text style={styles.ejercicioNombre}>Ejercicio {index + 1}: {e.nombre}</Text>
                        <Text style={styles.ejercicioDetalle}>{e.series} series x {e.repeticiones} reps</Text>
                    </Pressable>
                    ))
                }
            </View>
        </View>

        <Pressable 
            style={styles.btn}
            onPress={()=>{
                setModalFormEjercicio(!modalFormEjercicio)
            }}
        >
                <Text style={styles.btnTexto}>+ Agregar Ejercicio</Text>
        </Pressable>
        
        <Pressable 
            style={styles.btn}
            onPress={()=>{
                handleGuardar()
            }}
        >
                <Text style={styles.btnTexto}>Guardar Rutina</Text>
        </Pressable>
        <Pressable 
            style={styles.btnCancelar}
            onPress={()=>{
                setModalVisible(false)
            }}
        >
                <Text style={styles.btnTexto}>X Cancelar</Text>
        </Pressable>

        {
            
            modalFormEjercicio?
            <Modal>
                <FormEjercicio 
                    nuevaRutina={nuevaRutina}
                    setNuevaRutina={setNuevaRutina}
                    modalFormEjercicio={modalFormEjercicio}
                    setModalFormEjercicio={setModalFormEjercicio}
                /> 
            </Modal>
            : null
        }
        </View>
    );
};

export default FormRutina;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
    marginBottom: 30,
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "center",
    elevation: 3,
  },
  btnCancelar: {
    backgroundColor: "#eefa07",
    borderRadius: 30,
    marginVertical:15,
    paddingVertical: 12,
    paddingHorizontal: 20,
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
