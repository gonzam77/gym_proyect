import { useState } from "react";
import { Modal, Pressable, Text, View, StyleSheet } from "react-native";
import Descanso from "./descanso";

const DetalleEjercicio = ({ ejercicio }) => {
  const [modalDescanso, setModalDescanso] = useState(false);
  const [serie, setSerie] = useState(1);
  const [estado, setEstado] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{ejercicio.nombre}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>
          Series: <Text style={styles.valor}>{ejercicio.series}</Text>
        </Text>
        <Text style={styles.label}>
          Repeticiones: <Text style={styles.valor}>{ejercicio.repeticiones}</Text>
        </Text>
        <Text style={styles.label}>
          Peso: <Text style={styles.valor}>{ejercicio.peso} kg</Text>
        </Text>
        <Text style={styles.label}>
          Descanso: <Text style={styles.valor}>{ejercicio.descanso} seg</Text>
        </Text>
        <Text style={styles.label}>
          Serie actual: <Text style={styles.valor}>{serie}</Text>
        </Text>
      </View>

      {
        estado ? (
          <Pressable
            style={styles.btnDescanso}
            onPress={() => {
              setModalDescanso(true);
              setEstado(false);
              setSerie(serie + 1);
            }}
          >
            <Text style={styles.btnTexto}>X Descanso</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.btn}
            onPress={() => setEstado(true)}
          >
            <Text style={styles.btnTexto}>Comenzar Serie</Text>
          </Pressable>
        )
      }

      <Modal visible={modalDescanso} animationType="slide">
        <Descanso
          descanso={ejercicio.descanso}
          serie={serie}
          setModalDescanso={setModalDescanso}
        />
      </Modal>
    </View>
  );
};

export default DetalleEjercicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    color: "#43d112",
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: "#1a1a1a",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    color: "#eefa07",
    fontWeight: "700",
    marginBottom: 10,
  },
  valor: {
    color: "#fff",
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#43d112",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignSelf: "center",
    elevation: 3,
  },
  btnDescanso: {
    backgroundColor: '#eefa07',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
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
