import React from "react";
import { View } from "react-native";

/*Estudando layout
//flexDirection: 'column', 'row'
//justifyContent: 'flex-start', 'center', 'flex-end', 'space-between','space-around'
//
//
*/

class DimensoesFixas extends React.Component{
    render(){
        return(
            <View style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'space-around'}}>
                <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}}/>
                <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}}/>
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

export default DimensoesFixas;