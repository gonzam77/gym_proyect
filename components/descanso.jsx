import { Pressable, StyleSheet, Text, View } from "react-native";

const Descanso = ({setModalDescanso}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>DESCANSO</Text>

      <View style={styles.tiempoContainer}>
        <Text style={styles.tiempoTexto}>Tiempo Restante:</Text>
        <Text style={styles.tiempo}>1:30</Text>
      </View>

      <Pressable style={styles.btn} onPress={()=>{setModalDescanso(false)}}>
        <Text style={styles.btnTexto}>Saltar Descanso</Text>
      </Pressable>
    </View>
  );
};

export default Descanso;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: "900",
    color: "#43d112",
    marginBottom: 40,
    textAlign: "center",
  },
  tiempoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  tiempoTexto: {
    color: "#eefa07",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  tiempo: {
    fontSize: 50,
    color: "#ffffff",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#43d112",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 3,
  },
  btnTexto: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
});
