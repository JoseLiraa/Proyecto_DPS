import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormCrearCuenta from './components/FormCrearCuenta';

export default function App() {
  return (
   <>
   <View style={styles.container}>
  <FormCrearCuenta />
  </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

});
