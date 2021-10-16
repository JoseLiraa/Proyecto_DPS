import React from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';

export default function login(props) {
  const{navigation} = props;
  return (
   <>
   <ScrollView>
  <Button title='Crear Cuenta ' onPress={() => navigation.navigate('crearcuenta')}></Button>
  <Button title='Ingresar' onPress={() => navigation.navigate('categorias')}></Button>
  </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

});
