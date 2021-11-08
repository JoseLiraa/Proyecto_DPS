import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import Encabezado from "../../components/Encabezado";
import { FontAwesome } from "@expo/vector-icons";
import Pie from "../../components/Pie";

export default function login(props) {
  const { navigation } = props;

  return (
    <>
    <ScrollView>
    <Encabezado />
      <Text style={styles.titulo}>RESTABLECE TU CONTRASEÑA</Text>

      <Card>
        <View>
        <Image
                  style={styles.equi2}
                  source={require("../img/cerrar-con-llave.png")}
                />
        <Text>
        Por favor ingresa tu correo y enseguida se enviará un enlace para recuperar tu contraseña
        </Text>
          <TextInput
            placeholder="*Correo electrónico"
            style={[styles.input, styles.inputTabs]}
          />
        </View>

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("categorias")}
        >
          <Text style={styles.buttonText}>Enviar</Text>
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
    marginTop: 15,
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
  equi2: {
    width: 230,
    height: 170,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
    marginBottom: 15,
  },
});
