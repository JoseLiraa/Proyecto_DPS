import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "../assets/Utils/colors";
import Footercat from "./Footercat";

export default function Categorias(props) {
  const { navigation } = props;

  return (
    <>
      <ScrollView>
        <Footercat />
        <View style={styles.contenedor2}>
          <Text style={styles.titulo}>CATEGORIAS</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("multifuncionales")}
              style={styles.button}
            >
              <View style={styles.series}>
                <Image
                  style={styles.equi2}
                  source={require("../src/img/impr.png")}
                />
                <Text style={styles.texto}>
                  MULTIFUNCIONALES Y CARTUCHOS DE TINTA
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineas}></View>

            <TouchableOpacity
              onPress={() => navigation.navigate("memoriasUSB")}
              style={styles.button}
            >
              <View style={styles.series1}>
                <Image
                  style={styles.equi1}
                  source={require("../src/img/usb.png")}
                />
                <Text style={styles.texto1}>MEMORIAS USB</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineas}></View>

            <TouchableOpacity
              onPress={() => navigation.navigate("accesoriosComp")}
              style={styles.button}
            >
              <View style={styles.series3}>
                <Image
                  style={styles.equi2}
                  source={require("../src/img/pc.png")}
                />
                <Text style={styles.texto}>ACCESORIOS DE COMPUTADORAS</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineas}></View>
          </View>
        </View>
        <View style={styles.item1}></View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 100,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: "100%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 30,
    paddingTop: 47,
    textAlign: "center",
  },
  series: {
    backgroundColor: "#CBD0FF",
    marginTop: "2%",
    marginLeft: "5%",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 200,
    width: 320,
    borderRadius: 10,
  },
  series3: {
    backgroundColor: "#DADDDF",
    marginTop: "3%",
    marginLeft: "5%",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 200,
    width: 320,
    borderRadius: 10,
  },
  equi1: {
    width: 230,
    height: 195,
    marginLeft: 65,
    marginTop: 22,
  },
  equi2: {
    width: 230,
    height: 155,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
  },
  series1: {
    backgroundColor: "#CEE6ED",
    marginTop: "3%",
    marginLeft: "5%",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 200,
    width: 320,
    borderRadius: 10,
  },
  texto: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 2,
    marginLeft: "auto",
    marginRight: "auto",
  },
  texto1: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: -55,
    marginLeft: "auto",
    marginRight: "auto",
  },
  item1: {
    flex: 1,
    marginVertical: 50,
    borderColor: '#000000',
    margin: 80,
    flexDirection: 'column',
    borderRadius: 12,
  },
});
