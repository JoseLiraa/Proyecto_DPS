import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableHighlight,
} from "react-native";
import NumericInput from "react-native-numeric-input";
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ArticulosCarrito = () => {
  //variables para el formulario

  return (
    <>
      <View style={styles.contenedor}>
      <View style={{ flexDirection: "row", marginTop:100 }}>
        <FontAwesome5 name="shopping-cart" size={20} color="black" style={{marginLeft:35,marginTop:10}} />
        <Text style={styles.label}>Mi carrito</Text>
        <EvilIcons name="trash" size={30} color="black" style={{marginTop:10, marginLeft:30}}/>
        </View>

        <View style={{ flexDirection: "row", marginTop:0 }}>
          <View style={styles.contenedorArticulos}>
            <View style={styles.contieneNumeric}>
              <NumericInput
                maxValue={50}
                minValue={1}
                step={1}
                totalWidth={150}
                totalHeight={40}
                iconSize={50}
                valueType="real"
                rounded
                textColor="#715DB8"
                iconStyle={{ color: "white" }}
                rightButtonBackgroundColor="#7A67BE"
                leftButtonBackgroundColor="#8777C1"
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.img}
                source={require("../src/img/usb32.jpg")}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.texto}>Memoria USB</Text>
                <Text style={styles.texto}>Kingston 32GB</Text>
                <Text style={styles.texto}>color blanca</Text>
              </View>
            </View>
            <View style={styles.contienePrecio}>
                <Text style={styles.textoprecio}>$6.00</Text>
            </View>
          </View>
          <View style={styles.contenedorDetalleTotal}>
            <View style={{ flexDirection: "row",marginTop:10}}>
             <Text>Envio:</Text>
              <Text style={{ marginLeft:20}}>GRATIS</Text>
            </View>
            <View style={{ flexDirection: "row" ,marginTop:20}}>
              <Text>Subtotal:</Text>
              <Text style={{ marginLeft:15}}>$6.00</Text>
            </View>
            <View style={{ flexDirection: "row" ,marginTop:20}}>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Total:
              </Text>
              <Text
                style={{
                color: "black",
                fontWeight: "bold",
                color:"#715cbb",
                fontSize:18,
                marginLeft:30,
                }}
              >$6.00</Text>
            </View>
            <View style={styles.contieneBoton}>
              <TouchableHighlight
                onPress={() => crearNuevaCuenta()}
                style={styles.btnSubmit}
              >
                <Text style={styles.textoSubmit}>Pagar</Text>
              </TouchableHighlight>
            </View>
            </View>

        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  contenedorArticulos: {
    flexBasis: "60%",
    marginLeft: 15,
    marginRight: 0,
    marginTop: 0,
    marginBottom:120,
    paddingTop: 5,
    paddingBottom: 25,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: '#D0D1E4',
    borderWidth: 2,
    borderRadius: 30,
  },
  contenedorDetalleTotal:{
    flexBasis: "30%",
    marginLeft: 15,
    marginRight: 0,
    marginTop: 10,
    marginBottom:125,
    paddingTop: 5,
    paddingBottom: 25,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: '#CCD1D1',
    backgroundColor:'#E5E7E9',
    borderWidth: 1,
  },

  contieneNumeric: {
    marginLeft: "30%",
    marginTop: 10,
  },
  contieneBoton: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
  },
  contienePrecio: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
  },
  contieneDetalles: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 8,
    marginLeft: 10,
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: "#715cbb",
    marginVertical: 5,
    borderRadius: 18,
  },
  textoSubmit: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  img: {
    marginTop: 10,
    width: 100,
    height: 100,
    marginRight: 8,
  },
  texto: {
    marginTop: 10,
    fontSize: 15,
    textAlign: "center",
  },
  textoprecio: {
    color: "#715cbb",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
});

export default ArticulosCarrito;
