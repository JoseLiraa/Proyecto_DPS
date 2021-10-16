import React from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import FormCrearCuenta from "../../components/FormCrearCuenta";
import Encabezado from "../../components/Encabezado";
import Pie from "../../components/Pie";

export default function App(props) {
  const { navigation } = props;
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Encabezado />
          <FormCrearCuenta />
          <Pie />
        </View>
        <Button
          title="Ir a proceso compra"
          onPress={() => navigation.navigate("formcompra")}
        ></Button>
        <Button
          title="Ir a pago"
          onPress={() => navigation.navigate("pago")}
        ></Button>
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
