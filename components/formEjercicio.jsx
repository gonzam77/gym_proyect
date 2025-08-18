import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet, Image, ScrollView, Alert } from "react-native";
import ejercicios from "../helpers/ejercicios";
import { Picker } from "@react-native-picker/picker";
import Icon from 'react-native-vector-icons/Ionicons'; // o MaterialIcons si preferís
 
const FormEjercicio = ({nuevaRutina, setNuevaRutina, setModalFormEjercicio, ejercicioSeleccionado, setEjercicioSeleccionado}) => {
  const listadoEjercicios = ejercicios;
  const [ejerciciosFiltrados, setEjerciciosFiltrados] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [errores, setErrores] = useState("");
  const [ejercicio, setEjercicio] = useState({
    id: Date.now(),
    nombre: "",
    series: "",
    repeticiones: "",
    peso: "",
    descanso: "",
    idEjercicio:"",
    seriesRealizadas:0
  });

  useEffect(() => {
    if (ejercicioSeleccionado) {
      const seleccionado = nuevaRutina.ejercicios.find(e => e.id === ejercicioSeleccionado);
      if (seleccionado) {
        setEjercicio(seleccionado);
        const categoria = listadoEjercicios.find(
          e => e.idEjercicio === seleccionado.idEjercicio
        )?.categoria;
        if (categoria) {
          setSelectedCategory(categoria);
        }
      }
    }
  }, [ejercicioSeleccionado]);

  useEffect(() => {
    if (selectedCategory) {
      setEjerciciosFiltrados(
        listadoEjercicios.filter(e => e.categoria === selectedCategory)
      );
    } else {
      setEjerciciosFiltrados([]);
    }
  }, [selectedCategory]);

  const eliminarEjercicio = ()=>{
    Alert.alert(
      'Eliminar',
      'Desea eliminar el ejercicio?',
      [{text:'Cancelar'}, {text:'Ok, Elimnar', onPress:()=>{
        setNuevaRutina({
            ...nuevaRutina,
            ejercicios: nuevaRutina.ejercicios.filter(e => e.id !== ejercicio.id)
        })
        setModalFormEjercicio(false);
      }}]
    )
        
  };

  const validarFormulario = () => {   
    if (!selectedCategory) {
        setErrores("Debe seleccionar una categoría.");
        return false;
    };
    if (!ejercicio.idEjercicio) {
        setErrores("Debe seleccionar un ejercicio.");
        return false;
    };
    if (
        !ejercicio.series || ejercicio.series <= 0 ||
        !ejercicio.repeticiones || ejercicio.repeticiones <= 0 ||
        !ejercicio.peso || ejercicio.peso <= 0 ||
        !ejercicio.descanso || ejercicio.descanso <= 0
    ) {
        setErrores("Todos los campos deben ser mayores a cero.");
        return false;
    };
    setErrores("");
    return true;
  };

  const handleChange = (campo, valor) => {
    if(campo === 'nombre')  {
      setEjercicio(prev => ({
            ...prev,
            [campo]: valor
      }));
    } else {
      setEjercicio(prev => ({
            ...prev,
            [campo]: valor === "" ? "" : Number(valor),
      }));
    }
  };

  const handleGuardar = () => {
    if (validarFormulario()) {
      if(ejercicioSeleccionado){
        setNuevaRutina({
          ...nuevaRutina,
          ejercicios: nuevaRutina.ejercicios.map(e => e.id !== ejercicioSeleccionado ? e : ejercicio)
        })
      } else {
        setNuevaRutina({
              ...nuevaRutina,
              ejercicios: [...nuevaRutina.ejercicios, ejercicio],
          });
      }   
      setModalFormEjercicio(false);
      setEjercicioSeleccionado(null)
    } else {
      alert(errores)
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.botonera}>
        <Pressable 
          style={[styles.iconButton,{alignItems:'center'}]} 
          onPress={()=>{
            setEjercicioSeleccionado(null);
            setModalFormEjercicio(false);
          }}
        >
          <Image style={{width:50,height:50}} source={require('../assets/img/volver.png')}></Image>
          {/* <Icon name="arrow-back-circle" size={40} color="#eefa07" /> */}
          {/* <Text style={{color:'#fff',textAlign:'center'}}>Cancelar</Text> */}
        </Pressable>
        {
          ejercicioSeleccionado ?
            <Pressable style={[styles.iconButton,{alignItems:'center'}]} onPress={()=>{
              eliminarEjercicio();
              }}>
              
              <Image style={{width:50,height:50}} source={require('../assets/img/eliminar.png')}></Image>
              {/* <Icon name="trash" size={35} color="#ff4c4c" /> */}
              {/* <Text style={{color:'#fff',textAlign:'center'}}>Eliminar</Text> */}
            </Pressable>
          :null
        }
        <Pressable style={[styles.iconButton,{alignItems:'center'}]} onPress={handleGuardar}>
                        <Image style={{width:60,height:60}} source={require('../assets/img/guardar.png')}></Image>

          {/* <Icon name="save-sharp" size={35} color="#43d112" /> */}
          {/* <Text style={{color:'#fff',textAlign:'center'}}>Guardar</Text> */}
        </Pressable>
      </View>
      <Text style={styles.titulo}>Personalizar Ejercicio</Text>
      <View style={styles.seccion}>
        <Text style={styles.label}>Categoría</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedCategory}
            dropdownIconColor="#fff"
            onValueChange={valor => setSelectedCategory(valor)}
            style={styles.picker}
          >
            <Picker.Item label="--Seleccione Categoria--" value="" />
           {[
                "Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps", "Antebrazos", "Cuádriceps",
                "Isquiotibiales", "Glúteos", "Aductores", "Gemelos", "Abdominales", "Lumbares"
            ].map(c => {
                const valorSinAcentos = c
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, ""); // elimina los acentos
                return (
                    <Picker.Item key={valorSinAcentos} label={c} value={valorSinAcentos} />
                );
            })}
          </Picker>
        </View>
      </View>
      <View style={styles.seccion}>
        <Text style={styles.label}>Ejercicio</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={ejercicio.nombre}
            dropdownIconColor="#fff"
            onValueChange={valor => {
              const ejercicioSeleccionado = ejerciciosFiltrados.find(e => e.nombre === valor);
              if (ejercicioSeleccionado) {
                setEjercicio(prev => ({
                  ...prev,
                  idEjercicio: ejercicioSeleccionado.idEjercicio,
                  nombre: ejercicioSeleccionado.nombre
                }));
              } else {
                setEjercicio(prev => ({
                  ...prev,
                  id: "",
                  nombre: ""
                }));
              }
            }}
            style={styles.picker}
          >
            <Picker.Item label="--Seleccione Ejercicio--" value="" />
            {ejerciciosFiltrados
              ?.filter(e => e.categoria === selectedCategory)
              ?.sort((a, b) => a.nombre.localeCompare(b.nombre))
              ?.map(ej => {
                return(
                <Picker.Item key={ej.idEjercicio} label={ej.nombre} value={ej.nombre} />
                )
            })}
          </Picker>
        </View>
      </View>
      <View style={styles.seccion}>
        <Text style={styles.label}>Series</Text>
        <TextInput
          value={ejercicio.series.toString()}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={v => handleChange("series", v)}
          />
        <Text style={styles.label}>Repeticiones</Text>
        <TextInput
          value={ejercicio.repeticiones.toString()}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={v => handleChange("repeticiones", v)}
          />
        <Text style={styles.label}>Peso Estimado (Kgs)</Text>
        <TextInput
          value={ejercicio.peso.toString()}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={v => handleChange("peso", v)}
          />
        <Text style={styles.label}>Descanso</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            style={styles.picker}
            selectedValue={ejercicio.descanso.toString()}
            dropdownIconColor="#fff"
            onValueChange={v => handleChange("descanso", v)}
          >
            <Picker.Item label="--Minutos de descanso--" value=''></Picker.Item>
            <Picker.Item label="1 Min" value='1'></Picker.Item>
            <Picker.Item label="2 Min" value='2'></Picker.Item>
            <Picker.Item label="3 Min" value='3'></Picker.Item>
            <Picker.Item label="4 Min" value='4'></Picker.Item>
            <Picker.Item label="5 Min" value='5'></Picker.Item>
            <Picker.Item label="6 Min" value='6'></Picker.Item>
            <Picker.Item label="7 Min" value='7'></Picker.Item>
            <Picker.Item label="8 Min" value='8'></Picker.Item>
            <Picker.Item label="9 Min" value='9'></Picker.Item>
            <Picker.Item label="10 Min" value='10'></Picker.Item>
          </Picker>
        </View>
      </View>
      {errores !== "" && <Text style={styles.error}>{errores}</Text>}
    </ScrollView>
  );
};

export default FormEjercicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#43d112",
    marginBottom: 25,
    textAlign: "center",
  },
  seccion: {
    marginBottom: 20,
  },
  label: {
    color: "#eefa07",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  pickerWrapper: {
    backgroundColor: "#111111",
    borderRadius: 10,
    marginBottom: 15,
  },
  picker: {
    color: "#fff",
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
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
    marginBottom: 20,
  },
});
