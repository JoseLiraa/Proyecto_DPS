import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
   <>
   <NavigationContainer>
     <Navigation></Navigation>
   </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

});
