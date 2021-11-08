import { useNavigation } from '@react-navigation/core'
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity,SafeAreaView} from 'react-native';
import colors from '../assets/Utils/colors';
import SearchBar from './SearchBar';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {auth} from '../FirebaseAuth/firebase';

export default function Footer() {
  const navigation = useNavigation()
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("login")
      })
      .catch(error => alert(error.message))
    }
return (
<SafeAreaView style={styles.Header}>
  <Text style={styles.HeadApp}>SIMATIC</Text>
  <Text style={styles.subtitulo}>Carrito de compras</Text>
<View style={styles.buscador}>
  <SearchBar/>
</View>
<View style={styles.imge}>
  <AntDesign name="shoppingcart" size={24} color="white" />
  <Text style={styles.car}>Mi</Text>
  <Text style={styles.car1}>carrito</Text>
</View>
<TouchableOpacity
onPress={handleSignOut}
>
<View style={styles.imgen}>
<AntDesign name="user" size={24} color="white" />
<Text style={styles.car2}>Cerrar</Text>
  <Text style={styles.car3}>Sesión</Text>
</View>
</TouchableOpacity>

<View style={styles.viewFooter}>
<Text style={styles.info}> Contáctanos </Text>
<View style={styles.info2}>
<FontAwesome name="phone" size={16} color="white" />
</View>
<Text style={styles.info3} > 2294-1771 </Text>
<Text style={styles.info4}>compras@simatic.com.sv</Text>
<View style={styles.info5}>
<Entypo name="mail" size={15} color="white" />
</View>
<View style={styles.info6}>
<Text style={{fontSize:10,marginTop:22,color:'white'}}>Copyright© por SIMATIC. Todos los derechos reservados</Text>
</View>
</View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
buscador:{
  padding:8,
},
info:{
  color:'white',
  marginVertical: -10,
  fontSize:11
},
info6:{
  alignItems: 'flex-end',
  marginHorizontal:35,
},
info2:{
  color:'#fff',
  marginHorizontal:95,
  marginVertical: -8,
},
info5:{
  color:'#fff',
  marginHorizontal:75,
  marginVertical: -22,
},
info3:{
  color:'#fff',
  marginHorizontal:110,
  marginVertical: -5,
  fontSize:11
},
info4:{
  color:'#fff',
  marginHorizontal:95,
  marginVertical: 8,
  fontSize:11
},
viewFooter: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: colors.PRIMARY_COLOR,
  height: 90,
  justifyContent: 'center',
  marginVertical: -825,
},
Header:{
  backgroundColor:colors.PRIMARY_COLOR,
  height:80,
},
HeadApp:{
  fontSize:20,
  fontWeight: 'bold',
  color: '#fff',
  marginTop:16,
},
subtitulo:{
  fontSize:15,
  fontWeight: 'bold',
  color: '#fff',
},
imge:{
  alignItems: 'flex-end',
  padding: 15,
  marginVertical: -118,
  marginHorizontal:50
},
imgen:{
  alignItems: 'flex-end',
  padding: 15,
  marginVertical: 32,
  marginHorizontal:135
},
car:{
  alignItems: 'flex-end',
  color: '#fff',
  marginVertical: -20,
  marginHorizontal:-24,
  fontSize:15,
},
car1:{
  alignItems: 'flex-end',
  color: '#fff',
  marginVertical: 15,
  marginHorizontal:-45,
  fontSize:15,
},
car2:{
  alignItems: 'flex-end',
  color: '#fff',
  marginVertical: -20,
  marginHorizontal:-45,
  fontSize:15,
},
car3:{
  alignItems: 'flex-end',
  color: '#fff',
  marginVertical: 15,
  marginHorizontal:-45,
  fontSize:15,
},
});