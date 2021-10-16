import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Encabezado from "../../components/Encabezado";
import Pie from "../../components/Pie";
import ArticulosCarrito from "../../components/ArticulosCarrito";

export default function Carrito() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Encabezado />
        <ArticulosCarrito/>
        <Pie />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
