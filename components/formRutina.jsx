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
    
    console.log('nuevaRutina', nuevaRutina);
    
    useEffect(()=>{
        console.log(nuevaRutina);

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

            {
                nuevaRutina?.ejercicios?.map(e=>{
                    console.log('Nuevo ejercicio', e);
                    
                    return(
                        <Text key={e.id} style={styles.label}>{e.nombre}</Text>
                    )
                })
            }

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
});
