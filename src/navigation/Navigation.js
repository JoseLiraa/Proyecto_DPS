import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CrearCuenta from '../screens/CrearCuenta';
import Carrito from '../screens/Carrito';
import login from '../screens/login';
import Categorias from '../../components/Categorias';
import AccesoriosComp from '../../components/AccesoriosComp';
import MemoriasUSB from '../../components/MemoriasUSB';
import Multifuncionales from '../../components/Multifuncionales';
import Pago from '../../components/Pago';
import FormCompra from '../../components/FormCompra';

const Stack = createStackNavigator();
export default function Navigation(){
return(
<Stack.Navigator>
<Stack.Screen name="login" component={login} options={{title:'login'}}/>
<Stack.Screen name="crearcuenta" component={CrearCuenta} options={{title:'Crear Cuenta'}}/>
<Stack.Screen name="accesoriosComp" component={AccesoriosComp} options={{title:'Accesorios de Computadoras'}}/>
<Stack.Screen name="memoriasUSB" component={MemoriasUSB} options={{title:'Memorias USB'}}/>
<Stack.Screen name="multifuncionales" component={Multifuncionales} options={{title:'Multifuncionales'}}/>
<Stack.Screen name="categorias" component={Categorias} options={{title:'Categorias'}}/>
<Stack.Screen name="carrito" component={Carrito} options={{title:'Carrito'}}/>
<Stack.Screen name="formcompra" component={FormCompra} options={{title:'Procesos de compra'}}/>
<Stack.Screen name="pago" component={Pago} options={{title:'Pago'}}/>
</Stack.Navigator>
);
}