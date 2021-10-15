import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Pie = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.margines}>
          <Text style={styles.info}> Contáctanos </Text>
          <View style={styles.info2}>
            <FontAwesome name="phone" size={16} color="white" />
          </View>
          <Text style={styles.info3}> 2294-1771 </Text>
          <Text style={styles.info4}>compras@simatic.com.sv</Text>
          <View style={styles.info5}>
            <Entypo name="mail" size={15} color="white" />
          </View>
          <View style={styles.info6}>
            <Text style={{ fontSize: 10, marginTop: 10, color: "white" }}>
              Copyright© por SIMATIC.
            </Text>
            <Text style={{ fontSize: 10, marginTop: 0, color: "white" }}>
              Todos los derechos reservados
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#715cbb",
    marginVertical: 48,
    paddingTop: 35,
    paddingBottom: 20,
    justifyContent: "flex-end",
  },
  margenes:{
    marginLeft:"5%",
  },
  texto1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "30%",
  },
  texto2: {
    color: "white",
    marginLeft: "35%",
  },

  info: {
    color: "white",
    marginVertical: -10,
    fontSize: 11,
  },
  info2: {
    color: "#fff",
    marginHorizontal: 95,
    marginVertical: -8,
  },
  info6: {
    alignItems: "flex-end",
    marginHorizontal: 30,
  },
  info5: {
    color: "#fff",
    marginHorizontal: 95,
    marginVertical: -22,
  },
  info3: {
    color: "#fff",
    marginHorizontal: 110,
    marginVertical: -5,
    fontSize: 11,
  },
  info4: {
    color: "#fff",
    marginHorizontal: 115,
    marginVertical: 8,
    fontSize: 11,
  },
});

export default Pie;
