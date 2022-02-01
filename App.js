import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Detail from './src/pages/Detail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import config from "./src/model/config"; // add
import { createConnection } from "typeorm"; // add
import React from 'react'
import Pedido from './src/pages/Pedido';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
function MyTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detail-st" component={Detail} />
      <Tab.Screen name="Pedido-st" component={Pedido} />
    </Tab.Navigator>
  );
}

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'black',
      accent: 'black',
    },
  };

  const connect = React.useCallback(async () => {
    try {
      const connection = await createConnection(config); // create a connection with our config

      
          //primise-based call example (same as get all cars)
          connection
            .getRepository("Pedido")
            .find()
            .then((ped) => {
              console.log(ped);
            });
              } catch (err) {
                console.log(err); // check (or deal) with connection errors
              }
            });

  React.useEffect(() => {
    connect(); // this must be done once in the App's entry point (I suggest here in App.js)
  }, []);


  return (
  <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen 
          component={MyTabs}
          name="Home"
        />
        <Stack.Screen 
          component={Detail}
          name="Detail"
        />
         <Stack.Screen 
          component={Pedido}
          name="Pedido"
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
