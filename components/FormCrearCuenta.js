import React, {useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import {Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import {auth} from '../FirebaseAuth/firebase';

const FormCrearCuenta = () => {
    //variables para el formulario
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("categorias")
            }
    })

    return unsubscribe
    }, [])

        const handleSignUp = () => {
            auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error => alert(error.message))
        }


    return (
        <>
        <View style={styles.formulario}>
            <Text style={styles.label}>Correo electrónico:</Text>
            <View style={styles.item}>
                <TextInput
                    errorStyle={{ color: 'white', textAlign: 'center' }}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder="*Correo electrónico"
                    style={styles.input}
                />
            </View>

            <Text style={styles.label}>Contraseña:</Text>
            <View style={styles.item}>
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder="*Contraseña"
                    style={[styles.input, styles.inputTabs]}
                    secureTextEntry
                />
            </View>
            <View style={styles.contieneBoton}>
                <TouchableOpacity onPress={handleSignUp}
                    style={styles.btnSubmit}>
                    <Text style={styles.textoSubmit}>Crear</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("login")}
                >
                    <View style={styles.contieneEnlace}>
                        <Text style={{color:'black',fontWeight: 'bold', textAlign: 'center'}}>¿Ya tienes cuenta? Inicia Sesión</Text>
                    </View>
                </TouchableOpacity>
        </View>
        </>
        );
        }

        const styles = StyleSheet.create({
            formulario: {
                backgroundColor: '#FFF',
                flex: 1,
                marginLeft:35,
                marginRight: 35,
                marginVertical: 100,
                paddingTop:25,
                paddingBottom:35,
                paddingLeft:5,
                paddingRight:5,
                borderColor: '#D0D1E4',
                borderWidth:1,
                borderRadius:30,
            },
            contieneBoton:{
                marginLeft:30,
                marginRight:30,
                marginTop:15,
            },
            contieneEnlace:{
                marginLeft:30,
                marginRight:30,
                marginTop:5,
            },
            label: {
                fontWeight: 'bold',
                fontSize: 15,
                marginTop: 8,
                marginLeft:35,
            },
            input:{
                marginTop:0,
                height:45,
                width:"80%",
                borderColor: '#e1e1e1',
                borderWidth:1,
                borderStyle:'solid',
            },
            btnSubmit:{
                padding:10,
                backgroundColor:"#715cbb",
                marginVertical:5,
                borderRadius: 85,
            },
            textoSubmit:{
                color: '#FFF',
                fontWeight: 'bold',
                textAlign: 'center',
            },
            item:{
                alignItems:'center',
            },
        });

        export default FormCrearCuenta;