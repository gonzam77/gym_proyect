import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

// En esta pantalla se va a abrir el modal del tiempo de descanso

const Ejercicio = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Sentadillas</Text>

      <View style={styles.info}>
        <Text style={styles.subtitulo}>Serie 2 de 3</Text>
      </View>

      <View style={styles.datos}>
        <Text style={styles.datoTexto}>Repeticiones: 10</Text>
        <Text style={styles.datoTexto}>Peso: 80 kg</Text>
      </View>

      <Pressable style={styles.btnSecundario}>
        <Text style={styles.btnTextoSecundario}>Iniciar Descanso</Text>
      </Pressable>

      <Pressable style={styles.btnPrimario}>
        <Text style={styles.btnTextoPrimario}>Terminar Ejercicio</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Ejercicio;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingVertical: 40,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  titulo: {
    textAlign: "center",
    color: "#43d112",
    fontSize: 36,
    fontWeight: "900",
    marginBottom: 20,
  },
  info: {
    marginBottom: 20,
  },
  subtitulo: {
    color: "#eefa07",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  datos: {
    marginBottom: 30,
  },
  datoTexto: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  btnSecundario: {
    backgroundColor: "#1e1e1e",
    borderRadius: 30,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 2,
  },
  btnTextoSecundario: {
    textAlign: "center",
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
  btnPrimario: {
    backgroundColor: "#43d112",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 3,
  },
  btnTextoPrimario: {
    textAlign: "center",
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
  },
});
