import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Estilos from '../estilos/Estilos';

class OlaMundo extends React.Component{
    render(){
        return(
            <View >
                <Text >Olá,</Text>
                <Text style={estilos.texto}>{this.props.nome}!</Text>
            </View>
        )
    }
}

export default OlaMundo;

const estilos = StyleSheet.create({
   texto: {
       fontSize: 100,
       fontWeight: 'bold',
       borderWidth: 8,
       borderColor: 'white',
       padding: 10,
       color: 'white'
   } 
});

/*
export default function OlaMundo(props){
    return(
        <View>
            <Text>Olá,</Text>
            <Text>{props.nome}!</Text>
        </View>
    );
}
*/

//Continuar no passo 9