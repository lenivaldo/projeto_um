import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import OlaMundo from './componentes/OlaMundo';
//import DimensoesFixas from './componentes/DimensoesFixas';
import ChecaNumero from './componentes/ChecaNumero';
import Evento from './componentes/Evento';
import UsuarioGithub from './componentes/UsuarioGithub';

/*
// 4 - Criando os primeiros componentes
// 5 - Estilizando componentes
// 6 - Layouts com Flexbox
// 7 - Renderização condicional
// 8 - State, eventos e componentes controlados e não controlados
// 9 - Requisições AJAX e API's
// 10- Navegação
// 11- Banco de dados Firebase
// 12- Hooks
*/

const Drawer = createAppContainer();

export default function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Evento" component={Evento}/>
        <Drawer.Screen name="Github" component={UsuarioGithub}/>        
      </Drawer.Navigator>
    </NavigationContainer>
    
    /*
    <Evento/>
    
    <UsuarioGithub/>    
    
    <ChecaNumero numero={47}/>
    <View>
    <DimensoesFixas/>
    <StatusBar style='auto'/>
    </View>
    <View style={styles.container}>
      <OlaMundo nome='Leitor'/>
      <StatusBar style='auto'/>
    </View>    
    
    <View style={styles.container}>
      <Text>Iniciando a revisão dos estudos de React Native!</Text>
      <StatusBar style="auto" />
    </View>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32968f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});