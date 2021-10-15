import React from "react";
import { View, Text } from "react-native";
import Encabezado from "../../components/Encabezado";
import Pie from "../../components/Pie";
export default function Carrito() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Encabezado />
        <Pie />
      </View>
      <Button
        title="Ir a Carrito"
        onPress={() => navigation.navigate("carrito")}
      ></Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
