import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Card } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import Footer from "./Footer";

export default function Pago() {
  return (
    <>
      <ScrollView>
        <Footer />
        <View>
          <View>
            <Text style={styles.TextForm}> PROCESO DE PAGO </Text>
          </View>
          <Card style={styles.cardcolor}>
            <View>
              <MaterialIcons name="payment" size={25}>
                {" "}
                <Text style={styles.text}>Método de pago</Text>{" "}
              </MaterialIcons>
              <Card.Divider />
              <TextInput
                placeholder="Nombre del titular de la tarjeta"
                keyboardType="varchar"
                style={[styles.input, styles.inputTabs]}
              />
              <Text style={styles.cardtext}>
                *Ingrese el numero de la tarjeta sin guiones
              </Text>
              <TextInput
                placeholder="Numero de la tarjeta"
                keyboardType="numeric"
                style={[styles.input, styles.inputTabs]}
              />
              <TextInput
                placeholder="Código de verificación(CVV)"
                keyboardType="numeric"
                style={[styles.input, styles.inputTabs]}
              />
              <Text style={styles.cardtext}>
                *Fecha de vencimiento de la tarjeta
              </Text>

              <RNPickerSelect
                style={picketSelectStyles}
                placeholder={{ label: "Mes", value: null }}
                items={[
                  { label: "Enero", value: 1 },
                  { label: "Febrero", value: 2 },
                  { label: "Marzo", value: 3 },
                  { label: "Abril", value: 4 },
                  { label: "Mayo", value: 5 },
                  { label: "Junio", value: 6 },
                  { label: "Julio", value: 7 },
                  { label: "Agosto", value: 8 },
                  { label: "Septiembre", value: 9 },
                  { label: "Octubre", value: 10 },
                  { label: "Noviembre", value: 11 },
                  { label: "Diciembre", value: 12 },
                ]}
              />
            </View>
          </Card>
          <View style={styles.viewInputs}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Su transacción se ha generado correctamente")
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>Pagar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Alert.alert("Su pago ha sido cancelado")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    padding: 35,
  },
  cardcolor: {
    backgroundColor: "red",
  },
  cardtext: {
    color: "red",
    fontSize: 12,
    textAlign: "center",
    paddingVertical: 0,
  },
  button: {
    backgroundColor: "#5840B0",
    padding: 9,
    borderRadius: 10,
    margin: 10,
    width: "45%",
  },
  viewInputs: {
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
  },
});

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#5840B0",
    borderRadius: 4,
    color: "#000",
    paddingRight: 30,
    backgroundColor: "#fff",
    marginLeft: 13,
    marginRight: -5,
    width: "90%",
  },
  inputAndroid: {
    height: 60,
    fontSize: 16,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#5840B0",
    borderRadius: 5,
    color: "#000",
    paddingRight: 294,
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: 5,
  },

  inputWeb: {
    height: 60,
    fontSize: 16,
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#5840B0",
    borderRadius: 5,
    color: "#000",
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: 14,
    marginRight: 5,
  },
});
