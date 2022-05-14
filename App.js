import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import OlaMundo from './componentes/OlaMundo';
import DimensoesFixas from './componentes/DimensoesFixas';


export default function App() {
  return (

    <View>
    <DimensoesFixas/>
    <StatusBar style='auto'/>
    </View>

    /*
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

