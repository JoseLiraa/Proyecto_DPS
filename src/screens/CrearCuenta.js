import React from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import FormCrearCuenta from "../../components/FormCrearCuenta";
import Encabezado from "../../components/Encabezado";
import Pie from "../../components/Pie";

export default function CrearCuenta(props) {
  const { navegation } = props;

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Encabezado />
          <FormCrearCuenta />
          <Pie />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
