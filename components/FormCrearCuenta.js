import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert } from 'react-native';
import shortid from 'shortid';

const FormCrearCuenta = ({cuentas, setCuentas, guardarMostrarForm, guardarCuentaStorage}) => {
    //variables para el formulario
    const [nombre, guardarNombre] = useState('');
    const [apellido, guardarApellido] = useState('');
    const [correo, guardarCorreo] = useState('');
    const [contrasena, guardarContrasena] = useState('');


    //Crear nueva cuenta
    const crearNuevaCuenta = () => {
        //Validar
        if(nombre.trim() === '' ||
        apellido.trim() === '' ||
        correo.trim() === '' ||
        contrasena.trim() === '')
            {
                //Falla la validación
                mostrarAlerta();
                return;
            }

            //Crear una nueva cuenta
            const cuenta = { nombre, apellido, correo, contrasena };
            cuenta.id = shortid.generate();

            //Agregar al state
            const cuentasNuevo = [...cuentas, cuenta];
            setCuentas(cuentasNuevo);

            //Pasar las nuevas citas a storage
            guardarCuentaStorage(JSON.stringify(cuentasNuevo));

            //Ocultar el formulario
            guardarMostrarForm(false);

            //Resetear el formulario
            guardarNombre('');
            guardarApellido('');
            guardarCorreo('');
            guardarContrasena('');
        };

        //Muestra la alerta si falla la validación
        const mostrarAlerta = () =>{
            Alert.alert(
                'Error', //Titulo
                'Todos los campos son obligatorios', //mensaje
                [{
                    text: 'OK' //Arreglo de botones
                }]
            )
        }

        return (
            <>
            <View style={styles.formulario}>


                <Text style={styles.label}>Nombres:</Text>
                <View style={styles.item}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ej: Juan Diego"
                        onChangeText={ texto => guardarNombre(texto) }
                    />
                </View>


                <Text style={styles.label}>Apellidos:</Text>
                <View style={styles.item}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ej: Marcos Rivas"
                        onChangeText={ texto => guardarApellido(texto) }
                    />
                </View>

                <Text style={styles.label}>Correo electrónico:</Text>
                <View style={styles.item}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ej: juan@gmail.com"
                        onChangeText={ texto => guardarCorreo(texto) }
                    />
                </View>

                <Text style={styles.label}>Contraseña:</Text>
                <View style={styles.item}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={ texto => guardarContrasena(texto) }
                    />
                </View>
                <View style={styles.contieneBoton}>
                    <TouchableHighlight onPress={ () => crearNuevaCuenta() }
                        style={styles.btnSubmit}>
                            <Text style={styles.textoSubmit}>Crear</Text>
                        </TouchableHighlight>
                </View>

                <View style={styles.contieneEnlace}>
                    <Text style={{color:'black',fontWeight: 'bold', textAlign: 'center'}}>¿Ya tienes cuenta? Inicia Sesión</Text>
                </View>
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
                marginVertical: 40,
                paddingTop:5,
                paddingBottom:25,
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