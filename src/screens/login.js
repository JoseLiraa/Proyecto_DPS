import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import FooterLogin from "../../components/FooterLogin";
import { FontAwesome } from "@expo/vector-icons";
import Pie from "../../components/Pie";

export default function login(props) {
  const { navigation } = props;

  return (
    <>
    <ScrollView>
      <FooterLogin />
      <Text style={styles.titulo}>INICIO DE SESIÓN</Text>

      <Card>
        <View>
          <TextInput
            placeholder="*Correo electrónico"
            style={[styles.input, styles.inputTabs]}
          />

          <TextInput
            placeholder="*Contraseña"
            style={[styles.input, styles.inputTabs]}
            secureTextEntry
          />

          <Text style={styles.sub}>¿Olvidaste tu contraseña?</Text>
        </View>

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("categorias")}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Iniciando con Gmail")} style={styles.button}>
          <Text style={styles.buttonText}>
            <FontAwesome name="google" size={15} color="white" />
            Iniciar con gmail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("crearcuenta")}
          style={styles.button1}
        >
          <Text style={styles.buttonText1}>Crear Cuenta</Text>
        </TouchableOpacity>
      </Card>
      <Pie />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    marginTop: 60,
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#5840B0",
    borderRadius: 5,
    width: "60%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
    marginTop: 25,
  },
  inputTabs: {
    width: "90%",
    marginLeft: 15,
  },
  sub: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    marginTop: 25,
  },
  button: {
    backgroundColor: "#5840B0",
    padding: 9,
    borderRadius: 10,
    margin: 10,
    width: "45%",
    marginTop: 19,
    marginHorizontal: 82,
  },
  button1: {
    backgroundColor: "#EDE6E6",
    padding: 9,
    borderRadius: 10,
    margin: 10,
    width: "45%",
    marginTop: 8,
    marginHorizontal: 82,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
  buttonText1: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
  },
  item1: {
    flex: 1,
    marginVertical: 75,
    borderWidth: 0.8,
    borderColor: '#000000',
    margin: 80,
    flexDirection: 'column',
    borderRadius: 12,
  },
});
