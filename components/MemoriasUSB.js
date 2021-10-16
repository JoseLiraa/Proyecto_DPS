import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import colors from '../assets/Utils/colors';
import Footer from '../components/Footer';

export default function memoriasUSB(props) {
  const { navigation } = props;
  return (
    <>
      <ScrollView>
        <Footer />
        <Text style={styles.textaccesorios}>MEMORIAS USB</Text>
        <View style={styles.item}>
          <Image style={styles.img} source={require('../src/img/usb32.jpg')} />
          <Text style={styles.texto}>
            Memoria USB Kingston 32GB, color blanca
          </Text>
          <Text style={styles.precio}>$6.00</Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Producto agregado correctamente')}
            style={styles.button}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item1}>
          <Image style={styles.img} source={require('../src/img/usb64.jpg')} />
          <Text style={styles.texto}>
            Memoria USB Kingston 64GB, color negra
          </Text>
          <Text style={styles.precio}>$10.00</Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Producto agregado correctamente')}
            style={styles.button}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image
            style={styles.img}
            source={require('../src/img/usb1281.jpg')}
          />
          <Text style={styles.texto}>Memoria USB Kingston 128GB</Text>
          <Text style={styles.precio}>$18.00</Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Producto agregado correctamente')}
            style={styles.button}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image
            style={styles.img}
            source={require('../src/img/adaptador.png')}
          />
          <Text style={styles.texto}>
            Adaptador de USB tipo C 3840x2160p a 30Hz a HDMI XTECH XTC540
          </Text>
          <Text style={styles.precio}>$13.95</Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Producto agregado correctamente')}
            style={styles.button}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image style={styles.img} source={require('../src/img/ssd240.jpg')} />
          <Text style={styles.texto}>
            SSD Kingston SATA Rev. 3.0 A400 240GB
          </Text>
          <Text style={styles.precio}>$46.99</Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Producto agregado correctamente')}
            style={styles.button}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image style={styles.img} source={require('../src/img/ssd480.jpg')} />
          <Text style={styles.texto}>
            SSD Kingston SATA Rev. 3.0 A400 480GB
          </Text>
          <Text style={styles.precio}>$77.99</Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Producto agregado correctamente')}
            style={styles.button}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image style={styles.img} source={require('../src/img/lector.jpg')} />
          <Text style={styles.texto}>
            Lector de tarjetas y hub USB 3.0 Klip Xtreme USB tipo C
          </Text>
          <Text style={styles.precio}>$24.95</Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Producto agregado correctamente')}
            style={styles.button}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item3}></View>
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
    fontWeight: 'bold',
    color: '#fff',
  },
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 80,
  },
  HeadApp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  img: {
    width: 140,
    height: 140,
    marginRight: 8,
    alignSelf: 'center',
  },
  item1: {
    flex: 1,
    marginVertical: 75,
    borderWidth: 0.8,
    borderColor: '#000000',
    margin: 80,
    flexDirection: 'column',
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
    borderColor: '#000000',
    margin: 80,
    flexDirection: 'column',
    borderRadius: 12,
  },
  texto: {
    fontSize: 17,
    textAlign: 'center',
  },
  precio: {
    fontSize: 20,
    textAlign: 'center',
    color: '#AD0000',
    fontWeight: 'bold',
    marginTop: 3,
  },
  button: {
    backgroundColor: '#5840B0',
    padding: 9,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
  },
  textaccesorios: {
    padding: 55,
    marginHorizontal: -25,
  },
});
