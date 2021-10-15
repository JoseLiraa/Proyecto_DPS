import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Encabezado = () => {
  return (
   <>
   <View style={styles.container}>
   <Text style={styles.texto1}>SIMATIC</Text>
   <Text style={styles.texto2}>CARRITO DE COMPRAS</Text>
  </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#715cbb',
    marginTop: 0,
    marginBottom: 0,
    paddingTop:35,
    paddingBottom:20,
  },
  texto1:{
      color:'white',
      fontWeight:'bold',
      fontSize: 20,
      marginLeft:'30%',
  },
  texto2:{
    color:'white',
    marginLeft:'35%',
}
});

export default Encabezado;
