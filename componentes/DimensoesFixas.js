import React from "react";
import { View } from "react-native";

//Estudando layout

class DimensoesFixas extends React.Component{
    render(){
        return(
            <View style={{width: '100%', height: '100%', flexDirection: 'column'}}>
                <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}}/>
                <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}}/>
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

export default DimensoesFixas;