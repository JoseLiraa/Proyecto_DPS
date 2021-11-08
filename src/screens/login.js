import React , {useState, useEffect} from "react";
import { useNavigation } from '@react-navigation/core';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import Encabezado from "../../components/Encabezado";
import { FontAwesome } from "@expo/vector-icons";
import Pie from "../../components/Pie";
import {auth} from '../../FirebaseAuth/firebase';

export default function login(props) {

  const { navigation } = props;

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigacion = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigacion.replace("categorias")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }


  return (
    <>
    <ScrollView>
      <Encabezado />
      <Text style={styles.titulo}>INICIO DE SESIÓN</Text>

      <Card>
        <View>
          <TextInput
            errorStyle={{ color: 'white', textAlign: 'center' }}
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="*Correo electrónico"
            style={[styles.input, styles.inputTabs]}
          />

          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="*Contraseña"
            style={[styles.input, styles.inputTabs]}
            secureTextEntry
          />

          <TouchableOpacity
          onPress={() => navigation.navigate("recu")}
          >
          <Text style={styles.sub}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
        style={styles.button1}
        onPress={handleLogin}
        >
          <Text style={styles.buttonText1}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Iniciando con Gmail")} style={styles.button}>
          <Text style={styles.buttonText}>
            <FontAwesome name="google" size={15} color="white" />
            Iniciar con gmail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("crearcuenta")}
          style={styles.button1}
        >
          <Text style={styles.buttonText1}>Crear Cuenta</Text>
        </TouchableOpacity>
      </Card>
      <Pie />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    marginTop: 35,
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#5840B0",
    borderRadius: 5,
    width: "60%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
    marginTop: 25,
  },
  inputTabs: {
    width: "90%",
    marginLeft: 15,
  },
  sub: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    marginTop: 25,
  },
  button: {
    backgroundColor: "#5840B0",
    padding: 9,
    borderRadius: 10,
    margin: 10,
    width: "45%",
    marginTop: 8,
    marginHorizontal: 82,
  },
  button1: {
    backgroundColor: "#EDE6E6",
    padding: 9,
    borderRadius: 10,
    margin: 10,
    width: "45%",
    marginTop: 8,
    marginHorizontal: 82,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
  buttonText1: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
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
});
