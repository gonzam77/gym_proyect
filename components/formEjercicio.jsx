import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet, Alert } from "react-native";
import ejercicios from "../helpers/ejercicios";
import { Picker } from "@react-native-picker/picker";

const FormEjercicio = ({nuevaRutina, setNuevaRutina, setModalFormEjercicio, id}) => {
  const [errores, setErrores] = useState("");
  const listadoEjercicios = ejercicios;
  const [ejerciciosFiltrados, setEjerciciosFiltrados] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ejercicio, setEjercicio] = useState({
    nombre: "",
    series: 0,
    repeticiones: 0,
    peso: 0,
    descanso: 0,
  });

    useEffect(() => {
        if (selectedCategory) {
            const filtrados = listadoEjercicios.filter(
            (e) => e.categoria === selectedCategory
            );
            setEjerciciosFiltrados(filtrados);
        } else {
            setEjerciciosFiltrados([]);
        }

        // También reseteamos el ejercicio seleccionado cuando cambia la categoría
        setEjercicio((prev) => ({
            ...prev,
            id: "",
        }));

        if(id) {
          const selectedEjercicio = nuevaRutina.ejercicios.find(e=>e.id === id)
          if(selectedEjercicio){
            setEjercicio(selectedEjercicio)
          }
        }
    }, [selectedCategory, id]);


  const validarFormulario = () => {
    if (!selectedCategory) {
        setErrores("Debe seleccionar una categoría.");
        return false;
    };

    if (!ejercicio.id) {
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
        //alert("Ejercicio guardado con éxito");
        setNuevaRutina({
            ...nuevaRutina,
            ejercicios: [...nuevaRutina.ejercicios, ejercicio],
        });
        setModalFormEjercicio(false);
    } else {
      alert('Algo salio mal')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulario Ejercicio</Text>

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
                "Isquiotibiales", "Glúteos", "Aductores", "Gemelos", "Abdominales", "Lumbares", "Funcionales"
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
                  id: ejercicioSeleccionado.id,
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
                <Picker.Item key={ej.id} label={ej.nombre} value={ej.nombre} />
                )
            })}
          </Picker>
        </View>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.label}>Series</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={v => handleChange("series", v)}
        />

        <Text style={styles.label}>Repeticiones</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={v => handleChange("repeticiones", v)}
        />

        <Text style={styles.label}>Peso Estimado</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={v => handleChange("peso", v)}
        />

        <Text style={styles.label}>Descanso (minutos)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={v => handleChange("descanso", v)}
        />
      </View>

      {errores !== "" && <Text style={styles.error}>{errores}</Text>}

       <Pressable style={styles.btn} onPress={handleGuardar}>
        <Text style={styles.btnTexto}>Guardar Ejercicio</Text>
      </Pressable>

      <Pressable style={styles.btnCancelar} onPress={()=>setModalFormEjercicio(false)}>
        <Text style={styles.btnTexto}>Cancelar</Text>
      </Pressable>
     
    </View>
  );
};

export default FormEjercicio;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
    backgroundColor: "#373737",
    borderRadius: 10,
    marginBottom: 15,
  },
  picker: {
    color: "#fff",
  },
  btn: {
    backgroundColor: "#43d112",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
    elevation: 3,
  },
  btnCancelar: {
    backgroundColor: "#eefa07",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
    elevation: 3,
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});
