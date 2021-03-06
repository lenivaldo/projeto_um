import React from "react";
import { View } from "react-native";

/*Estudando layout
//flexDirection: 'column', 'row'
//justifyContent: 'flex-start', 'center', 'flex-end', 'space-between','space-around'
//alignItens: 'stretch', 'flex-start', 'flex-end', 'center', 'baseline'
//flexWrap: 'nowrap', 'wrap', 'wrap-reverse'
//flexgrow: 
*/

class DimensoesFixas extends React.Component{
    render(){
        return(
            <View style={{width: '100%', height: '100%', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'stretch'}}>
                <View style={{flexShrink: 3, flexBasis: 300, backgroundColor: 'powderblue'}}/>
                <View style={{flexShrink: 3, flexBasis: 300, backgroundColor: 'skyblue'}}/>
                <View style={{flexShrink: 3, flexBasis: 300, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

export default DimensoesFixas;