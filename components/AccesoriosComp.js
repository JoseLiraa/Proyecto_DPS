import React, { useState, useEffect, UseState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Footer from "../components/Footer";

export default function AccesoriosComp() {
  return (
    <>
      <ScrollView>
        <Footer />
        <Text style={styles.textaccesorios}>ACCESORIOS DE COMPUTADORAS</Text>
        <View style={styles.item}>
          <Image
            style={styles.img}
            source={require("../src/img/discoADATA.png")}
          />
          <Text style={styles.texto}>
            Disco Duro externo ADATA 1TB HD680 antigolpe azul
          </Text>
          <Text style={styles.precio}>$75.00</Text>
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
            source={require("../src/img/discoToshiba.jpg")}
          />
          <Text style={styles.texto}>
            Disco Duro externo Toshiba 1TB canvio basic
          </Text>
          <Text style={styles.precio}>$60.00</Text>
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
            source={require("../src/img/estuche.png")}
          />
          <Text style={styles.texto}>
            Estuche para disco externo 2.5'' case logic 320114 negro
          </Text>
          <Text style={styles.precio}>$9.00</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Producto agregado correctamente")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image style={styles.img} source={require("../src/img/Kronos.png")} />
          <Text style={styles.texto}>Repetidor Nexxt Kronos 301</Text>
          <Text style={styles.precio}>$27.00</Text>
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
            source={require("../src/img/barracuda.jpg")}
          />
          <Text style={styles.texto}>Disco duro Segate barracuda PC 1TB</Text>
          <Text style={styles.precio}>$57.99</Text>
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
            source={require("../src/img/barracuda.jpg")}
          />
          <Text style={styles.texto}>Disco duro Segate barracuda PC 1TB</Text>
          <Text style={styles.precio}>$57.99</Text>
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
            source={require("../src/img/barracuda.jpg")}
          />
          <Text style={styles.texto}>Disco duro Segate barracuda PC 2TB</Text>
          <Text style={styles.precio}>$80.48</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Producto agregado correctamente")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item3}></View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 140,
    height: 140,
    marginRight: 8,
    alignSelf: "center",
  },
  item1: {
    flex: 1,
    marginVertical: 78,
    borderWidth: 0.8,
    borderColor: "#000000",
    margin: 80,
    flexDirection: "column",
    borderRadius: 12,
  },
  item3: {
    flex: 1,
    marginVertical: 78,
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
