import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{Ionicons} from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';


import Principal from './src/Telas/Principal';
import Tela1 from './src/Telas/Tela1';
import Tela2 from './src/Telas/Tela2';
import Tela3 from './src/Telas/Tela3';

const Tab= createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Tela1') {
          iconName = focused
            ? 'person-outline'
            : 'football-outline';
        } else if (route.name === 'Tela2') {
          iconName = focused ? 'person-outline' : 'basketball-outline';
        }else if (route.name === 'Tela3') {
          iconName = focused ? 'person-outline' : 'bowling-ball-outline';
        }
        
        //aqui define os ícones que irão aparecer nas Tabs
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#3f64c7',
      inactiveTintColor: 'gray',      
    }}    
    >
      <Tab.Screen name= "Tela1" component={Tela1} options={{tabBarLabel: 'Serviços', tabBarIcon:({color, size }) => (<FontAwesome name="gears" size={24} color="black" />), }}></Tab.Screen>
      <Tab.Screen name= "Tela2" component={Tela2} options={{tabBarLabel: 'Conta', tabBarIcon:({color, size }) =>(<Entypo name="clipboard" size={24} color="black" />), }}></Tab.Screen>
      <Tab.Screen name= "Tela3" component={Tela3} options={{tabBarLabel: 'Pagamento', tabBarIcon:({color, size }) =>(<FontAwesome name="credit-card" size={24} color="black" />), }}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();
  return (
    //compoe todas as telas que vou usar
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Principal'>

      <Stack.Screen 
          name="Tela1" 
          component={Tabs}
          options={{
            title:'RedLine',
            headerStyle:{
            backgroundColor: '#e33449',
            },
            headerTintColor: '#FFF' , 
            headerShown: true         
          }}
          >

      </Stack.Screen>
      <Stack.Screen name="Tela2" component={Tela2}></Stack.Screen>
      <Stack.Screen name="Tela3" component={Tela3}></Stack.Screen>
      <Stack.Screen name="Principal" component={Principal} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
 
  );
}