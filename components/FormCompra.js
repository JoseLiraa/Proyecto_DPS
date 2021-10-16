import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Card } from "react-native-elements";
import Footer from "./Footer";
import Pie from "./Pie";
import Pago from "./Pago";

export default function FormCompra() {
  return (
    <>
      <ScrollView>
        <Footer />

        <View>
          <View>
            <Text style={styles.TextForm}> PROCESO DE COMPRA </Text>
          </View>
          <Card>
            <View>
              <Entypo name="location" size={25}>
                {" "}
                <Text style={styles.text}>Dirección de entrega</Text>{" "}
              </Entypo>
              <Card.Divider />
              <TextInput
                placeholder="Nombres"
                keyboardType="varchar"
                style={[styles.input, styles.inputTabs]}
              />
              <TextInput
                placeholder="Apellidos"
                keyboardType="varchar"
                style={[styles.input, styles.inputTabs]}
              />
              <TextInput
                placeholder="Telefono"
                keyboardType="numeric"
                style={[styles.input, styles.inputTabs]}
              />
              <TextInput
                placeholder="Dirección"
                keyboardType="varchar"
                style={[styles.input, styles.inputTabs]}
              />

              <TextInput
                placeholder="Departamento"
                keyboardType="varchar"
                style={[styles.input, styles.inputTabs]}
              />
              <TextInput
                placeholder="Municipio"
                keyboardType="varchar"
                style={[styles.input, styles.inputTabs]}
              />
            </View>
          </Card>
          <TouchableOpacity
            onPress={() => Alert.alert("Información guardada correctamente")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Continuar con el pago</Text>
          </TouchableOpacity>
        </View>
        <Pie />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
  },
  inputTabs: {
    width: "90%",
    marginLeft: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 45,
    textAlign: "left",
  },
  TextForm: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 25,
    textAlign: "center",
    padding: 25,
  },
  button: {
    backgroundColor: "#5840B0",
    padding: 9,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
  },
});
