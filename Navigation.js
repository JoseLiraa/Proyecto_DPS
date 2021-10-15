import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CrearCuenta from '../screens/CrearCuenta';
import Carrito from '../screens/Carrito';

const Stack = createStackNavigator();
export default function Navigation(){
return(
<Stack.Navigator>
<Stack.Screen name="crearcuenta" component={CrearCuenta} options={{title:'CrearCuenta'}}/>
<Stack.Screen name="carrito" component={Carrito} options={{title:'Carrito'}}/>
</Stack.Navigator>
 );
}
