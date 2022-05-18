import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class Evento extends React.Component {
    state = {
        input : 'Ver alterações'
    }

    //Ver na página 104 link do React com componentes controlados
    render(){
        return(
            <View style={estilos.container}>
                
                <TextInput
                    style={estilos.input}
                    value={this.state.input}
                    onChangeText={(input) => this.setState({input})}>
                </TextInput>
                
                <Text style={estilos.font30}>{this.state.input}</Text>
            </View>
        )
    }
}

export default Evento;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        height: 50,
        width: 300,
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'black'
    },
    font30: {
        fontSize:30
    }
})