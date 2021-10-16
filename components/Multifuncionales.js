import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import colors from "../assets/Utils/colors";
import Footer from "../components/Footer";

export default function App() {
  return (
    <>
      <ScrollView>
        <Footer />
        <Text style={styles.textaccesorios}>
          MULTIFUNCIONALES Y CARTUCHOS DE TINTA
        </Text>

        <View style={styles.item}>
          <Image style={styles.img} source={require("../src/img/canon.jpg")} />
          <Text style={styles.texto}>
            Impresora PIXMA E402 Multifuncional de Inyección de Tinta
          </Text>
          <Text style={styles.precio}>$44.00</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Producto agregado correctamente")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item1}>
          <Image
            style={styles.img}
            source={require("../src/img/hpadvantage2375.jpg")}
          />
          <Text style={styles.texto}>
            Impresora multifuncional HP Deskjet INK Advantage 2375
          </Text>
          <Text style={styles.precio}>$39.90</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Producto agregado correctamente")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image
            style={styles.img}
            source={require("../src/img/EpsonEcoTankL6171.jpg")}
          />
          <Text style={styles.texto}>
            Epson EcoTank L6171 Impresora multifuncional
          </Text>
          <Text style={styles.precio}>$545.00</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Producto agregado correctamente")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image
            style={styles.img}
            source={require("../src/img/EpsonEcoTankL5190.jpg")}
          />
          <Text style={styles.texto}>
            Epson EcoTank L5190 Impresora multifuncional
          </Text>
          <Text style={styles.precio}>$427.00</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Producto agregado correctamente")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.img}
            source={require("../src/img/canon210.jpg")}
          />
          <Text style={styles.texto}>Cartucho de tinta CANON negro PG210</Text>
          <Text style={styles.precio}>$24.95</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Producto agregado correctamente")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image
            style={styles.img}
            source={require("../src/img/canon41.jpg")}
          />
          <Text style={styles.texto}>Cartucho de tinta CANON color CL41</Text>
          <Text style={styles.precio}>$24.95</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Producto agregado correctamente")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.img}
            source={require("../src/img/epsonyellow.jpg")}
          />
          <Text style={styles.texto}>Cartucho de tinta EPSON 133</Text>
          <Text style={styles.precio}>$24.95</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Producto agregado correctamente")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item1}></View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  buscador: {
    padding: 8,
  },
  titleApp: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 80,
  },
  HeadApp: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 16,
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  img: {
    width: 140,
    height: 140,
    marginRight: 8,
    alignSelf: "center",
  },
  item1: {
    flex: 1,
    marginVertical: 75,
    borderWidth: 0.8,
    borderColor: "#000000",
    margin: 80,
    flexDirection: "column",
    borderRadius: 12,
  },
  item: {
    flex: 1,
    marginVertical: -40,
    borderWidth: 0.8,
    borderColor: "#000000",
    margin: 80,
    flexDirection: "column",
    borderRadius: 12,
  },
  texto: {
    fontSize: 17,
    textAlign: "center",
  },
  precio: {
    fontSize: 20,
    textAlign: "center",
    color: "#AD0000",
    fontWeight: "bold",
    marginTop: 3,
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
  textaccesorios: {
    padding: 55,
    marginHorizontal: -25,
  },
});
