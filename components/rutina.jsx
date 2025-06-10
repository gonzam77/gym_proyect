import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Rutina = () => {
  const ejercicios = [
    "SENTADILLA 3X10",
    "PRESS DE BANCA 4X8",
    "REMO CON BARRA 3X12",
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>GYM APP</Text>

      <View style={styles.info}>
        <Text style={styles.dia}>DÍA: 1</Text>
        <Text style={styles.rutina}>RUTINA: PECHO + HOMBROS + TRÍCEPS</Text>
      </View>

      <Text style={styles.subtitulo}>EJERCICIOS DEL DÍA</Text>

      {ejercicios.map((ejercicio, index) => (
        <Pressable key={index} style={styles.ejercicioItem}>
          <Text style={styles.ejercicioTexto}>{ejercicio}</Text>
        </Pressable>
      ))}

      <Pressable style={styles.btn}>
        <Text style={styles.btnTexto}>+ Agregar Ejercicio</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Rutina;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  titulo: {
    textAlign: "center",
    color: "#43d112",
    fontSize: 40,
    fontWeight: "900",
    marginBottom: 30,
  },
  info: {
    marginBottom: 30,
  },
  dia: {
    color: "#eefa07",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 5,
  },
  rutina: {
    color: "#43d112",
    fontSize: 20,
    fontWeight: "800",
  },
  subtitulo: {
    color: "#eefa07",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 20,
    textAlign: "center",
  },
  ejercicioItem: {
    backgroundColor: "#1e1e1e",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  ejercicioTexto: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#43d112",
    borderRadius: 30,
    marginTop: 30,
    marginHorizontal: 40,
    paddingVertical: 12,
    elevation: 3,
  },
  btnTexto: {
    textAlign: "center",
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
});
