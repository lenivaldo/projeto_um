import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default props => {
    return (
        <View style={estilos.container}>
            {validaParOuImpar(props.numero)}
        </View>
    )
}

function validaParOuImpar(numero) {
    return numero % 2 == 0
    ? <Text style={estilos.texto}>O número é par!</Text>
    : <Text style={estilos.texto}>O número é ímpar!</Text>
}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32968f',
        alignItems: "center",
        justifyContent: "center"
    },
    texto: {
        fontSize: 18,
        fontWeight: "bold",
        borderColor: 'red',
        padding: 10
    }
});